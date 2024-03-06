
import { ReactNode , CSSProperties} from 'react';
import styles from '../styles/UpVote.module.css'

type UpVoteProps = { 
    children: ReactNode;
    style: CSSProperties;
    onClick: ()=> void
}

export const UpVote = ({ onClick, children, style }: UpVoteProps) => {
    return(
        <div 
            className={styles.upvote} 
            data-testid="upvote"
            style={style} 
            onClick={onClick}
        >
            {children}
        </div>
    )
}