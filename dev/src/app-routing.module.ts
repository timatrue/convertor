import {NgModule} from "@angular/core";
import {PreloadAllModules, RouterModule, Routes}  from '@angular/router';
import {HexRgbExt} from "./color-convertors/hex-rgb/hex-rgb-ext/hex-rgb-ext.component";
import {ColorConvertors} from "./color-convertors/color-convertors.component";
import {BinDecExt} from "./number-convertors/bin-dec/bin-dec-ext/bin-dec-ext";
import {NumberConvertors} from "./number-convertors/number-convertors.component";
import {DecBinExt} from "./number-convertors/bin-dec/bin-dec-ext/dec-bin-ext";
import {RgbHexExt} from "./color-convertors/rgb-hex/rgb-hex-ext/rgb-hex-ext.component";


/**
 * Created by artem on 17/06/2017.
 */

const appRoutes: Routes = [
    {
        path: 'color-convertors',
        component: ColorConvertors,
        data: {alias: "colors", list: ["hexRgb","rgbHex"]}
    },
    {
        path: 'color-convertors',
        children: [
            {
                path: 'hex-rgb-convertor',
                component: HexRgbExt,
                data: {alias: "hexRgbExt"}
            },
            {
                path: 'rgb-hex-convertor',
                component: RgbHexExt,
                data: {alias: "rgbHexExt"}
            }
        ]

    },
    {
        path: 'number-convertors',
        component: NumberConvertors,
        data: {alias: "numbers", list: ["binDec","decBin"]},
    },
    {
        path: 'number-convertors',
        children: [
            {
                path: 'binary-decimal-convertor',
                component: BinDecExt,
                data: {alias: "binDecExt"}
            },
            {
                path: 'decimal-binary-convertor',
                component: DecBinExt,
                data: {alias: "decBinExt"}
            }
        ]
    }
]
export const appRoutesMap = appRoutes
    .filter((route)=> route.data)
    .map((route)=> {
        return {
            path: route.path,
            alias: route.data.alias,
            list: route.data.list
        }
});
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [
        RouterModule
    ]
})
export class appRoutingModule{}