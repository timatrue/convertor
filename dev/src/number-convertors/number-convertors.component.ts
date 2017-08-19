/**
 * Created by artem on 21/06/2017.
 */
import {Component, ComponentFactoryResolver} from "@angular/core";
import {Router} from "@angular/router";
import {AppComponent} from "../app.component";
import {MessageService} from "../message-service/message.service";
import {ConvertorService} from "../convertors-service/convertors.service";


@Component({
    selector: 'number-convertors',
    template: `        
        <div  >
            <convertor-list (convertorClicked)="onConvertor($event)"></convertor-list>
        </div>
        <div class="convertors" >
            <ng-container #target>
                <router-outlet></router-outlet>
            </ng-container>
        </div>
    `
})
/*Remember the message service sends a msg to the base class AND to the derived class simultaneously!*/
export class NumberConvertors extends AppComponent {

    constructor(convertorService: ConvertorService,
                componentFactoryResolver: ComponentFactoryResolver,
                messageService: MessageService,
                router: Router) {
        super(convertorService, componentFactoryResolver, messageService, router);
    }
    ngOnInit(){
        this.convertorService.getListConvertors().forEach(component => this.onConvertor(component))
    }

}