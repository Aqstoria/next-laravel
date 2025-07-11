import StylelintPlugin from 'stylelint-webpack-plugin'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    quietDeps: true, // Suppress sass deprecation warnings in dependencies
    silenceDeprecations: ['import', 'global-builtin', 'legacy-js-api'], // Suppress particular sass deprecation warnings
  },
  images: {
    domains: ['127.0.0.1', 'localhost', 'your-domain.com'], // Allow images from localhost and your Botble domain
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1/ecommerce',
    NEXT_PUBLIC_AUTH_URL: process.env.NEXT_PUBLIC_AUTH_URL || 'http://localhost:8000/api/v1',
  },
  webpack: (config) => {
    config.plugins.push(new StylelintPlugin())

    return config
  },
}

export default nextConfig
