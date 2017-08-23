import {BinDecBox} from "../number-convertors/bin-dec/bin-dec.convertor";
import {HexRgbBox} from "../color-convertors/hex-rgb/hex-rgb.component";
import {DecBinBox} from "../number-convertors/bin-dec/dec-bin.convertor";
import {RgbHexBox} from "../color-convertors/rgb-hex/rgb-hex.component";
/**
 * Created by artem on 23/05/2017.
 */
export const CONVERTORS = {
    hexRgb: {component:HexRgbBox, name: "Hex-2-RGB convertor", id:"hexRgb"},
    rgbHex: {component:RgbHexBox, name: "RGB-2-Hex convertor", id:"rgbHex"},
    binDec:{component: BinDecBox, name: "Bin-2-Dec convertor", id:"binDec"},
    decBin:{component: DecBinBox, name: "Dec-2-Bin convertor", id:"decBin"},

};
