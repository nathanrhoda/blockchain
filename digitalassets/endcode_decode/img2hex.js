function encode(buffer){
    
    imgHexEncode = new Buffer(buffer).toString('hex');
    
    return imgHexEncode;    
}


function decode(hexDecode){
    var imgHexDecode = new Buffer(hexDecode, 'hex');
    fs.writeFileSync('decodedHexImage.jpg', imgHexDecode);
}

fs = require('fs');

imgReadBuffer = fs.readFileSync('test-pattern.jpg');
var imgHexEncode = encode(imgReadBuffer);

decode(imgHexEncode);


