/**
 * Created by artem on 29/06/2017.
 */
import {Component, Input, OnInit} from "@angular/core";
import {RecordColorsService} from "./record-colors.service";
import "./record-colors.component.css";

@Component({
    selector: "record-colors",
    template:`
        <h2></h2>
        <div class="records-list">
            <div class="container-record" *ngFor="let item of records[componentId]; let i = index">
                <div class="record-value">
                    <span>In: {{ item.input }}</span>
                    <span>Out: {{ item.output }}</span>
                </div>
                <div id="record-color"  [ngStyle]="{'background-color': item.output}"></div>
                <a class="record-remove" (click)="removeRecord(index)"></a>
            </div>
        </div>`
})
export class RecordColors implements OnInit{

    @Input('id') componentId: string;
    private records = this.recordService.getRecords();
    constructor(private recordService: RecordColorsService){}

    removeRecord(index: number){
        this.recordService.removeValue(index, this.componentId);
    }
    ngOnInit(){

    }
}