/**
 * Created by artem on 23/05/2017.
 */
import {Injectable} from '@angular/core';
import {CONVERTORS} from "./convertors.list";
import {appRoutesMap} from "../app-routing.module";
import {Router} from "@angular/router";

@Injectable()
export class ConvertorService{
    constructor(private router: Router){}

    getService(service: string){
        return CONVERTORS[service].component;
    }
    defaultComponents(){
        return Object.keys(CONVERTORS);
    }
    getListConvertors(){
        return this.mapListToUrl().length ? this.mapListToUrl()[0].list : Object.keys(CONVERTORS);
    }
    mapListToUrl() {
        let url = this.router.url;
        let convertors = appRoutesMap.filter((route)=> {
            return route.path === url.replace("/","");
        });
        return convertors;
    }
}