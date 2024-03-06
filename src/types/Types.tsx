export type UpVoteType = {
  id: number;
   selected: boolean 
}

export type VoteType = {
    id: number;
    upVotes: UpVoteType[];
}

export type VoteContextType = {
  voteState: VoteType[];
  updateVoteState: (id: number, upVoteId: number) => void;
  addUpVote: (id: number) => void
}


  