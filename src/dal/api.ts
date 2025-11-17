// TrackDetails----------------------------
export type GetTrackDetailsOutputData = {
  id: string
  attributes: {
    title: string | null
    lyrics: string | null
  }
}
const prepareHeaders = () => {
  const apiKey = import.meta.env.VITE_API_KEY
  if(!apiKey) return  undefined

  return {
    'api-key': apiKey
  }
}
export const getTrack = (trackId: string) => {
  const promise: Promise<{
    data: GetTrackDetailsOutputData
  }> = fetch("https://musicfun.it-incubator.app/api/1.0/playlists/tracks/" + trackId, {
    headers: prepareHeaders()
  })
    .then(res => res.json())
  return promise
}
// ------------------------------------
//TrackList---------------------------
export type AttachmentsDto = {
  url: string
}
export type TrackListItemOutputAttributes = {
  title: string
  attachments: Array<AttachmentsDto>
}
export type TrackListItemOutput = {
  id: string
  attributes: TrackListItemOutputAttributes
}
type GetTrackListOutput = {
  data: Array<TrackListItemOutput>
}

export const getTracks = () => {
  const promise: Promise<GetTrackListOutput> = fetch("https://musicfun.it-incubator.app/api/1.0/playlists/tracks", {
    headers: prepareHeaders()
  })
    .then(res => res.json())
  return promise
}
//-----------------------------------------