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
            <h1> Binary to Decimal Converter</h1>
            <input-in (inputInEmitter)="onKey($event)" [results]="results" [meta]="metaInData"></input-in>
            <input-out [result]="displayValue()" [labelText]="labelText"></input-out>
            <a [routerLink]="['/number-convertors', 'binary-decimal-convertor']" 
               *ngIf="router.url === '/' || router.url === '/number-convertors'" 
               (click)="deleteConvertors()"  >Extend convertor<i class="right-arrow"></i>
            </a>
        </div>`
})
export class BinDecBox implements ConvertorBase{
    public metaInData: any = {labelText: "Binary", length: "16", holder: "Example: 10101"};
    public results: any = {valid: ()=> this.inputValid, error: ()=> this.error, color: ()=> null};

    public labelText: string = "Decimal";
    public decimalValue: string = '';
    public binaryValue: string = '';
    public inputValid: boolean = false;
    private error: string = '';
    private componentId: string;

    constructor(public messageService: MessageService, private router: Router){}

    deleteConvertor() : void {
        this.messageService.sendMessage(this.componentId);
    }
    deleteConvertors():void{
        this.messageService.sendMessage("removeAll");
    }
    onKey(input: string) : void {
        let length = input.length;
        if(length > 0){
            if(this.isInputValid(input)){
                this.error = "";
                this.inputValid = true;
                this.decimalValue = String(parseInt(input, 2));
                this.binaryValue = String(input);
            } else {
                this.error = this.getError("format");
            }
        } else {
            this.decimalValue = "";
            this.error = length > 0 ? this.getError("format") : "";
        }
        console.log(input);
    }
    isInputValid(input: string) : boolean {
        return input.match(/([a-z])|([^0-1])/i) === null;
    }
    displayValue() : string {
        return this.inputValid ? this.decimalValue : "";
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

//<a  *ngIf="router.url === '/' || router.url === '/number-convertors'" [routerLink]="['/number-convertors', 'binary-decimal-convertor']" (click)="deleteConvertors()"  >Extend convertor<i class="right-arrow"></i></a>
