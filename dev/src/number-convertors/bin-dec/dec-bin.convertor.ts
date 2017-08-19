/**
 * Created by artem on 21/05/2017.
 */
import {Component} from '@angular/core';
import {MessageService} from "../../message-service/message.service";
import {Router} from "@angular/router";
import {ConvertorBase} from "../../convertor-interface";
import './bin-dec.convertor.css';

@Component({
    selector: 'bin-dec-box',
    template:
            `
        <div class="convertor bin">
            <a class="convertor-remove" (click)="deleteConvertor()"></a>
            <h1> Decimal to Binary Converter</h1>
            <div >
                <span class="inputError" *ngIf="!inputValid">{{ error }}</span>
                <div id="container-input">
                    <label>Decimal:</label>
                    <input maxlength="16" #box (keyup)="onKeyListener(box.value)" placeholder="Example: 128">
                </div>
            </div>
            <input-out [result]="displayValue()" [labelText]="labelText"></input-out>
            <a  *ngIf="router.url === '/' || router.url === '/number-convertors'" [routerLink]="['/number-convertors', 'decimal-binary-convertor']" (click)="deleteConvertors()"  >Extend convertor<i class="right-arrow"></i></a>
        </div>`
})
export class DecBinBox implements ConvertorBase{
    public labelText: string = "Binary";
    public binaryValue: string = '';
    public decimalValue: string = '';
    private error: string = '';
    private inputValid: boolean = false;
    private componentId: string;

    constructor(public messageService: MessageService, private router: Router){}

    deleteConvertor() : void {
        this.messageService.sendMessage(this.componentId);
    }
    deleteConvertors():void{
        this.messageService.sendMessage("removeAll");
    }
    onKeyListener(input: string) : void {
        if(input.length){
            if(this.isInputValid(input)){
                this.error = "";
                this.inputValid = true;
                this.binaryValue = String((+input).toString(2));
                this.decimalValue = String(input);
            } else {
                this.error = this.getError("format");
            }
        } else {
            this.binaryValue = "";
        }
        console.log(input);
    }
    isInputValid(input: string) : boolean {
        return input.match(/([a-z])|([^0-9])/i) === null;
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
                error = "This is not decimal number";
                break;
        }
        return error;
    }
}