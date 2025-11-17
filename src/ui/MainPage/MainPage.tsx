import {TracksList} from "../TracksList/TracksList.tsx";
import {TrackDetails} from "../TrackDetails/TrackDetails.tsx";
import {useMainPage} from "../../bll/useMainPage.tsx";


export function MainPage() {
  const {trackId, handleTrackSelect} = useMainPage()

  return (
    <div>
      <div style={{display: 'flex', gap: '30px'}}>
        <TracksList
          selectedTrackId={trackId}
          onTrackSelect={handleTrackSelect}
        />
        <TrackDetails trackId={trackId} />
      </div>
    </div>
  )
}