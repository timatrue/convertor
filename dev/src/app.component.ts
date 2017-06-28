import {
    Component, ComponentFactoryResolver, ComponentRef, OnDestroy, OnInit, ViewChild,
    ViewContainerRef
} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {ConvertorService} from "./convertors-service/convertors.service";
import {MessageService} from "./message-service/message.service";
import './app.component.css';

//backtick`
@Component({
    selector: 'convertors',
    template:
            `       
        <div class="header"></div>
       <navigation (onClickHREF)="removeAll()"></navigation>
        <div  *ngIf="router.url === '/'">
            <convertor-list  (convertorClicked)="onConvertor($event)"></convertor-list>
            
        </div>
            
            <div class="convertors" >
                <ng-container #target>
                    <router-outlet></router-outlet>
                </ng-container>
            </div>
        
        
    `
})
export class AppComponent implements OnInit, OnDestroy{

    @ViewChild('target', {read: ViewContainerRef}) target: ViewContainerRef;

    private componentRef: ComponentRef<Component>;
    private index: number = 0;
    public idMap = new Map();
    private url = this.router.url;
    subscription: Subscription;

    constructor(public convertorService: ConvertorService,
                private componentFactoryResolver: ComponentFactoryResolver,
                public messageService: MessageService,
                private router: Router){
        this.subscription = this.messageService
            .getMessage()
            .subscribe(message => {
                console.log(this.url,"vs", this.getCurrentUrl())
                if(this.url === this.getCurrentUrl()){
                    message.id === "removeAll" ? this.removeAll() : (message.id === "initAll" ?  this.ngOnInit() : this.removeChild(message));
                }
            })
    }
    onRouteChanged(){
        this.router.events
            .subscribe((event) => {
                // example: NavigationStart, RoutesRecognized, NavigationEnd
                if (event instanceof NavigationEnd) {
                    if(!(event.url === "/"))this.removeAll();
                    else  this.convertorService.getListConvertors().forEach(component => this.onConvertor(component))
                }
            });
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
        let convertor = this.convertorService.getService(event);
        const factory = this.componentFactoryResolver.resolveComponentFactory(convertor);
        let componentRef = this.target.createComponent(factory);
        let id = "id" + this.index;
        (<any>componentRef.instance).componentId = id;
        //console.log("parent",id);
        this.idMap.set(id, componentRef);
        this.componentRef = componentRef;
        this.index += 1;
    }
    ngOnInit(){
        this.onRouteChanged();
    }
    ngOnDestroy() {
        console.log("ngOnDestroy",this.target);
        this.subscription.unsubscribe();
    }
    getService(component: string){
        return this.convertorService.getService(component);
    }
    getCurrentUrl(): string {
        return this.router.url;
    }
}
