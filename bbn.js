importClass("org.opencv.core.CvType");
importClass("org.opencv.core.Mat");
importClass("org.opencv.imgcodecs.Imgcodecs");
importClass("org.opencv.imgproc.Imgproc");
importClass(java.io.File);
importClass(java.lang.ClassLoader);
importClass(java.lang.Class);
importClass(com.stardust.autojs.rhino.AndroidClassLoader);
var c =new Imgcodecs
let originalMaty = new Mat();
//let originalMat = c.imread("/sdcard/a.jpg",0);
let originalMat = c.notifyAll();
log(originalMat);
let parent = context.getClassLoader();
;
//log(c);

//let fo=Class.forName("java.io.File");
let cls;

//try {
    //cstring = Class.forName("java.lang.String", true, parent);
    //log(cstring);
//} catch (e) {
    let loader = new AndroidClassLoader(parent, new File(context.getCacheDir(), "jar"));
    let path = files.path("./opencv31.jar");
    log(path);
    //log(loader.loadJar(new File(path)));
   // clscell = loader.loadClass("org.opencv.imgcodecs.Imgcodecs");
      //clscell = loader.loadClass("Imgcodecs");
    //log(clscell);
   
   //log( clscell.getMethods())
