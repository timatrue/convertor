function colorConvertor(res){

    console.log("handler color");
    res.send("Color Convertor");
}

function binaryConvertor(res){
    console.log("handler binary");
    res.send("Binary Convertor");

}
exports.colorConvertor = colorConvertor;
exports.binaryConvertor = binaryConvertor;