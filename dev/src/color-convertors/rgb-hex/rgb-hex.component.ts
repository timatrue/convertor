/**
 * Created by artem on 30/07/2017.
 */
import {Component} from "@angular/core";
import {ConvertorBase} from "../../convertor-interface";
import {MessageService} from "../../message-service/message.service";
import {Router} from "@angular/router";
@Component({
    selector: 'rgb-hex-box',
    template: `
    
    `
})
export class RgbHexBox implements ConvertorBase{

    componentId: string;

    constructor(public messageService: MessageService, private router: Router){}
    deleteConvertor():void{
        this.messageService.sendMessage(this.componentId);
    }
    deleteConvertors():void{
        this.messageService.sendMessage("removeAll");
    }
}