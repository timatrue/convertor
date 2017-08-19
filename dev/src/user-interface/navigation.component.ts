/**
 * Created by artem on 21/06/2017.
 */
import {Component, EventEmitter, Output} from "@angular/core";
import './navigation.component.css';
import {Router} from "@angular/router";
@Component({
    selector: "navigation",
    template: `
       
            <nav>
                <a   *ngIf="router.url !== '/'" routerLink="/"><i class="left-arrow"></i>Go back</a>
                <a routerLink="color-convertors" class="router-link" routerLinkActive="active-link" (click)="removeAll()">Color convertors</a>
                <a routerLink="number-convertors" class="router-link" routerLinkActive="active-link" (click)="removeAll()">Number convertors</a>
            </nav>
            
        
    `
})
export class NavigationBar{
    @Output() onClickHREF = new EventEmitter();

    constructor(public router: Router){

    }
    removeAll(){
        this.onClickHREF.emit(null)
    }
}