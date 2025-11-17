import {useTrackDetail} from "../../bll/UseTrackDetail.tsx";
import styles from '../TrackDetails.module.css'

type Props = {
  trackId: string | null
}

export function TrackDetails({trackId}: Props) {
  const {trackDetails} = useTrackDetail(trackId)

  return (
    <div className={styles.track}>
      <h2>Details</h2>
      <div>
        {!trackDetails && !trackId && 'Track is not selected'}
        {!trackDetails && trackId && 'Loading...'}
        {trackDetails && trackId && trackDetails.id !== trackId && 'loading...'}
        {trackDetails && <div>
          <h3>{trackDetails.attributes.title}</h3>
          <h4>Lyrics</h4>
          <p>
            {trackDetails.attributes.lyrics ?? 'no lyrics'}
          </p>
        </div>}
      </div>
    </div>
  )
}