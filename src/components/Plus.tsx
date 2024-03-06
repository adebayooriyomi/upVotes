import { ReactNode } from 'react';
import styles from '../styles/Plus.module.css'

type PlusProps = {
  children: ReactNode;
  onClick: ()=> void
}

export const Plus = ({ children, onClick }: PlusProps) => {
    return(
      <div onClick={onClick} className={styles.plus}>
       {children}
    </div>
    )
}