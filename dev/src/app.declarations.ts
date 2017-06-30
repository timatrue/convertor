import {AppComponent} from "./app.component";
import {ConvertorList} from "./user-interface/select.component";
import {HexRgbBox} from "./color-convertors/hex-rgb/hex-rgb.component";
import {HexRgbExt} from "./color-convertors/hex-rgb/hex-rgb-ext/hex-rgb-ext.component";
import {MemoryHexRgb} from "./color-convertors/hex-rgb/hex-rgb-ext/memory.hex-rgb.component";
import {DynamicBackground} from "./color-convertors/hex-rgb/hex-rgb-ext/color.directive";
import {ColorConvertors} from "./color-convertors/color-convertors.component";
import {NavigationBar} from "./user-interface/navigation.component";
import {NumberConvertors} from "./number-convertors/number-convertors.component";
import {BinDecBox} from "./number-convertors/bin-dec/bin-dec.convertor";
import {BinDecExt} from "./number-convertors/bin-dec/bin-dec-ext/bin-dec-ext";
import {DecBinBox} from "./number-convertors/bin-dec/dec-bin.convertor";
import {DecBinExt} from "./number-convertors/bin-dec/bin-dec-ext/dec-bin-ext";
import {RecordNumbers} from "./number-convertors/records/record.component";
import {SaveInput} from "./user-interface/button-save.component";


/**
 * Created by artem on 23/05/2017.
 */
const parents = [AppComponent, ColorConvertors, NumberConvertors];
const numbers = [BinDecBox, BinDecExt, DecBinBox, DecBinExt, RecordNumbers];
const colors = [HexRgbBox, HexRgbExt, MemoryHexRgb];
const ui = [ConvertorList, NavigationBar, DynamicBackground, SaveInput];

export const DECLARATIONS: any[] = [...parents, ...colors, ...numbers, ...ui];

