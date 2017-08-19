/**
 * Created by artem on 25/06/2017.
 */
export interface ConvertorBase{
    /*delete convertor from root page*/
    deleteConvertor() : void;
    /*delete all convertors from root page when User goes to extended convertor*/
    deleteConvertors() : void;
}
