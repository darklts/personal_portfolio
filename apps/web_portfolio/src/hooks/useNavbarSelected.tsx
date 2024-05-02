import { useState, useEffect, RefObject } from 'react'

const useNavbarSelected = (ref: RefObject<HTMLElement>) => {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false)

  const addClassList = (condition: boolean, elementId?: string) => {
    const nav = document.getElementById(`navbar-${elementId}`)
    if (nav) {
      if (condition) {
        nav.classList.add('navbar-active')
      } else {
        nav.classList.remove('navbar-active')
      }
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
      },
      { rootMargin: '-300px' }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    addClassList(isIntersecting, ref.current?.id)

    return () => {
      addClassList(false, ref.current?.id)
      observer.disconnect()
    }
  }, [isIntersecting, ref])
}

export default useNavbarSelected
