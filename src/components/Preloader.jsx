import { useEffect, useState } from 'react'

export default function Preloader() {
  const [visible, setVisible] = useState(true)
  const [removed, setRemoved] = useState(false)

  useEffect(() => {
    // 1.5 soniyadan so'ng fade-out boshlanadi
    const fadeTimer = setTimeout(() => setVisible(false), 1500)
    // fade-out animatsiyasi tugagach DOM'dan butunlay olib tashlanadi
    const removeTimer = setTimeout(() => setRemoved(true), 2050)
    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(removeTimer)
    }
  }, [])

  if (removed) return null

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[999] bg-paper dark:bg-void flex items-center justify-center transition-opacity duration-500 ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="flex flex-col items-center">
        <img
          src="/logo.png"
          srcSet="/logo.png 1x, /logo@2x.png 2x"
          alt=""
          className="w-16 h-16 md:w-20 md:h-20 animate-pulseSoft"
        />
        <div className="mt-5 w-8 h-1 rounded-full bg-line overflow-hidden">
          <div className="h-full w-1/3 rounded-full bg-growth-gradient animate-slideBar" />
        </div>
      </div>
    </div>
  )
}
