/**
 * Created by artem on 29/06/2017.
 */
import {Injectable} from "@angular/core";
import {RecordColorSample} from "./record-colors.item";
@Injectable()
export class RecordColorsService{
    public records: object = {};
    getRecords(){
       return this.records;
    }
    recordValue(values: {input: string, output: string}, componentId: string){
        this.records[componentId] = this.records[componentId] || [];
        this.records[componentId].push(new RecordColorSample(values.input, values.output))
    }
    removeValue(index:number, componentId: string){
        this.records[componentId].splice(index,1);
    }

}