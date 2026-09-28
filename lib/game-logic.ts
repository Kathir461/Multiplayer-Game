export type Player = 1 | 2;
export type Disc = Player | null;
export function connectResult(board: Disc[]) {
 for(let row=0;row<6;row++) for(let col=0;col<7;col++) {
  const start=row*7+col; if(!board[start])continue;
  for(const [dr,dc] of [[0,1],[1,0],[1,1],[1,-1]]){
   const endRow=row+3*dr,endCol=col+3*dc;
   if(endRow<0||endRow>5||endCol<0||endCol>6)continue;
   const line=Array.from({length:4},(_,i)=>(row+i*dr)*7+col+i*dc);
   if(line.every(i=>board[i]===board[start]))return {winner:board[start],line,draw:false};
  }
 }
 return {winner:null,line:[] as number[],draw:board.every(Boolean)};
}
export function dropDisc(board:Disc[],column:number,player:Player){
 if(!Number.isInteger(column)||column<0||column>6)throw new Error('Choose a column from 1 to 7.');
 const result=connectResult(board);if(result.winner||result.draw)throw new Error('This round has ended.');
 for(let row=5;row>=0;row--){const index=row*7+column;if(!board[index]){const next=[...board];next[index]=player;return next;}}
 throw new Error('This column is full.');
}
export type Choice = 'rock' | 'paper' | 'scissors';
export const choices:Choice[]=['rock','paper','scissors'];
export function rpsWinner(first:Choice,second:Choice):Player|0{
 if(!choices.includes(first)||!choices.includes(second))throw new Error('Choose rock, paper or scissors.');
 if(first===second)return 0;
 return ({rock:'scissors',paper:'rock',scissors:'paper'}[first]===second)?1:2;
}
