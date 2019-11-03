console.show();
importClass(java.io.File);
importClass(java.lang.Long);
importClass(java.io.FileReader);
importClass(java.io.InputStreamReader);
let path = files.path("./xlsx.js");
log(path);
XLSX = require(path);
//log(XLSX);
f = "a.xlsx";
Uint8Array.prototype.slice = Array.prototype.slice
let databuffer = files.readBytes(f);
//log(typeof(databuffer));
var b = new ArrayBuffer(databuffer.length)
var sb = new Uint8Array(b);
//var data = files.readBytes("/sdcard/1.png");
//var sb = new java.lang.StringBuilder();
for (var i = 0; i < databuffer.length; i++) {
    sb[i] = databuffer[i];//& 0xff;
    //log(sb[i].toString(2));
   // log((databuffer[i]& 0xff).toString(2));
    //sb.append(Long.toString(databuffer[i] & 0xff, 1));
}
//log(sb.toString());
//var scriptFiles = files.listDir(scriptsPath, function(name) {
// return name.endsWith(".xls");
//});
//var i = dialogs.singleChoice("请选择要运行的脚本", scriptFiles);
//var f = files.join(scriptsPath, scriptFiles[i]);
//log(f)
readWorkbookFromLocalFile(f, outputWorkbook);

function readWorkbookFromLocalFile(file, callback) {
    //var data = new Uint8Array(sb);     

    var workbook = XLSX.read(sb, {
        type: 'array'
    });
    //var workbook = XLSX.readFile(f);
    log(workbook);
    if (callback) callback(workbook);

}

function outputWorkbook(workbook) {
    var sheetNames = workbook.SheetNames; // 工作表名称集合
    sheetNames.forEach(name => {
        var worksheet = workbook.Sheets[name]; // 只能通过工作表名称来获取指定工作表
        for (var key in worksheet) {
            // v是读取单元格的原始值
            log(key, key[0] === '!' ? worksheet[key] : worksheet[key].v);
        }
    });
}
function readByte(path) {
    var File = java.io.File;
    var FileInputStream = java.io.FileInputStream;

    var file = new File(path);
    var fileSize = file.length();
    var fi = new FileInputStream(file);
    var buffer = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, file.length());
    fi.read(buffer) ;
    fi.close();
    return buffer;
}