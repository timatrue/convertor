/**
 * Created by artem on 23/05/2017.
 */
import {Injectable} from '@angular/core';
import {CONVERTORS} from "./convertors.list";

@Injectable()
export class ConvertorService{
    getService(service: string){
        return CONVERTORS[service].component;

    }
}