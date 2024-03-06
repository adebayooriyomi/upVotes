import { createContext, useContext, useState, useEffect } from 'react';
import { VoteType, VoteContextType } from '../types/Types'


export const UpVoteContext = createContext<VoteContextType>({
  voteState: [],
  updateVoteState: () => {},
  addUpVote: () => {}
});

const initialVotes = [
    { id: 1, upVotes:[{id: 1, selected: false}] },
    { id: 2, upVotes: [{id: 1, selected: false}] },
    { id: 3, upVotes: [{id: 1, selected: false}] }
  ];

export const useUpvoteContext = () => useContext(UpVoteContext);

export const UpVoteProvider = ({ children }:{children: any }) => {

    const storedUpvotes = localStorage.getItem('upvotes');

    const [voteState, setVoteState] = useState<VoteType[]>(() => {
        return storedUpvotes ? JSON.parse(storedUpvotes) : initialVotes
    });

    const updateVoteState = (id: number, upVoteId: number) => {
        const updatedVotes = voteState.map(upvote =>
          upvote.id === id 
            ? { 
                ...upvote, 
                upVotes: upvote.upVotes.map((upvote) => 
                  upvote.id === upVoteId ? { ...upvote, selected: !upvote.selected } : upvote
                ) 
              } 
            : upvote
        );
        setVoteState(updatedVotes);
    };

    const addUpVote = (id: number) => {
        const newVotes = voteState.map(vote => {
            if (vote.id === id) {
                return {
                    ...vote,
                    upVotes: [...vote.upVotes, { id: vote.upVotes.length + 1, selected: false }]
                };
            }
            return vote;
        });
        setVoteState(newVotes);
    };

  useEffect(() => {
    localStorage.setItem('upvotes', JSON.stringify(voteState));
  }, [voteState]);

  return (
    <UpVoteContext.Provider value={{ voteState, updateVoteState, addUpVote }}>
      {children}
    </UpVoteContext.Provider>
  );
};
