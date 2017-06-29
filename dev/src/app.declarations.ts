import {AppComponent} from "./app.component";
import {ConvertorList} from "./user-interface/select.component";
import {BinDecBox} from "./number-convertors/bin-dec/bin-dec.convertor";
import {HexRgbBox} from "./color-convertors/hex-rgb/hex-rgb.component";
import {MemoryHexRgb} from "./color-convertors/hex-rgb/hex-rgb-ext/memory.hex-rgb.component";
import {DynamicBackground} from "./color-convertors/hex-rgb/hex-rgb-ext/color.directive";
import {ColorConvertors} from "./color-convertors/color-convertors.component";
import {NavigationBar} from "./user-interface/navigation.component";
import {HexRgbExt} from "./color-convertors/hex-rgb/hex-rgb-ext/hex-rgb-ext.component";
import {BinDexExt} from "./number-convertors/bin-dec/bin-dec-ext/bin-dec-ext";
import {NumberConvertors} from "./number-convertors/number-convertors.component";
import {DecBinBox} from "./number-convertors/bin-dec/dec-bin.convertor";
import {RecordNumbers} from "./number-convertors/records/record.component";

/**
 * Created by artem on 23/05/2017.
 */
const parents = [AppComponent, ColorConvertors, NumberConvertors];
const numbers = [BinDecBox, DecBinBox, BinDexExt, RecordNumbers];
const colors = [HexRgbBox, HexRgbExt, MemoryHexRgb];
const ui = [ConvertorList, NavigationBar, DynamicBackground];

export const DECLARATIONS: any[] = [...parents, ...colors, ...numbers, ...ui];

