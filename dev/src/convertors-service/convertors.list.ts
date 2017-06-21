import {BinDecBox} from "../number-convertors/bin-dec/bin-dec.convertor";
import {HexRgbBox} from "../color-convertors/hex-rgb/hex-rgb.component";
/**
 * Created by artem on 23/05/2017.
 */
export const CONVERTORS = {
    hexRgb: {component:HexRgbBox, name: "Hex-2-RGB convertor", id:"hexRgb"},
    binDec:{component: BinDecBox, name: "Bin-2-Dec convertor", id:"binDec"}
};
