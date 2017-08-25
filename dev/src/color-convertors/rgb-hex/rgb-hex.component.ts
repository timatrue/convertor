/**
 * Created by artem on 30/07/2017.
 */
import {Component} from "@angular/core";
import {ConvertorBase} from "../../convertor-interface";
import {MessageService} from "../../message-service/message.service";
import {Router} from "@angular/router";
@Component({
    selector: 'rgb-hex-box',
    template: `
        <div class="convertor hex">
            <a class="convertor-remove" (click)="deleteConvertor()"></a>
            <h1> RGB to HEX Converter</h1>
            <input-in (inputInEmitter)="onKey($event)"  [results]="results" [meta]="metaInData"></input-in>
            <input-out [result]="displayValue()" [labelText]="labelOutText"></input-out>
            <div id="color-container">
                <input  #picker type="color" (change)="onColorPicker($event.target.value)" [value]="getRGB()"/>
                <div id="sample-view" [ngStyle]="{'background-color': getRGB()}"></div>
            </div>
            <a
                    [routerLink]="['/color-convertors', 'rgb-hex-convertor']"
                    (click)="deleteConvertors()"
                    *ngIf="router.url === '/' || router.url === '/color-convertors'" >Extend convertor<i class="right-arrow"></i>
            </a>
        </div>
    `
})
export class RgbHexBox implements ConvertorBase{
    protected labelOutText: string = "HEX";
    //public pattern = /^(rgb|rgba)\((1?[0-9]{1,2}|2[0-4][0-9]|25[0-5]),(1?[0-9]{1,2}|2[0-4][0-9]|25[0-5]),(1?[0-9]{1,2}|2[0-4][0-9]|25[0-5]),(0\.[0-9]{1,5}|1|0)\)$/i;
    protected pattern = /^rgba\((1?[0-9]{1,2}|2[0-4][0-9]|25[0-5]),(1?[0-9]{1,2}|2[0-4][0-9]|25[0-5]),(1?[0-9]{1,2}|2[0-4][0-9]|25[0-5]),(0\.[0-9]{1,5}|1|0)\)$/i;
    protected metaInData: any = {labelText: "RGBA", length: "30", holder: "Example: RGBA(0,128,255,1)"};
    protected results: any = {valid: ()=> this.inputValid, error: ()=> this.error, color: ()=> this.customRGB};

    protected error: string = '';
    protected customRGB: string = '';
    protected customHEX: string = '';
    protected defaultHEX: string = "#ffffff";
    protected values: string = '';
    protected inputValid: boolean = false;
    protected componentId: string;

    constructor(public messageService: MessageService, private router: Router){}

    onColorPicker(color:string):void{
        console.log(color);
        this.customHEX = color;
        this.inputValid = true;
        this.customRGB = this.hexToRgb(color);
    }
    getRGB():string{
        return this.inputValid ? this.customHEX : this.defaultHEX;
    }
    hexToRgb(value: string):string{
        return "rgba(" + value.match(/[A-Za-z0-9]{2}/g).map(function(v) { return parseInt(v, 16) }).join(",") + ",1)";
    }
    onKey(value: string):void{
        let patternValid = this.pattern.test(value);
        console.log('onKey',value.length);
        if(patternValid){
            let color: number[] = value.match(/\d+,\d+,\d+,?(\d\.*\d+|\d?)/i)[0].split(',').map( string => +string);
            let rgb: number[] = color.slice(0,3);
            let opacity: number = color.length > 3 ? color.slice(-1)[0] : 1;
            let background: number = 255;

            let r: string = "0" + Math.floor(rgb[0]*opacity + background*(1 - opacity)).toString(16);
            let g: string = "0" + Math.floor(rgb[1]*opacity + background*(1 - opacity)).toString(16);
            let b: string = "0" + Math.floor(rgb[2]*opacity + background*(1 - opacity)).toString(16);
            this.customHEX = "#" + r.slice(-2) + g.slice(-2) + b.slice(-2);
            this.error = "";
            this.inputValid = true;
            //console.log('this.customHEX',this.customHEX, r,"/",g,"/",b );
        }
         else {
            this.error =  value.length ?  this.getError().format : '' ;
        }
    }
    displayValue():string{
        return  this.inputValid ? this.customHEX : '';
    }
    getError():any{
        this.inputValid = false;
        return { format: "Format: RGBA(0,128,255,1)"};
    }
    deleteConvertor():void{
        this.messageService.sendMessage(this.componentId);
    }
    deleteConvertors():void{
        this.messageService.sendMessage("removeAll");
    }
}