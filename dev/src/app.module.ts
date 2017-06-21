import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {appRoutingModule} from "./app-routing.module";
import {AppComponent} from './app.component';
import {BinDecBox} from "./number-convertors/bin-dec/bin-dec.convertor";
import {HexRgbBox} from "./color-convertors/hex-rgb/hex-rgb.component";
import {APP_BASE_HREF} from '@angular/common';
import {DECLARATIONS} from "./app.declarations";
import {ConvertorService} from "./convertors-service/convertors.service";
import {MessageService} from "./message-service/message.service";
import {MemoryService} from "./color-convertors/hex-rgb/hex-rgb-ext/memory.service";



@NgModule({
    imports:[BrowserModule, appRoutingModule],
	declarations: DECLARATIONS,
    entryComponents: [HexRgbBox, BinDecBox],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}, ConvertorService, MessageService, MemoryService],
    bootstrap:[AppComponent]
})
export class AppModule{ }