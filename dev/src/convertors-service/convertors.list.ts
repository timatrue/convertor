import {BinDecBox} from "../bin-dec/bin-dec.convertor";
import {HexRgbBox} from "../hex-rgb/hex-rgb.component";
/**
 * Created by artem on 23/05/2017.
 */
//export const CONVERTORS: any[] = [ HexRgbBox, BinDecBox];
export const CONVERTORS = {hexRgb: {component:HexRgbBox, name: "Hex-2-RGB convertor", id:"hexRgb"},
                            binDec:{component: BinDecBox, name: "Bin-2-Dec convertor", id:"binDec"}};