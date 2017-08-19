/**
 * Created by artem on 27/07/2017.
 */
/**
 * Created by artem on 26/07/2017.
 */
import {Component, EventEmitter, Input, Output} from "@angular/core";
import './input-out.css'
@Component({
    selector: 'input-in',
    template:`
        <div >
            <span class="inputError" *ngIf="!results.valid()">{{ results.error() }}</span>
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