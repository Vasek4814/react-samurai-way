// TrackDetails----------------------------
export type GetTrackDetailsOutputData = {
  id: string
  attributes: {
    title: string | null
    lyrics: string | null
  }
}
export const getTrack = (trackId: string) => {
  const promise: Promise<{
    data: GetTrackDetailsOutputData
  }> = fetch("https://musicfun.it-incubator.app/api/1.0/playlists/tracks/" + trackId, {
    headers: {
      'api-key': '9fcf0d75-36d0-4680-b175-91549b20920a'
    }
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
    headers: {
      'api-key': '9fcf0d75-36d0-4680-b175-91549b20920a'
    },
  })
    .then(res => res.json())
  return promise
}
//-----------------------------------------