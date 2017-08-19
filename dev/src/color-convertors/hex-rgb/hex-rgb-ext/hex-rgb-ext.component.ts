/**
 * Created by artem on 21/05/2017.
 */
import {Component, OnInit} from '@angular/core';
import {HexRgbBox} from "../hex-rgb.component";
import {MessageService} from "../../../message-service/message.service";
import {ActivatedRoute, Router} from "@angular/router";
import {RecordColorsService} from "../../records/record-colors.service";
import '../hex-rgb.component.css';

@Component({
    selector: 'hex-rgb-ext',
    template: `        
        <div class="convertor hex">
            <h1> HEX to RGB Converter</h1>
            <input-in (inputInEmitter)="onKey($event)" [results]="results" [meta]="metaInData"></input-in>
            <input-out [result]="displayValue()" [labelText]="labelOutText" ></input-out>
            <div id="color-container">
                <input  #picker type="color" (change)="onColorPicker($event.target.value)" [value]="getHex()"/>
                <div id="sample-view" [ngStyle]="{'background-color': getStyle(1)}"></div>
            </div>
            <save-input id="container-save" [inputValid]="inputValid" (addValueEmitter)="addColor()"></save-input>
        </div>
        <record-colors [id]="convertorId"></record-colors>
    `
})
export class HexRgbExt extends HexRgbBox implements OnInit{

    private convertorId: string;
    constructor(messageService: MessageService,
                router: Router,
                public activatedRoute: ActivatedRoute,
                private recordService: RecordColorsService

    ) {
        super(messageService, router);
    }
    addColor():void{
        let values = {input:this.customHEX, output: this.customRGB};
        this.recordService.recordValue(values, this.convertorId);
    }
    deleteConvertor():void{
        this.messageService.sendMessage("removeAll");
    }
    initParent():void{
        this.messageService.sendMessage("initAll");
    }
    ngOnInit(){
        this.activatedRoute.data.subscribe(data => this.convertorId = data.alias)
    }
}
