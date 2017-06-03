import {AppComponent} from "./app.component";
import {HexRgbBox} from "./hex-rgb/hex-rgb.component";
import {BinDecBox} from "./bin-dec/bin-dec.convertor";
import {HexRgbExt} from "./hex-rgb/hex-rgb-ext/hex-rgb-ext.component";
import {ConvertorList} from "./user-interface/select.component";
import {MemoryHexRgb} from "./hex-rgb/hex-rgb-ext/memory.hex-rgb.component";
import {DynamicBackground} from "./hex-rgb/hex-rgb-ext/color.directive";

/**
 * Created by artem on 23/05/2017.
 */
export const DECLARATIONS: any[] = [AppComponent, ConvertorList, HexRgbBox, BinDecBox, HexRgbExt, MemoryHexRgb, DynamicBackground];