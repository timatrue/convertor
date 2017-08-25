/**
 * Created by artem on 19/05/2017.
 */
import {Component} from '@angular/core';
import {MessageService} from "../../message-service/message.service";
import {Router} from "@angular/router";
import './hex-rgb.component.css';
import {ConvertorBase} from "../../convertor-interface";

@Component({
    selector: 'hex-rgb-box',
    template:
            `
        <div class="convertor hex">
            <a class="convertor-remove" (click)="deleteConvertor()"></a>
            <h1> HEX to RGB Converter</h1>
            <input-in (inputInEmitter)="onKey($event)"  [results]="results" [meta]="metaInData"></input-in>
            <input-out [result]="displayValue()" [labelText]="labelOutText"></input-out>
            <div id="color-container">
                <input  #picker type="color" (change)="onColorPicker($event.target.value)" [value]="getHEX()"/>
                <div id="sample-view" [ngStyle]="{'background-color': getStyle(1)}"></div>
            </div>
                <a
                        [routerLink]="['/color-convertors', 'hex-rgb-convertor']" 
                        (click)="deleteConvertors()" 
                        *ngIf="router.url === '/' || router.url === '/color-convertors'" >Extend convertor<i class="right-arrow"></i></a>
        </div>`
})
export class HexRgbBox implements ConvertorBase{
    protected labelOutText: string = "RGBA";
    protected metaInData: any = {labelText: "HEX", length: "7", holder: "Example: #722FAF"};
    protected results: any = {valid: ()=> this.inputValid, error: ()=> this.error, color: ()=> this.colorPickerVal};

    protected values: string = '';
    protected error: string = '';
    protected colorPickerVal: string = "";
    protected inputValid: boolean = false;
    protected wrap: string = "rgba";
    protected customRGB: string = "rgba(0,0,255,1)";
    protected customHEX: string = "#ffffff";
    protected customDefault: string = "#ffffff";
    protected componentId: string;
    constructor(public messageService: MessageService, private router: Router) { }

    onColorPicker(color:string):void{
        console.log(color);
        this.colorPickerVal = color;
        this.onKey(this.colorPickerVal);
    }
    getHEX():string{
        return this.inputValid ? this.customHEX : this.customDefault;
    }
    deleteConvertor():void{
        this.messageService.sendMessage(this.componentId);
    }
    deleteConvertors():void{
        this.messageService.sendMessage("removeAll");
    }
    onKey(value: string):void{
        console.log(value);
        let length = value.length;
        if(value.charAt(0) === "#"){
            if(length < 4 || length === 5 || length === 6) this.error = this.getError("length");
            else if (length === 4 || length > 6) {
                if(this.isHexValid(value)) {
                    this.values = this.hex2rgb(value);
                    this.inputValid = true;
                    this.error = "";
                }
                else {
                    this.inputValid = false;
                    this.error = this.getError("range");
                }
            }
        } else{
            this.error = length > 0 ? this.getError("format") : "";
        }
    }
    hex2rgb(hex):string{
        if(hex.length > 4){
            var m = hex.match(/^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i);

        } else {
            var m = hex.match(/^#?([\da-f]{1})([\da-f]{1})([\da-f]{1})$/i);
            m[1] = m[1].concat(m[1]);
            m[2] = m[2].concat(m[2]);
            m[3] = m[3].concat(m[3]);

        }
        let converted = this.wrap
            .concat("(",
                String(parseInt(m[1], 16)),",",
                String(parseInt(m[2], 16)),",",
                String(parseInt(m[3], 16)),",",
                String(1),")");
        this.customRGB = converted;
        this.customHEX = "#" + m[1] + m[2] + m[3];
        return converted;
    }
    isHexValid(hex):boolean{
        return hex.slice(1).match(/[^\da-f]/i) === null;
    }
    getError(id):string{
        this.inputValid = false;
        let error = "";
        switch(id){
            case "length":
                error = "Format: #fff / #ffffff";
                break;
            case "range":
                error = "Values' range: a - f";
                break;
            case "format":
                error = "HEX color starts with #";
                break;
        }
        return error;
    }
    getStyle(opacity: number):string{
        return  this.inputValid ? this.changeOpacity(this.customRGB, opacity): "rgba(255,255,255,1)";
    }
    changeOpacity(color:string,opacity:number):string{
        return color.replace( "1)",opacity + ")" );
    }
    displayValue():string{
        return this.inputValid ? this.values : "";
    }
}