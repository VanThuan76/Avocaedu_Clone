import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()
/** @type {import('next').NextConfig} */

const hostnames = ['avoca-prod.s3.amazonaws.com'];

const nextConfig = {
  distDir: '.next',
  swcMinify: true,
  reactStrictMode: true,
  typescript: {
    tsconfigPath: './tsconfig.json'
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: hostnames.map((hostname) => ({
      protocol: 'https',
      hostname
    }))
  },
  experimental: {
    mdxRs: true
  }
}

export default withNextIntl(nextConfig)
