class TicTacToe {
    constructor() {
        this.symbol = 'x';
        this.maxtrix = [
            ['0', '0', '0'],
            ['0', '0', '0'],
            ['0', '0', '0'],
        ]
    }

    getCurrentPlayerSymbol() {
        return this.symbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.maxtrix[rowIndex][columnIndex]=='0'){
            this.maxtrix[rowIndex][columnIndex]=this.symbol
            if(this.symbol=='x')
            {
              this.symbol = 'o';
            }
            else if(this.symbol=='o')
            {
              this.symbol = 'x';
            }
        }
    }

    isFinished() {
        if(this.isDraw()||(this.getWinner()!=null)||this.noMoreTurns()){
            return true;
        }
        else return false;
    }

    getWinner() {
        for(let i = 0, j = 0, k = 0; i<this.maxtrix.length;i++,k++){  
            if(this.maxtrix[i][j]==this.maxtrix[i][j+1]&&
                this.maxtrix[i][j]==this.maxtrix[i][j+2]&&
                this.maxtrix[i][j+1]==this.maxtrix[i][j+2]){
                return this.maxtrix[i][j] != '0' ? this.maxtrix[i][j] : null;
            }
            else if(this.maxtrix[i-k][j+i]==this.maxtrix[i-k+1][j+i]&&
                this.maxtrix[i-k][j+i]==this.maxtrix[i-k+2][j+i]&&
                this.maxtrix[i-k+1][j+i]==this.maxtrix[i-k+2][j+i]){
                return this.maxtrix[i-k][j+i] != '0' ? this.maxtrix[i-k][j+i] : null;
            }
        }
        if(this.maxtrix[0][0]==this.maxtrix[1][1]&&
            this.maxtrix[0][0]==this.maxtrix[2][2]&&
            this.maxtrix[1][1]==this.maxtrix[2][2]){
            return this.maxtrix[0][0] != '0' ? this.maxtrix[0][0] : null;
        }
        else if(this.maxtrix[2][0]==this.maxtrix[1][1]&&
            this.maxtrix[2][0]==this.maxtrix[0][2]&&
            this.maxtrix[0][2]==this.maxtrix[1][1]){
            return this.maxtrix[2][0] != '0' ? this.maxtrix[2][0] : null;
        }
        return null;
    }

    noMoreTurns() {
        for(let i = 0; i<3; i++){
            for(let j = 0; j<3; j++){
                if(this.maxtrix[i][j]=='0'){
                return false;
                }
            }
        }
        return true;
    }

    isDraw() {
        if(this.getWinner()!=null){
            return false;
        }
        if(this.noMoreTurns()){
            return true;
        }
        else return false;
    }

    getFieldValue(rowIndex, colIndex) {
        if(rowIndex<3&&colIndex<3){
            if(this.maxtrix[rowIndex][colIndex]=='0'){
                return null;
            }
            else return this.maxtrix[rowIndex][colIndex];
        }
    }
}

module.exports = TicTacToe;
