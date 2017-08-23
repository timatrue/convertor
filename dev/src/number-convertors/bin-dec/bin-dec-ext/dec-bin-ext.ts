/**
 * Created by artem on 30/06/2017.
 */
import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MessageService} from "../../../message-service/message.service";
import {DecBinBox} from "../dec-bin.convertor";
import {RecordNumbersService} from "../../records/record-numbers.service";

@Component({
    selector: 'bin-dec-box',
    template:
            `
        <div class="convertor bin">
            <h1> Decimal to Binary Converter</h1>
            <input-in (inputInEmitter)="onKey($event)" [results]="results" [meta]="metaInData"></input-in>
            <input-out [result]="displayValue()" [labelText]="labelText"></input-out>
            <save-input id="container-save" [inputValid]="inputValid" (addValueEmitter)="saveValue()"></save-input>
        </div>
        <record-numbers [id]="convertorId" ></record-numbers>
    `
})
export class DecBinExt extends DecBinBox{
    private convertorId: string;
    constructor(messageService: MessageService,
                router: Router,
                private activatedRoute: ActivatedRoute,
                private recordService: RecordNumbersService
    ){
        super(messageService, router)
    }
    saveValue(){
        let values = {input:this.binaryValue, output: this.decimalValue};
        this.recordService.recordValue(values, this.convertorId);
    }
    initParent():void{
        this.messageService.sendMessage("initAll");
    }
    ngOnInit(){
        this.activatedRoute.data.subscribe(data => this.convertorId = data.alias)
    }
}