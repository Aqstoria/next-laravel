import { generateFonts, FontAssetType } from '@twbs/fantasticon'
import { optimize } from 'svgo'
import fs from 'fs-extra'
import configureLogger from './logger.mjs'

// Setup logger with specific context
const log = configureLogger('Icon Font')

// Paths configuration
const config = {
  src: 'src/icons/svg',
  output: 'src/icons/font',
  fontName: 'cartzillaIcons',
  cssPrefix: 'ci',
}

// Options for SVG optimization to be used in the optimizeSvgIcons function
const svgOptimizeOptions = {
  removeViewBox: false,
  removeDimensions: true,
}

// Configuration options for generating font assets
const generateFontsOptions = {
  inputDir: config.src, // Directory containing source SVG icons
  outputDir: config.output, // Directory where output (fonts and CSS) will be saved
  fontTypes: [FontAssetType.WOFF2], // Types of font assets to generate
  assetTypes: ['css'], // Types of additional assets to generate (CSS in this case)
  fontsUrl: './', // Base URL/path for the fonts in the generated CSS
  tag: '', // Tag to be appended to font names
  prefix: config.cssPrefix, // Prefix to use for CSS classes
  name: config.fontName, // Name of the generated font
}

// Asynchronously clears the output directory to prepare for new output
const cleanOutputDirectory = async () => {
  await fs.emptyDir(config.output)
}

// Asynchronously optimizes SVG files in the source directory
const optimizeSvgIcons = async (options) => {
  log.info('Optimizing SVG icons...')
  const files = fs.readdirSync(config.src)

  for (let file of files) {
    if (file.endsWith('.svg')) {
      const data = fs.readFileSync(`${config.src}/${file}`, 'utf8')
      const result = await optimize(data, options)
      fs.writeFileSync(`${config.src}/${file}`, result.data)
    }
  }
  log.success('Optimized SVG icons')
}

// Remove the @font-face declaration from the generated CSS
const removeFontFace = async () => {
  const cssFileName = `${config.fontName}.css`
  const cssFilePath = `${config.output}/${cssFileName}`
  const css = fs.readFileSync(cssFilePath, 'utf8')
  // Remove the @font-face declaration from the CSS
  const modifiedCss = css.replace(/@font-face {[^}]*}/, '')
  // Remove empty lines
  const cleanedCss = modifiedCss.replace(/^\s*[\r\n]/gm, '')

  fs.writeFileSync(cssFilePath, cleanedCss)
}

// Main function to run all asynchronous tasks
;(async () => {
  await cleanOutputDirectory()
  await optimizeSvgIcons(svgOptimizeOptions)
  log.info('Generating font...')
  await generateFonts(generateFontsOptions)
  log.info('Removing @font-face declaration...')
  await removeFontFace()
  log.success('Font generated')
})().catch((error) => log.error('', 'An error occurred:', error))
