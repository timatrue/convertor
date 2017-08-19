/**
 * Created by artem on 29/06/2017.
 */
import {Component, Input, OnInit} from "@angular/core";
import {RecordNumbersService} from "./record-numbers.service";
import "./record-numbers.component.css";

@Component({
    selector: "record-numbers",
    template:`
        <h2></h2>
        <div class="records-list">
            <div class="container-record" *ngFor="let item of records[componentId]; let i = index">
                <div class="record-value">
                    <span>Input: {{ item.input }}</span>
                    <span>Output: {{ item.output }}</span>
                </div>
                <a class="record-remove" (click)="removeRecord(index)"></a>
            </div>
        </div>`
})
export class RecordNumbers implements OnInit{

    @Input('id') componentId: string;


    private records = this.recordService.getRecords();
    constructor(private recordService: RecordNumbersService){}

    removeRecord(index: number){
        this.recordService.removeValue(index, this.componentId);
    }
    ngOnInit(){

    }
}