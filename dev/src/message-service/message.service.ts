/**
 * Created by artem on 26/05/2017.
 */
import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";

@Injectable()
export class MessageService{
    private subject = new Subject<any>();

    sendMessage(message: string){
        this.subject.next({id: message})
    }
    clearMessage() {
        this.subject.next();
    }
    getMessage(): Observable<any>{
        return this.subject.asObservable();
    }
}