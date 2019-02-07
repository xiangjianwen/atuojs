importClass("org.opencv.core.CvType");
importClass("org.opencv.core.Point");
importClass("org.opencv.core.Size");
importClass("org.opencv.core.Mat");
importClass("org.opencv.core.Core");
importClass("org.opencv.core.Scalar");
importClass("org.opencv.highgui.Highgui");
importClass("org.opencv.imgproc.Imgproc");
importClass("java.util.List");
importClass("org.opencv.core.MatOfPoint");
importClass("java.util.ArrayList")
//importPackage("Packages.org.opencv.imgproc");
function getWhileCirclePos(im) {
    let res2 = new Mat();
    let s = new Size(3, 3)
    //let maxmin = new Mat();
    let img_rgb = Highgui.imread(im);
    //log(img_rgb);
    let temp_white_circle = Highgui.imread("/sdcard/debug/a.png");
    //  log(temp_white_circle);
    //先尝试匹配截图中的中心原点，
    //如果匹配值没有达到0.95，则使用边缘检测匹配物块上沿
    Imgproc.GaussianBlur(img_rgb, img_rgb, s, 0.0)
    Imgproc.GaussianBlur(temp_white_circle, temp_white_circle, s, 0.0)
    Imgproc.matchTemplate(img_rgb, temp_white_circle, res2, Imgproc.TM_CCOEFF_NORMED)
    let maxmin = Core.minMaxLoc(res2)
    log(maxmin.maxVal);
    log(maxmin.maxLoc);
    log(maxmin.minVal);
    log(maxmin.minLoc);

    if (maxmin.maxVal > 0.95) {
        log('found white circle!')
    }
}
//找椭圆
function findty() {
    importClass("org.opencv.core.Mat")
    importClass("org.opencv.core.MatOfPoint2f")
    let originalMat = Highgui.imread("/sdcard/debug/02.png");
    //log(originalMat);
    let grayMat = new Mat();
    let cannyEdges = new Mat();
    let grayMat1 = new Mat();
    let contours=new ArrayList();
    let hierarchy = new Mat();
    let cimage = new Mat();
    
    let s = new Size(3, 3)
    let mCannyMat2 = new Mat();
    
    Imgproc.cvtColor(originalMat, grayMat, Imgproc.COLOR_BGR2GRAY);
    //log(grayMat);
    //Imgproc.GaussianBlur(grayMat1, grayMat, s, 0)
    Imgproc.Canny(grayMat, cannyEdges, 10, 5);
Imgproc.findContours(cannyEdges,contours,hierarchy,Imgproc.RETR_EXTERNAL,Imgproc.CHAIN_APPROX_NONE);
log(contours.size());
//log(hierarchy);

////////
var broadx,broady,broadp=0;
var h = cannyEdges.rows();
    var w = cannyEdges.cols();
    lable:
  for (var row = 400; row < h; row++) {
        for (var c = 0; c < w; c++) {
            let point = cannyEdges.get(row, c);
            // log(point);
            if (point[0] != 0) {
                log(row + "," + c + "," + point[0]);
                //return [row, c];
                broadx=c;broady=row;
                break lable;
            }
        }
        }
 /////////     
    
cimage = Mat.zeros(cannyEdges.size(), CvType.CV_8UC3);
for(var i=0;i<contours.size();i++)

{var contoursi=contours.get(i);
//log(contoursi);
  var count = contoursi.size().height;
// log(count);
 for(var j=0;j<count;j++)
  {
     var p=contoursi.get(j,0);
  //log(p);
  if(p[0]==broadx&p[1]==broady)
  {var temp=0;
      log(j+"fffff第"+i);broadp=i;
      log(contoursi);
      for(var k=0;k<count;k++)
      {var pg=contoursi.get(k,0);
         // log(pg);
          if(pg[1]>temp) temp=pg[1];
          }
      log(temp);
      }
  
     }
   if(count<5) continue;
   //log(count.height);
   var ccc=new MatOfPoint2f(contoursi.toArray())
   //log(ccc);
   var box=Imgproc.fitEllipse(ccc);
  //log(box);
  //var s1=Imgproc.contourArea(contoursi);
 // var s2=Math.PI*box.size.width*box.size.height;
  //if(s1/s2<0.2)continue;
  if(Math.max(box.size.width, box.size.height) >Math.min(box.size.width, box.size.height)*30 )  
    {
      continue;
        }
        if(i<70)continue;
     //   log(broadp);
    Imgproc.drawContours (cimage,contours,broadp,new Scalar(0, 255, 0),1) ;  
//Core.ellipse(cimage,box,new Scalar(0, 255, 0),1,2);
}
Highgui.imwrite("/sdcard/debug/t.png", cimage);

}
//找直线
function getline() {
    let originalMat = Highgui.imread("/sdcard/debug/0.png");
    //log(originalMat);
    let grayMat = new Mat();
    let cannyEdges = new Mat();
    let grayMat1 = new Mat();
    let lines = new Mat();
    let circles = new Mat();
    let s = new Size(3, 3)
    let mCannyMat2 = new Mat();
    log(Imgproc.cvtColor(originalMat, grayMat1, Imgproc.COLOR_BGR2GRAY));
    //log(grayMat);
    Imgproc.GaussianBlur(grayMat1, grayMat, s, 0)
    Imgproc.Canny(grayMat, cannyEdges, 10, 5);


    Imgproc.HoughLinesP(cannyEdges, lines, 1, Math.PI / 180, 30, 50, 10);

    log(lines.cols());

    for (var i = 0; i < lines.cols(); i++)

    {
        //log(i);
        var l = lines.get(0, i);
        // log(l);
        var start = new Point(l[0], l[1]);

        var end = new Point(l[2], l[3]);
        log("start;" + start + "end" + end);
        Core.line(originalMat, start, end, new Scalar(0, 255, 0), 5);
    }
    Highgui.imwrite("/sdcard/debug/t.png", originalMat);
}

