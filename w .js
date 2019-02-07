importClass("org.opencv.core.CvType");
importClass("org.opencv.core.Mat");
//importClass("org.opencv.highgui.Highgui");
importClass("org.opencv.imgproc.Imgproc");

function getWhileCirclePos(im) {


    let img_rgb = Highgui.imread(im);
   // log(img_rgb);
   // let temp_white_circle = Highgui.imread("/sdcard/temp_white_circle.jpg");
   // log(temp_white_circle);
  //  //先尝试匹配截图中的中心原点，
    //如果匹配值没有达到0.95，则使用边缘检测匹配物块上沿
   // let res2 = Imgproc.matchTemplate(img_rgb, temp_white_circle, Imgproc.TM_CCOEFF_NORMED)
    let maxmin = Imgproc.minMaxLoc(res2)
    if (maxmin[1] > 0.95) {
        log('found white circle!')
    }
}
auto();
//请求截图权限
//requestScreenCapture();
device.keepScreenOn(1000 * 3600);
events.on("exit", function() {
    device.cancelKeepingAwake();
});
 //0captureScreen("/sdcard/0.png");
// 获取棋子和 board 的位置
im="/sdcard/0.png";
getWhileCirclePos(im);