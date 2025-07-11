import { useEffect, useState } from 'react'

export function useRTL() {
  const isRTLEnabled = process.env.NEXT_PUBLIC_ENABLE_RTL === 'true';
  const [isRTL, setIsRTL] = useState<boolean>(isRTLEnabled);

  useEffect(() => {
    setIsRTL(isRTLEnabled)
  }, [])

  return isRTL
}
