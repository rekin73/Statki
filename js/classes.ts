export class Board {

    constructor() {
        this.generateBoard();
    };
    size: number = 10;
    boardArray: HTMLElement[][]=[];
    boardValue: number[][];
    private generateBoard() {
        for (let i = 0; i < this.size; i++) {
            this.boardArray[i]=[];
            this.boardValue[i]=[];
            for (let j = 0; j < this.size; j++){
                this.boardValue[i][j]=0;
                this.boardArray[i][j] = document.createElement("div");
                this.boardArray[i][j].className="box";
                this.boardArray[i][j].innerHTML=String(this.boardValue[i][j]);
                console.log(this.boardArray[i][j]);
            }
        }
    }
    getBoard() {
        return this.boardArray;
    }
    createRandomBoard(){
        let ships:Array<number>;
        ships=[4,3,3,2,2,2,1,1,1,1]
        ships.forEach(blocks => {
            let b:boolean=false
            while(!b){
                let dir=Math.floor(Math.random());
                let x=Math.floor(Math.random()*this.size);
                let y=Math.floor(Math.random()*this.size);
                if(dir==0){
                    //horizontal(x)
                    for(let i=0;i<blocks;i++){
                        if(i==0){
                            let a:boolean=true;
                          while(a){
                              a=(this.boardValue[x][y]==0)?true:false;
                              a=(this.boardValue[x-1][y]==0||this.boardValue[x-1][y]==undefined)?true:false;
                              a=(this.boardValue[x-1][y+1]==0||this.boardValue[x-1][y+1]==undefined)?true:false;
                              a=(this.boardValue[x-1][y-1]==0||this.boardValue[x-1][y-1]==undefined)?true:false;
                              a=(this.boardValue[x-1][y]==0||this.boardValue[x-1][y]==undefined)?true:false;
                          }  
                        }
                    }

                    
                }else{

                }
            };
            
        });
    }
}



class Ship {
    constructor(size: number,direction:number) {
        this.size = size;
        this.direction=direction;
    }
    size: number;
    direction:number;
}