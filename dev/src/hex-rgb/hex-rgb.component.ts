/**
 * Created by artem on 19/05/2017.
 */
import {Component} from '@angular/core';
import './hex-rgb.component.css';
import {MessageService} from "../message-service/message.service";
import {Router} from "@angular/router";

@Component({
    selector: 'hex-rgb-box',
    template:
            `
        <div class="convertor hex">
            <a class="convertor-remove" (click)="deleteConvertor()"></a>
            <h1> HEX to RGB Converter</h1>
            <div id="hex-container">
                
                <div>
                    <label> HEX value:</label>
                    <input maxlength="7" #box (keyup)="onKey(box.value)" placeholder="Example: #722FAF">
                </div>
                <span class="inputError" *ngIf="!inputValid">{{ values }}</span>
            </div>
            <div id="rgb-container">
                <label> RGB value:</label>
                <input [value]="displayValue()" [readonly]="true"> 
            </div>
            <div id="color-example" [ngStyle]="{'background-color': getStyle()}"></div>
            <a  routerLink="/ext-hex-rgb-convertor" *ngIf="router.url === '/'" >Extend convertor</a>
            
        </div>`
})
export class HexRgbBox{
    values = '';
    inputValid = false;
    wrap: string = "RGB";
    customRGB = "RGB(0,0,255)";
    componentId: string;
    constructor(public messageService: MessageService, private router: Router) { }

    deleteConvertor():void{
        this.messageService.sendMessage(this.componentId);
    }
    navigateTo(){
        this.router.navigate(['/ext-hex-rgb-convertor']);
        this.router.navigate(['/']);
    }
    onKey(value: string) {
        let length = value.length;
        if(value.charAt(0) === "#"){
            if(length < 4 || length === 5 || length === 6) this.values = this.getError("length");
            else if (length === 4 || length > 6) {
                if(this.isHexValid(value)) {
                    this.inputValid = true;
                    this.values = this.hex2rgb(value);
                }
                else {
                    this.inputValid = false;
                    this.values = this.getError("range");
                }
            }
        } else{
            this.values = length > 0 ? this.getError("format") : "";
        }
    }

    hex2rgb(hex) {
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
                String(parseInt(m[3], 16)),")");
        this.customRGB = converted;

        return converted;
    }
    isHexValid(hex){
        return hex.slice(1).match(/[^\da-f]/i) === null;
    }
    getError(id) {
        this.inputValid = false;
        let error = "";
        switch(id){
            case "length":
                error = "HEX color should contain either 3 or 6 hex values";
                break;
            case "range":
                error = "HEX color contains values out of range a - f";
                break;
            case "format":
                error = "HEX color should begin with #";
                break;
        }
        return error;
    }
    getStyle(){
        return  this.inputValid ? this.customRGB : "RGB(255,255,255)";
    }
    displayValue(){
        return this.inputValid ? this.values : "";
    }

    rgb2hex(rgb){
        rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
        return (rgb && rgb.length === 4) ? "#" +
            ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
            ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
            ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
    }
}