/**
 * Created by artem on 21/05/2017.
 */
import {Component} from '@angular/core';
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
                    <input maxlength="8" #box (keyup)="onKeyListener(box.value)" placeholder="Example: 10101">
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

    private binaryValue: string = '';
    private error: string = '';
    private inputValid: boolean = false;
    private componentId: string;

    constructor(private messageService: MessageService){}

    deleteConvertor() : void {
        this.messageService.sendMessage(this.componentId);
    }
    onKeyListener(input: string) : void {
        let length = input.length;
        if(length > 0){
            if(this.isInputValid(input)){
                this.error = "";
                this.inputValid = true;
                this.binaryValue = String(parseInt(input, 2));
            } else {
                this.error = this.getError("format");
            }
        } else {
            this.binaryValue = "";
        }
        console.log(input);
    }
    isInputValid(input: string) : boolean {
        return input.match(/([a-z])|([^0-1])/i) === null;
    }
    displayValue() : string {
        return this.inputValid ? this.binaryValue : "";
    }
    getError(id) : string {
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