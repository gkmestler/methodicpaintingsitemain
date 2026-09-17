import nextConfig from 'eslint-config-next'
import nextTs from 'eslint-config-next/typescript'

const eslintConfig = [
  ...nextConfig,
  ...nextTs,
  {
    ignores: ['.next/**', 'out/**', 'node_modules/**', 'next-env.d.ts'],
  },
]

export default eslintConfig
