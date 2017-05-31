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
    template: '<hex-rgb-box></hex-rgb-box>'
    //templateUrl: './hex-rgb/hex-rgb.component.html'
})


export class HexRgbExt extends HexRgbBox implements OnInit{
    constructor(messageService: MessageService, router: Router) {
        super(messageService, router);
    }
    deleteConvertor():void{
        this.messageService.sendMessage("removeAll");
    }
    ngOnInit(){
        this.deleteConvertor();
        console.log("extends");
    }
}
