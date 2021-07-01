export class Ingredient{
    constructor(public name:string, public amount: number){}// this is the short form of using declartion and again using this
/*
the above form is equivalent to this

    public name:string;
    public amount : number;
    constructor( name:string, amount:number){
        this.name=name;
        this.amount=amount;
    }
*/
}