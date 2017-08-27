/**
 * Created by artem on 30/06/2017.
 */
import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MessageService} from "../../../message-service/message.service";
import {DecBinBox} from "../dec-bin.convertor";
import {RecordNumbersService} from "../../records/record-numbers.service";
import {Utility} from "../../../utilility";

@Component({
    selector: 'bin-dec-box',
    template:
            `
        <div class="convertor bin">
            <h1> Decimal to Binary Converter</h1>
            <input-in (inputInEmitter)="onKey($event)" [results]="results" [meta]="metaIn"></input-in>
            <input-out [result]="converted.bin" [labelText]="metaOut.bin"></input-out>
            <input-out [result]="converted.hex" [labelText]="metaOut.hex"></input-out>
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
        this.recordService.recordMultipleValue(this.converted.getValues(), this.convertorId);
    }
    initParent():void{
        this.messageService.sendMessage("initAll");
    }
    ngOnInit(){
        this.converted.__proto__ = Utility.inputFields;
        this.activatedRoute.data.subscribe(data => this.convertorId = data.alias)
    }
}