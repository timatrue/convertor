import {
    AfterViewInit, Component, ComponentFactoryResolver, ComponentRef, ViewChild,
    ViewContainerRef, ViewRef
} from '@angular/core';
import {ConvertorService} from "./convertors-service/convertors.service";
import './app.component.css';
import {Subscription} from "rxjs/Subscription";
import {MessageService} from "./message-service/message.service";

@Component({
    selector: 'convertors',
    template:
            `       
        <div class="header"></div>
        <convertor-list (convertorClicked)="onConvertorClicked($event)"></convertor-list>
        
        <div class="convertors" >
            <div class="widget">
                <hex-rgb-box></hex-rgb-box>
            </div>
            <div class="widget" #target>
                <bin-dec-box ></bin-dec-box>
            </div>
        </div>`
})
export class AppComponent {

    @ViewChild('target', {read: ViewContainerRef}) target: ViewContainerRef;

    private componentRef: ComponentRef<Component>;
    private index: number = 0;
    private idMap = new Map();

    subscription: Subscription;

    constructor(private service: ConvertorService,
                private componentFactoryResolver: ComponentFactoryResolver,
                private messageService: MessageService){
        this.subscription = this.messageService.getMessage().subscribe(message => this.messageFromChild(message))
    }
    messageFromChild(message){
        console.log(message.id);
        let component = this.idMap.get(message.id);
        let indice = this.target.indexOf(component);
        this.target.remove(indice);
    }
    onConvertorClicked(event: string){
        let convertor = this.service.getService(event);
        const factory = this.componentFactoryResolver.resolveComponentFactory(convertor);
        let componentRef = this.target.createComponent(factory);
        let id = "id" + this.index;
        (<any>componentRef.instance).componentId = id;
        this.idMap.set(id, componentRef);
        this.componentRef = componentRef;
        this.index += 1;
    }
    ngOnDestroy() {
        console.log("index",this.target)
    }
    getService(component: string){
        return this.service.getService(component);
    }

}
