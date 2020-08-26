/*

 */
console.show();
importClass(java.io.File);
importClass(java.io.FileInputStream);
importClass(java.lang.ClassLoader);
importClass(java.lang.Class);
importClass(com.stardust.autojs.rhino.AndroidClassLoader);
Uint8Array.prototype.slice = Array.prototype.slice
let parent = context.getClassLoader();
let engine = engines.myEngine();
let clz = Class.forName("com.stardust.autojs.engine.ScriptEngine", true, parent);
let fo = Class.forName("java.io.File");
let cls;
let clsbook;
let clscell;
let clssheet;
cstring = Class.forName("java.lang.String", true, parent);
log("正在加载")
threads.start(function() {
    var i = 1
    //在新线程执行的代码
    while (true) {
        sleep(1000)
        log(i + "秒");
        i = i + 1;
    }
});
let loader = new AndroidClassLoader(parent, new File(context.getCacheDir(), "jar"));
let path1 = files.path("./jxl.jar");
loader.loadJar(new File(path1));
clssheet = loader.loadClass("jxl.Sheet");
clsbook = loader.loadClass("jxl.Workbook");
clscell = loader.loadClass("jxl.Cell");
let path = files.path("./2020.xls");
var is = new File(path);
obj = clsbook.getClass();
let _getWorkbook = clsbook.getMethod("getWorkbook", fo);
var book = _getWorkbook.invoke(obj, new File(path));
var num = book.getNumberOfSheets();

var sheet = book.getSheet(0);
var Rows = sheet.getRows();
var Cols = sheet.getColumns();

log("加载完成")
threads.shutDownAll();
//循环读取数据 
/* function readExcel() { 
            for(var i=0;i<Cols;i++) 
            { 
            for(var j=0;j<Rows;j++) 
            { log("第"+j+"行，第"+i+"列为："+sheet.getCell(i, j).getContents());
             } 
              } 
  }*/

console.show()
var s = ""
var url = "http://app.jxrrt.cn:8886/mobile3/pull/webapp/hwx/queryScoreNum"
for (var i = 1; i <Rows; i++) {

    r = http.postJson(url, {
        "idNum": sheet.getCell(0, i).getContents(),
        "area": "sy",
        "cardId": sheet.getCell(1, i).getContents(),
        "examNum": sheet.getCell(1, i).getContents(),
        "pwd": sheet.getCell(0, i).getContents()
    });
    s = s + r.body.string() + "\n";
    log(i);
    //log(s);
}
files.write("/sdcard/2020桃李中考查分.txt", s)