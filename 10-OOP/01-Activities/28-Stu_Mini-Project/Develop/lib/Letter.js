class Letter {
  constructor(input){
    this.input = input;
    if (this.input === "?" || input === "-" || input === ":"){
        this.visible = true;
    } else {
        this.visible = false;
    }
    }

    toString(){
        return "_";
    }

    guess(userInput){
        if(userInput === this.input){
            return true;
        } else {
            return false;
        }
    }

    getSolution(){
        return this.input;
    }


}

module.exports = Letter;
