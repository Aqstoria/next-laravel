// Check if RTL is enabled via the public environment variable
const enableRTL = process.env.NEXT_PUBLIC_ENABLE_RTL === 'true'

// Define the options for postcss-rtlcss.
// Since I don't need to configure something specific, however, somebody might need to add some options.
const postcssRtlcssOptions = {}

// Log status for clarity during build
if (enableRTL) {
    console.log('INFO: Configuring postcss-rtlcss [ENABLED] via postcss.config.mjs')
} else {
    console.log('INFO: Configuring postcss-rtlcss [DISABLED] via postcss.config.mjs')
}

export default {
  plugins: [
    [
      'postcss-rtlcss',
      enableRTL ? postcssRtlcssOptions : false // Provide options object if enabled, otherwise false to disable
    ],
  ],
}
