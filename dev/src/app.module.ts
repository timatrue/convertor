import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {AppComponent} from './app.component';
import {BinDecBox} from "./bin-dec/bin-dec.convertor";
import {HexRgbBox} from "./hex-rgb/hex-rgb.component";
import {HexRgbExt} from "./hex-rgb/hex-rgb-ext/hex-rgb-ext.component";
import {APP_BASE_HREF} from '@angular/common';
import {DECLARATIONS} from "./app.declarations";
import {ConvertorService} from "./convertors-service/convertors.service";
import {MessageService} from "./message-service/message.service";
import {MemoryService} from "./hex-rgb/hex-rgb-ext/memory.service";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports:[BrowserModule, FormsModule,
        RouterModule.forRoot([
        {path: 'binary-hexadecimal-convertor',
        component: BinDecBox},
        {path: 'ext-hex-rgb-convertor',
            component: HexRgbExt}
    ])],
	declarations: DECLARATIONS,
    entryComponents: [HexRgbBox, BinDecBox],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}, ConvertorService, MessageService, MemoryService],
    bootstrap:[AppComponent]
})
export class AppModule{ }