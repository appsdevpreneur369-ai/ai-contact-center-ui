import { useEffect, useRef } from "react"

export default function useAutoScroll<T>(dep: T) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }, [dep])

  return ref
}
