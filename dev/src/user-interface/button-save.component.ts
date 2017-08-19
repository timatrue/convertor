/**
 * Created by artem on 30/06/2017.
 */
import {Component, EventEmitter, Input, Output} from "@angular/core";
import './button-save.component.css';
@Component({
    selector: 'save-input',
    template:
            `        
            <div class="save-result" (click)="inputValid ? saveValue() : null">
                <span>Save result</span>
            </div>
    `
})
export class SaveInput{
    @Input('inputValid') inputValid: boolean;
    @Output() addValueEmitter = new EventEmitter();

    saveValue(){
        this.addValueEmitter.emit(null);
    }
}