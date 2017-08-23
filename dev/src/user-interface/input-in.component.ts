
import {Component, EventEmitter, Input, Output} from "@angular/core";
import './input-in.component.css'
@Component({
    selector: 'input-in',
    template:`
        <div >
            <div class="container-error"><span class="input-error" >{{ results.error() }}</span></div>
            <div id="container-input">
                <label>{{metaIn.labelText}}:</label>
                <input  [attr.maxlength]="metaIn.length" #box (keyup)="onKeyListener(box.value)" [value]="results.color()" placeholder="{{metaIn.holder}}">
            </div>
        </div>
    `
})
export class InputIn{
    @Input('meta') private metaIn: any;
    @Input('results') private results: any;

    @Output() inputInEmitter = new EventEmitter();

    onKeyListener(value){
        this.inputInEmitter.emit(value);
    }
}