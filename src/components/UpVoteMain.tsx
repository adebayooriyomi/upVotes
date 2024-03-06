import { UpVote } from './UpVote'
import { Plus } from './Plus'
import { VoteType } from '../types/Types'
import { useUpvoteContext } from '../context/UpVoteContext';
import styles from '../styles/UpVoteMain.module.css'


export const UpVoteMain =  ({ vote }:{ vote: VoteType }) => {
  const { updateVoteState, addUpVote } = useUpvoteContext();

  const handleUpVoteClick = (voteId: number, upVoteId: number) => {
    updateVoteState(voteId, upVoteId);
  };

  const handleAddUpVoteClick = (voteId: number) => {
    addUpVote(voteId)
  }

    return (
      <div className={styles.upvoteMainContainer}>
        <div className={styles.upvoteContainer}>
          <div className={styles.upvoteContent}>
          {(vote.upVotes).map((upVote, idx) => 
             <UpVote 
                  key={idx} 
                  style={{ backgroundColor: upVote?.selected ? '#E5E8FD' : '#F4F6F8'}} 
                  onClick={() => handleUpVoteClick(vote.id, upVote.id)}
              >
                 <svg width="24" height="24" viewBox="0 0 24 24" fill={ upVote?.selected ? "#253CF2" : "#343A40" } xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.3149 6.29307C11.4939 6.09658 11.7418 5.99834 12.0034 5.99834C12.265 5.99834 12.5128 6.11062 12.6918 6.29307L16.7125 10.3913C16.9053 10.5878 17.0016 10.8404 17.0016 11.0931C17.0016 11.3457 16.9053 11.5983 16.7125 11.7948C16.3407 12.1738 15.7211 12.1738 15.3493 11.7948L12.9672 9.36676V17.0417C12.9672 17.589 12.5404 18.0017 12.0034 18.0017C11.4664 18.0017 11.0395 17.589 11.0395 17.0417V9.36676L8.64364 11.7948C8.27187 12.1738 7.65225 12.1738 7.28048 11.7948C6.9087 11.4159 6.9087 10.7843 7.28048 10.4054L11.3149 6.29307Z" fill="#343A40"/>
                  </svg>
             </UpVote>
          )}
          </div>
        </div>
        <div>
          <Plus onClick={()=>handleAddUpVoteClick(vote.id)} >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5C11.4477 5 11 5.45098 11 5.99078V11H5.99078C5.44359 11 5 11.4439 5 12C5 12.5523 5.45098 13 5.99078 13H11V18.0092C11 18.5564 11.4439 19 12 19C12.5523 19 13 18.549 13 18.0092V13H18.0092C18.5564 13 19 12.5561 19 12C19 11.4477 18.549 11 18.0092 11H13V5.99078C13 5.44359 12.5561 5 12 5Z" fill="#343A40"/>
              </svg>
          </Plus>
        </div>
      </div>
    )
  }