const SHA256 = require('crypto-js/sha256');
/* ===== Block Class ==============================
|  Class with a constructor for block 			   |
|  ===============================================*/
class Block{
    constructor(data){
        this.hash = "";
        this.height = 0;
        this.body = data;
        this.time = 0;
        this.previousblockhash = '0x';
    }
}

/* ===== Blockchain Class ==========================
|  Class with a constructor for new blockchain 		|
|  ================================================*/
class BlockChain {
    constructor(){
        this.chain = [];
        this.addBlock(this.createGenesisBlock());
    }

    createGenesisBlock(){
        return new Block("Genesis Block");
    }

    getLatestBlock(){
        return this.chain[this.chain.length -1];
    }

    addBlock(newBlock){
        newBlock.height = this.chain.length;        
        newBlock.time = new Date().getTime().toString().slice(0,-3);        
        if(this.chain.length > 0){
            newBlock.previousblockhash = this.getLatestBlock().hash;
        }

        newBlock.hash = SHA256(JSON.stringify(newBlock)).toString();    
        console.log(JSON.stringify(newBlock))
        this.chain.push(newBlock);
    }
}

