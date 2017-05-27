/**
 * Created by artem on 25/05/2017.
 */
import {Component, EventEmitter, Output} from "@angular/core";
import {CONVERTORS} from "../convertors-service/convertors.list";
import './select.component.css';

@Component({
    selector: 'convertor-list',
    template:
            `
        <div class="convertor-list">
            <select #selector>
                <option *ngFor="let convertor of convertors" [value]="convertor">{{getTitleOption(convertor)}}</option>
            </select>
            <button (click)="requestConvertor(selector.value)" >Add Convertor</button>
        </div>
            `
})

export class ConvertorList{

    convertors = this.getListConvertors();
    @Output() convertorClicked = new EventEmitter();

    constructor(){}
    requestConvertor(convertor: string){
        this.convertorClicked.emit(convertor)
    }
    getTitleOption(key: string){
        return CONVERTORS[key].name;
    }
    getListConvertors(){
        return Object.keys(CONVERTORS);
    }
}