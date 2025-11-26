// next.config.test.js
import type { NextConfig } from 'next'
import nextConfig from '../../next.config.mjs'

const config = nextConfig as NextConfig

describe('Next.js Redirects', () => {
  it('should define a redirects function', () => {
    expect(typeof nextConfig.redirects).toBe('function')
  })

  it('should redirect mac-a-thon.gdscmcmasteru.ca to gdgmcmasteru.ca', async () => {
    const redirects = await config.redirects?.()
    expect(redirects).toBeDefined()

    const rule = redirects?.find(
      (r) => r.has?.[0]?.value === 'mac-a-thon.gdscmcmasteru.ca',
    )
    expect(rule).toBeDefined()
    expect(rule?.source).toBe('/:path*')
    expect(rule?.destination).toBe('https://mac-a-thon.gdgmcmasteru.ca/:path*')
    expect(rule?.permanent).toBe(true)
  })

  it('should allow images from cdn.sanity.io', () => {
    expect(nextConfig.images?.domains).toContain('cdn.sanity.io')
  })
})
