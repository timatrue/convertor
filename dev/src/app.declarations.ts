import {AppComponent} from "./app.component";
import {ConvertorList} from "./user-interface/select.component";
import {BinDecBox} from "./number-convertors/bin-dec/bin-dec.convertor";
import {HexRgbBox} from "./color-convertors/hex-rgb/hex-rgb.component";
import {HexRgbExt} from "./color-convertors/hex-rgb/hex-rgb-ext/hex-rgb-ext.component"
import {MemoryHexRgb} from "./color-convertors/hex-rgb/hex-rgb-ext/memory.hex-rgb.component";
import {DynamicBackground} from "./color-convertors/hex-rgb/hex-rgb-ext/color.directive";
import {ColorConvertors} from "./color-convertors/color-convertors.component";
import {NavigationBar} from "./user-interface/navigation.component";

/**
 * Created by artem on 23/05/2017.
 */
export const DECLARATIONS: any[] = [
    AppComponent, ColorConvertors, ConvertorList, NavigationBar, HexRgbBox, BinDecBox, HexRgbExt, MemoryHexRgb, DynamicBackground];