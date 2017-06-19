function colorConvertor(res){

    console.log("handler color");
    res.sendFile(__rootdir + '/public/index.html');
}
function colorConvertors(res){

    console.log("handler color convertors");
    res.sendFile(__rootdir + '/public/index.html');
}
function binaryConvertor(res){
    console.log("handler binary");
    res.send("Binary Convertor");

}
exports.colorConvertor = colorConvertor;
exports.binaryConvertor = binaryConvertor;
exports.colorConvertors = colorConvertors;