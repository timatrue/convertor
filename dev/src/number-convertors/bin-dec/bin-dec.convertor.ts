/**
 * Created by artem on 21/05/2017.
 */
import {Component, OnInit} from '@angular/core';
import {MessageService} from "../../message-service/message.service";
import {Router} from "@angular/router";
import {ConvertorBase} from "../../convertor-interface";
import './bin-dec.convertor.css';
import {Utility} from "../../utilility";

@Component({
    selector: 'bin-dec-box',
    template:
            `
        <div class="convertor bin">
            <a class="convertor-remove" (click)="deleteConvertor()"></a>
            <h1> Binary to Decimal Converter</h1>
            <input-in (inputInEmitter)="onKey($event)" [results]="results" [meta]="metaIn"></input-in>
            <input-out [result]="converted.dec" [labelText]="metaOut.dec"></input-out>
            <input-out [result]="converted.hex" [labelText]="metaOut.hex"></input-out>
            <a [routerLink]="['/number-convertors', 'binary-decimal-convertor']" 
               *ngIf="router.url === '/' || router.url === '/number-convertors'" 
               (click)="deleteConvertors()"  >Extend convertor<i class="right-arrow"></i>
            </a>
        </div>`
})
export class BinDecBox implements ConvertorBase, OnInit{
    protected metaOut: any = {dec: 'Decimal', hex: 'Hexadecimal' };
    protected metaIn: any = {labelText: "Binary", length: "16", holder: "Example: 10101"};
    protected results: any = {valid: ()=> this.inputValid, error: ()=> this.error, color: ()=> null};

    protected converted: any = {bin: '', dec: '', hex: ''};
    protected inputValid: boolean = false;
    protected error: string = '';
    protected componentId: string;

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
                this.converted.bin = String(input);
                this.converted.dec = String(parseInt(input, 2));
                this.converted.hex = parseInt(input , 2).toString(16).toUpperCase();

            } else {
                this.converted.clear();
                this.error = this.getError("format");
            }
        } else {
            this.converted.clear();
            this.error = length > 0 ? this.getError("format") : "";
        }
    }
    isInputValid(input: string) : boolean {
        return input.match(/([a-z])|([^0-1])/i) === null;
    }
    displayValue() : string {
        return this.inputValid ? this.converted : "";
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
    setProto(){
        this.converted.__proto__ = Utility.inputFields;
    }
    ngOnInit(){
        this.setProto();
    }
}