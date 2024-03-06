
import { VoteType } from '../types/Types'
import { UpVoteMain } from './UpVoteMain'
import { useUpvoteContext } from '../context/UpVoteContext';
import styles from '../styles/UpVoteManager.module.css'

export const UpVoteManager = () => {
    const { voteState } = useUpvoteContext();
    return(
      <div className={styles.main}>
        <div className={styles.container}>
          {voteState.map((vote: VoteType) => 
            <UpVoteMain key={vote.id} vote={vote} />
          )}
        </div>
      </div>
    )
  }