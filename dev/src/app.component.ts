import {
    AfterContentInit,
    AfterViewInit, Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild,
    ViewContainerRef
} from '@angular/core';
import {ConvertorService} from "./convertors-service/convertors.service";
import {Subscription} from "rxjs/Subscription";
import {MessageService} from "./message-service/message.service";
import './app.component.css';
import {Router} from "@angular/router";

@Component({
    selector: 'convertors',
    template:
            `       
        <div class="header"></div>
        <div  *ngIf="router.url === '/'">
            <convertor-list (convertorClicked)="onConvertor($event)"></convertor-list>
        </div>
            
            <div class="convertors" ><ng-container #target></ng-container></div>
        
        <router-outlet></router-outlet> 
    `
})
export class AppComponent implements OnInit, AfterContentInit{

    @ViewChild('target', {read: ViewContainerRef}) target: ViewContainerRef;

    private componentRef: ComponentRef<Component>;
    private index: number = 0;
    private idMap = new Map();

    subscription: Subscription;

    constructor(private service: ConvertorService,
                private componentFactoryResolver: ComponentFactoryResolver,
                private messageService: MessageService,
                private router: Router){
        this.subscription = this.messageService
            .getMessage()
            .subscribe(message => {
                message.id === "removeAll" ? this.removeAll() : this.removeChild(message);
            })
    }

    ngOnInit(){
        this.service.defaultComponents().forEach(component => this.onConvertor(component))
        //this.onConvertor("BinDecBox");
    }
    ngAfterContentInit() {
       console.log("ngAfterContentInit")
    }

    removeChild(message){
        console.log(message.id);
        let component = this.idMap.get(message.id);
        let indice = this.target.indexOf(component);
        this.target.remove(indice);
        this.idMap.delete(message.id);
    }
    removeAll(){
        this.target.clear();
        this.idMap.clear();
        this.index = 0;
    }
    onConvertor(event: string){
        let convertor = this.service.getService(event);
        const factory = this.componentFactoryResolver.resolveComponentFactory(convertor);
        let componentRef = this.target.createComponent(factory);
        let id = "id" + this.index;
        (<any>componentRef.instance).componentId = id;
        console.log("parent",id);
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
