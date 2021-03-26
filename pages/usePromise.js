import { useState, useEffect } from "react"

// useEffect 에 파라미터로 전달해주는 함수에서 async 를 사용하면 안됩니다.
export default function usePromise(promiseCreator, deps) {
  const [resolved, setResolved] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const process = async () => {
    setLoading(true)
    try {
      const result = await promiseCreator()
      setResolved(result)
    } catch (e) {
      setError(e)
    }
    setLoading(false)
  }

  useEffect(() => {
    process()
  }, deps)

  return [loading, resolved, error]
}
