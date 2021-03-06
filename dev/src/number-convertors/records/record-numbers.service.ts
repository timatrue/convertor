/**
 * Created by artem on 29/06/2017.
 */
import {Injectable} from "@angular/core";
import {RecordMultipleNumber, RecordNumberSample} from "./record-numbers.item";
@Injectable()
export class RecordNumbersService{
    public records: object = {};
    getRecords(){
       return this.records;
    }
    recordValue(values: {input: string, output: string}, componentId: string){
        this.records[componentId] = this.records[componentId] || [];
        this.records[componentId].push(new RecordNumberSample(values.input, values.output))
    }
    recordMultipleValue(values, componentId: string){
        this.records[componentId] = this.records[componentId] || [];
        this.records[componentId].push(new RecordMultipleNumber(values));
    }
    removeValue(index:number, componentId: string){
        this.records[componentId].splice(index,1);
    }

}