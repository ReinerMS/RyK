import { useEffect, useRef } from 'react'

export default function AmbientParticles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    let width = 0
    let height = 0
    let motes = []
    let frameId = null

    function resize() {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = Math.round((width * height) / 22000)
      motes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: 0.6 + Math.random() * 1.6,
        vx: (Math.random() - 0.5) * 0.05,
        vy: (Math.random() - 0.5) * 0.05,
        a: 0.1 + Math.random() * 0.2,
      }))
    }

    function draw() {
      ctx.clearRect(0, 0, width, height)

      for (const mote of motes) {
        if (!reduceMotion) {
          mote.x += mote.vx
          mote.y += mote.vy
          if (mote.x < 0) mote.x = width
          if (mote.x > width) mote.x = 0
          if (mote.y < 0) mote.y = height
          if (mote.y > height) mote.y = 0
        }
        ctx.beginPath()
        ctx.fillStyle = `rgba(169, 122, 36, ${mote.a})`
        ctx.arc(mote.x, mote.y, mote.r, 0, Math.PI * 2)
        ctx.fill()
      }

      if (!reduceMotion) frameId = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('resize', resize)
      if (frameId) cancelAnimationFrame(frameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="ambient-particles" aria-hidden="true" />
}
