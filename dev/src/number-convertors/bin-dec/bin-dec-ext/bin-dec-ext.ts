/**
 * Created by artem on 08/06/2017.
 */
import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BinDecBox} from "../bin-dec.convertor";
import {MessageService} from "../../../message-service/message.service";
import {RecordNumbersService} from "../../records/record-numbers.service";

@Component({
    selector:"bin-dec-ext",
    template: `        
        <div class="convertor bin">
            <h1> Binary to Decimal Converter</h1>
            <div >
                <span class="inputError" *ngIf="!inputValid">{{ error }}</span>
                <div id="container-input">
                    <label> Binary:</label>
                    <input maxlength="16" #box (keyup)="onKeyListener(box.value)" placeholder="Example: 10101">
                </div>
            </div>
            <input-out [result]="displayValue()" [labelText]="labelText"></input-out>
            <save-input id="container-save" [inputValid]="inputValid" (addValueEmitter)="saveValue()"></save-input>
        </div>
        <record-numbers [id]="convertorId" ></record-numbers>
    `
})
export class BinDecExt extends BinDecBox{
    constructor(messageService: MessageService,
                router: Router,
                private activatedRoute: ActivatedRoute,
                private recordService: RecordNumbersService
    ){
        super(messageService, router)
    }

    private convertorId: string;
    saveValue(){
        let values = {input:this.decimalValue, output: this.binaryValue};
        this.recordService.recordValue(values, this.convertorId);
    }
    initParent():void{
        this.messageService.sendMessage("initAll");
    }
    ngOnInit(){
        this.activatedRoute.data.subscribe(data => this.convertorId = data.alias)
    }
}