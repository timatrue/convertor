import {BinDecBox} from "../number-convertors/bin-dec/bin-dec.convertor";
import {HexRgbBox} from "../color-convertors/hex-rgb/hex-rgb.component";
import {DecBinBox} from "../number-convertors/bin-dec/dec-bin.convertor";
import {RgbHexBox} from "../color-convertors/rgb-hex/rgb-hex.component";
import {HexDecBox} from "../number-convertors/bin-dec/hex-dec.convertor";
import {DecConvertor} from "../utilility";
/**
 * Created by artem on 23/05/2017.
 */
export const CONVERTORS = {
    hexRgb: {component:HexRgbBox, name: "HEX-2-RGB convertor", id:"hexRgb"},
    rgbHex: {component:RgbHexBox, name: "RGB-2-HEX convertor", id:"rgbHex"},
    binDec: {component: BinDecBox, name: "Bin-2-Dec convertor", id:"binDec"},
    decBin: {component: DecBinBox, name: "Dec-2-Bin convertor", id:"decBin"},
    hexDec: {component: HexDecBox, name: "Hex-2-Dec convertor", id:"hexDec"}

};
export const OUTPUTS = {
    decbin: [{ name: "to Binary", label: "Binary", value: "bin"},
        { name: "to Hexadecimal", label: "Hexadecimal", value: "hex"}]

}