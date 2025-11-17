import {useState} from "react";

export function useMainPage() {
  const [trackId, setTrackId] = useState<string | null>(null)

  const handleTrackSelect = (id: string | null): void => {
    setTrackId(id)
  }
  return {trackId, handleTrackSelect}
}