/*
 * 说明：模块用于确保多个脚本同时执行时，能
 * 够确保这些脚本按照先后顺序、一个个排队执行，
 * 类似单一线程池功能
 * 
 * 方法：确保jar文件和此模块在同一个目录，
 * 在自己的需要确保单任务的脚本开头，
 * 调用加载此模块，并且调用enqueue方法即可
 * var single=quire("SingleScript");
 * single.enqueue();
 *
 * By 酷安@群主让我注册
 * 使用时请保留此注释
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
let fo=Class.forName("java.io.File");
let cls;
let clsbook;
let clscell;
let clssheet;
//try {
    cstring = Class.forName("java.lang.String", true, parent);
    log(cstring);
//} catch (e) {
    let loader = new AndroidClassLoader(parent, new File(context.getCacheDir(), "jar"));
    let path = files.path("./jxl.jar");
    log(path);
    loader.loadJar(new File(path));
    clssheet = loader.loadClass("jxl.Sheet");
    log(clssheet);
    clsbook = loader.loadClass("jxl.Workbook");
    log(clsbook);
    clscell = loader.loadClass("jxl.Cell");
    log(clscell);
   //log( clsbook.getMethods())
    
//}

function readExcel() {
        let path = files.path("./m_.xls");
           var is = new File(path);
           log(typeof(is));
           obj = clsbook.getClass();

          //		m.invoke(obj, "刘德华");



           let _getWorkbook = clsbook.getMethod("getWorkbook",fo);
            var book = _getWorkbook.invoke(obj,new File(path));
           log(book);
            var num = book.getNumberOfSheets();
            log("the num of sheets is " + num+ "\n");
 
           var sheet = book.getSheet(0);
            var Rows = sheet.getRows();
           var Cols = sheet.getColumns();
            log("the name of sheet is " + sheet.getName() + "\n");
            log("total rows is " + Rows + "\n");
            log("total cols is " + Cols + "\n");
            //循环读取数据 
            for(var i=0;i<Cols;i++) 
            { 
            for(var j=0;j<Rows;j++) 
            { log("第"+j+"行，第"+i+"列为："+sheet.getCell(i, j).getContents());
             } 
              } 
  }
readExcel();
//let _register = cls.getMethod("register", clz);
//let _unregister = cls.getMethod("unregister", clz);
//let _taskCount = cls.getMethod("getTaskCount");
//let str = engine + "";
//str = str.substring(str.lastIndexOf("@"));
