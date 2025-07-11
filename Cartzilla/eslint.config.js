import js from '@eslint/js';
import nextConfig from 'eslint-config-next/core-web-vitals.js';

export default [
  js.configs.recommended,
  nextConfig,
  {
    rules: {
      'react-hooks/exhaustive-deps': 'off'
    }
  }
]; 