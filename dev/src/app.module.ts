import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {AppComponent} from './app.component';
import {BinDecBox} from "./bin-dec/bin-dec.convertor";
import {HexRgbExt} from "./hex-rgb/hex-rgb-ext.component";
import {APP_BASE_HREF} from '@angular/common';
import {DECLARATIONS} from "./app.declarations";
import {ConvertorService} from "./convertors-service/convertors.service";
import {HexRgbBox} from "./hex-rgb/hex-rgb.component";
import {MessageService} from "./message-service/message.service";

@NgModule({
    imports:[BrowserModule,
    RouterModule.forRoot([
        {path: 'binary-hexadecimal-convertor',
        component: BinDecBox},
        {path: 'ext-hex-rgb-convertor',
            component: HexRgbExt}
    ])],
	declarations: DECLARATIONS,
    entryComponents: [HexRgbBox, BinDecBox, HexRgbExt],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}, ConvertorService, MessageService],
    bootstrap:[AppComponent]
})
export class AppModule{ }