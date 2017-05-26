import {AppComponent} from "./app.component";
import {HexRgbBox} from "./hex-rgb/hex-rgb.component";
import {BinDecBox} from "./bin-dec/bin-dec.convertor";
import {HexRgbExt} from "./hex-rgb/hex-rgb-ext.component";
import {ConvertorList} from "./user-interface/select.component";

/**
 * Created by artem on 23/05/2017.
 */
export const DECLARATIONS: any[] = [AppComponent, ConvertorList, HexRgbBox, BinDecBox, HexRgbExt];