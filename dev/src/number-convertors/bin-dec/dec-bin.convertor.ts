/**
 * Created by artem on 21/05/2017.
 */
import {Component, OnInit} from '@angular/core';
import {MessageService} from "../../message-service/message.service";
import {Router} from "@angular/router";
import {ConvertorBase} from "../../convertor-interface";
import './bin-dec.convertor.css';
import {DecConvertor, Utility} from "../../utilility";
import {OUTPUTS} from "../../convertors-service/convertors.list";

@Component({
    selector: 'bin-dec-box',
    template:
            `
        <div class="convertor bin">
            <a class="convertor-remove" (click)="deleteConvertor()"></a>
            <h1> Decimal to Binary Converter</h1>
            <input-in (inputInEmitter)="onKey($event)" [results]="results" [meta]="metaIn"></input-in>
            <input-out [result]="converted.bin" [labelText]="metaOut.bin"></input-out>
            <input-out [result]="converted.hex" [labelText]="metaOut.hex"></input-out>
            
            <select><option *ngFor="let option of outputs" [value]="option.value">{{option.name}}</option></select>
            <input-out *ngFor="let option of outputs" [result]="converted.hex" [labelText]="metaOut.hex"></input-out>
            
            <a  *ngIf="router.url === '/' || router.url === '/number-convertors'" [routerLink]="['/number-convertors', 'decimal-binary-convertor']" (click)="deleteConvertors()"  >Extend convertor<i class="right-arrow"></i></a>
        </div>`
})
export class DecBinBox implements ConvertorBase, OnInit{
    protected metaIn: any = {labelText: "Decimal", length: "16", holder: "Example: 128"};
    protected metaOut: any = {bin: "Binary", hex: 'Hexadecimal' };
    protected results: any = {valid: ()=> this.inputValid, error: ()=> this.error, color: ()=> null};
    protected converted: any = {bin: '', dec: '', hex: ''};

    private error: string = '';
    private inputValid: boolean = false;
    private componentId: string;
    private outputs = OUTPUTS.decbin;

    constructor(public messageService: MessageService, private router: Router){}

    deleteConvertor() : void {
        this.messageService.sendMessage(this.componentId);
    }
    deleteConvertors():void{
        this.messageService.sendMessage("removeAll");
    }
    onKey(input: string) : void {
        if(input.length){
            if(this.isInputValid(input)){
                this.error = "";
                this.inputValid = true;
                this.converted.dec = String(input);
                //this.converted.bin = parseInt(input,10).toString(2).toUpperCase();
                let dec2bin = DecConvertor.getConvertor('bin');
                this.converted.bin = dec2bin(input);
                this.converted.hex = parseInt(input,10).toString(16).toUpperCase();
            } else {
                this.converted.clear();
                this.error = this.getError("format");
            }
        } else {
            this.converted.clear();
            this.error = this.getError("length");
        }
        console.log(input);
    }
    isInputValid(input: string) : boolean {
        return input.match(/([a-z])|([^0-9])/i) === null;
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
    ngOnInit(){
        this.converted.__proto__ = Utility.inputFields;
    }
}