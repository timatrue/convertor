/**
 * Created by artem on 21/05/2017.
 */
import {Component, Input} from '@angular/core';
import './hex-rgb.component.css';
import {HexRgbBox} from "./hex-rgb.component";

@Component({
    selector: 'hex-rgb-ext',
    template: "<p>child</p>"
})

export class HexRgbExt extends HexRgbBox{
    componentId: string;
}
