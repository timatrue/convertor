/**
 * Created by artem on 29/06/2017.
 */
export class RecordNumberSample{
    constructor(public input:string, public output: string ){}
}
export class RecordMultipleNumber{
    public list = [];
    constructor(args){
        Object.keys(args).forEach(arg => this.list.push({value: args[arg], name: arg.toUpperCase()}));
    }

}