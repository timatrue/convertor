/**
 * Created by artem on 21/05/2017.
 */
import {Component, ComponentRef, ElementRef, EventEmitter, Input, Output} from '@angular/core';
import './bin-dec.convertor.css';
import {MessageService} from "../message-service/message.service";

@Component({
    selector: 'bin-dec-box',
    template:
            `
        <div class="convertor bin">
            <a class="convertor-remove" (click)="deleteConvertor()"></a>
            <h1> Binary to Decimal Converter</h1>
            <div id="bin-container">
                <div>
                    <label> Binary value:</label>
                    <input maxlength="8" #box (keyup)="onKey(box.value)" placeholder="Example: 10101">
                </div>
                <span class="inputError" *ngIf="!inputValid">{{ error }}</span>
            </div>
           
            <div id="dec-container">
                <label> Decimal value:</label>
                <input [value]="displayValue()" [readonly]="true">
            </div>
        </div>`
})
export class BinDecBox{

    values: string = '';
    error: string = '';
    inputValid: boolean = false;
    componentId: string;

    constructor(private messageService: MessageService){}

    deleteConvertor():void{
        this.messageService.sendMessage(this.componentId);
    }
    onKey(input: string) {
        let length = input.length;
        if(length > 0){
            if(this.isInputValid(input)){
                this.error = "";
                this.inputValid = true;
                this.values = String(parseInt(input, 2));
            } else {
                this.error = this.getError("format");
            }
        } else {
            this.values = "";
        }
        console.log(input);
    }
    isInputValid(input: string){
        return input.match(/([a-z])|([^0-1])/i) === null;
    }
    displayValue(){
        return this.inputValid ? this.values : "";
    }
    getError(id) {
        this.inputValid = false;
        let error = "";
        switch(id){
            case "length":
                error = "";
                break;
            case "range":
                error = "";
                break;
            case "format":
                error = "Binary number could be either 1 or 0";
                break;
        }
        return error;
    }
}