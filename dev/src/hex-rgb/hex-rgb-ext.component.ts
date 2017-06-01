/**
 * Created by artem on 21/05/2017.
 */
import {Component, Injectable, Input, OnInit} from '@angular/core';
import {HexRgbBox} from "./hex-rgb.component";
import './hex-rgb.component.css';
import {MessageService} from "../message-service/message.service";
import {Router} from "@angular/router";
//import {htmlTemplate} from './hex-rgb.component.html';
//import * as vars from './hex-rgb.component.html';
@Component({
    //moduleId: module.id,
    selector: 'hex-rgb-ext',
    template: `
        <div class="link-back">
            <a  (click)="initParent()" routerLink="/"><i class="left-arrow"></i>Go back</a>
        </div>
        <div class="convertor hex">
            <h1> HEX to RGB Converter</h1>
            <div id="hex-container">
                <div>
                    <label> HEX value:</label>
                    <input maxlength="7" #box (keyup)="onKey(box.value)" placeholder="Example: #722FAF">
                </div>
                <span class="inputError" *ngIf="!inputValid">{{ values }}</span>
            </div>
            <div id="rgb-container">
                <label> RGB value:</label>
                <input [value]="displayValue()" [readonly]="true">
            </div>
            <div id="color-example" [ngStyle]="{'background-color': getStyle()}"></div>
        </div>`
})


export class HexRgbExt extends HexRgbBox implements OnInit{
    constructor(messageService: MessageService, router: Router) {
        super(messageService, router);
    }
    deleteConvertor():void{
        this.messageService.sendMessage("removeAll");
    }
    initParent():void{
        this.messageService.sendMessage("initAll");
    }
    ngOnInit(){
        this.deleteConvertor();
        console.log("extends");
    }
}
