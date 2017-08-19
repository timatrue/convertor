/**
 * Created by artem on 03/06/2017.
 */
import {Directive, ElementRef, HostListener, Input} from "@angular/core";
@Directive({
    selector: '[myBackground]'
})
export class DynamicBackground{
    constructor(private el: ElementRef){}

    @Input('myBackground') myhover: string;
    //@Input() myhighlight: string;

    @HostListener('mouseenter') OnMouseEnter(){
        this.hoverBG(this.myhover);
    }
    @HostListener('mouseleave') OnMouseLeave(){
        this.highlightBG("#fff");
    }
    private highlightBG(color: string){
        this.el.nativeElement.style.background = color;
    }
    private hoverBG(color: string){
        this.el.nativeElement.style.background = color;
    }
}