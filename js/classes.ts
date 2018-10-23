export class Board {

    constructor() {
        this.generateBoard();
    };
    size: number = 10;
    boardArray: HTMLElement[][]=[];
    private generateBoard() {
        for (let i = 0; i < this.size; i++) {
            this.boardArray[i]=[];
            for (let j = 0; j < this.size; j++){
                this.boardArray[i][j] = document.createElement("div");
                this.boardArray[i][j].className="box";
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
            let a:boolean=false
            while(!a){
                let dir=Math.floor(Math.random());
                let x=Math.floor(Math.random()*this.size);
                let y=Math.floor(Math.random()*this.size);
                if(dir==0){
                    //horizontal(x)
                    for(let i=0;i;){
                        
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