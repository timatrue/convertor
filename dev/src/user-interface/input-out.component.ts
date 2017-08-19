/**
 * Created by artem on 26/07/2017.
 */
import {Component, Input, Output} from "@angular/core";
import './input-out.css'
@Component({
    selector: 'input-out',
    template:`
        <div id="container-output">
            <label> {{ labelText }}:</label>
            <input [value]="convertedValue" [readonly]="true">
        </div>
    `
})
export class InputOut{
    @Input('result') private convertedValue: string;
    @Input('labelText') private labelText: string;
}