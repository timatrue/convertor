/**
 * Created by artem on 17/06/2017.
 */
import {Component, ComponentFactoryResolver} from "@angular/core";
import {AppComponent} from "../app.component";
import {MessageService} from "../message-service/message.service";
import {Router} from "@angular/router";
import {ConvertorService} from "../convertors-service/convertors.service";


@Component({
    selector: 'color-convertors',
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
/*Remember the service message sends a msg to the base class AND to the derived class simultaneously!*/
export class ColorConvertors extends AppComponent {

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