function getBroadpos() {
    let originalMat = Highgui.imread("/sdcard/debug/2.png");
    //log(originalMat);
    let grayMat = new Mat();
    let cannyEdges = new Mat();
    let grayMat1 = new Mat();
    let circles = new Mat();
    let s = new Size(3, 3)

    log(Imgproc.cvtColor(originalMat, grayMat1, Imgproc.COLOR_BGR2GRAY));
    //log(grayMat);
    Imgproc.GaussianBlur(grayMat1, grayMat, s, 0)
    Imgproc.Canny(grayMat, cannyEdges, 10, 5);
    var h = cannyEdges.rows();
    var w = cannyEdges.cols();
    for (var m = 100; m < 120; m++) {
        for (var n = 0; n < 150; n++) {
            cannyEdges.put(m, n, 255);
            log(cannyEdges.get(m, n));
        }

    }
    log(Highgui.imwrite("/sdcard/debug/tem.png", cannyEdges));
    //var si=cannyEdges.size();
    //Highgui.imwrite("/sdcard/debug/tem.png",cannyEdges);
    var f = "/sdcard/debug/temp_player.txt"
    for (var row = 400; row < h; row++) {
        for (var c = 0; c < w; c++) {
            let point = cannyEdges.get(row, c);
            //files.append(f,point[0]);
            //log(row+";"+c+" "+point[0]);
            if (point[0] != 0) {
                //point[0]=100;
                log(row + "fund" + c + " " + point[0]);
                var x = 0.0;
                log(cannyEdges.put(row, c, 0));
                point = cannyEdges.get(row, c);
                log(row + "fund" + c + " " + point[0]);
                return
                // files.append(f,"\n");
            }
        }
        // log(si.width);
        //log(h);
        // log(w);
        //sleep(5000);
    }

}

auto();
//请求截图权限
console.show()
//requestScreenCapture();
device.keepScreenOn(1000 * 3600);
events.on("exit", function() {
    device.cancelKeepingAwake();
});
//log(captureScreen("/sdcard/0.png"));
// 获取棋子和 board 的位置
im = "/sdcard/debug/1.png";
//getWhileCirclePos(im);
//getline();
findty();
//getBroadpos();