#!/usr/bin/env node

import { renderSVG } from 'uqr'

const url = process.argv[2]
if (!url) {
  console.error("Please provide a URL as an argument")
  process.exit(1)
}

try {
  const svgString = renderSVG(url, {pixelSize: 2})
  const base64 = Buffer.from(svgString).toString('base64')
  console.log(`data:image/svg+xml;base64,${base64}`)
} catch (error) {
  console.error("Error generating QR code:", error)
  process.exit(1)
}
