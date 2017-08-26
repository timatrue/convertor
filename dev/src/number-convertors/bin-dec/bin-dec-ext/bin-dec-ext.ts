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
            <input-in (inputInEmitter)="onKey($event)" [results]="results" [meta]="metaIn"></input-in>
            <input-out [result]="converted.dec" [labelText]="metaOut.dec"></input-out>
            <input-out [result]="converted.hex" [labelText]="metaOut.hex"></input-out>
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
        this.recordService.recordMultipleValue(this.converted.getValues(), this.convertorId);
    }
    initParent():void{
        this.messageService.sendMessage("initAll");
    }
    ngOnInit(){
        this.converted.__proto__ = this.utility;
        this.activatedRoute.data.subscribe(data => this.convertorId = data.alias)
    }
}