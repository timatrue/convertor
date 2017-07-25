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
import {DecBinBox} from "./number-convertors/bin-dec/dec-bin.convertor";
import {RecordNumbersService} from "./number-convertors/records/record-numbers.service";
import {RecordColorsService} from "./color-convertors/records/record-colors.service";



@NgModule({
    imports:[BrowserModule, appRoutingModule],
	declarations: DECLARATIONS,
    entryComponents: [HexRgbBox, BinDecBox, DecBinBox],
    providers: [{provide: APP_BASE_HREF, useValue: '/'},
        ConvertorService, MessageService, RecordNumbersService, RecordColorsService],
    bootstrap:[AppComponent]
})
export class AppModule{ }