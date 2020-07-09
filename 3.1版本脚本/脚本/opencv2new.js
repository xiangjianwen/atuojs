importClass("org.opencv.core.CvType");
importClass("org.opencv.core.Mat");
importClass("org.opencv.core.Size");
importClass("org.opencv.highgui.Highgui");
importClass("org.opencv.imgproc.Imgproc");
let originalMat = Highgui.imread("/sdcard/5.jpg");
log(originalMat);
let grayMat = new Mat();
let cannyEdges = new Mat();
let grayMat1 = new Mat();
let circles = new Mat();
let s=new Size(5,5)

log(Imgproc.cvtColor(originalMat, grayMat1, Imgproc.COLOR_BGR2GRAY));
log(grayMat);
Imgproc.GaussianBlur(grayMat1, grayMat,s, 0.0)
Imgproc.Canny(grayMat, cannyEdges, 10, 100);
log(cannyEdges);
Imgproc.HoughCircles(cannyEdges, circles, Imgproc.CV_HOUGH_GRADIENT, 1, cannyEdges.rows() / 15);
log(circles);
let houghCircles = new Mat();
log(houghCircles.create(cannyEdges.rows(), cannyEdges.cols(), CvType.CV_8UC1));
for (let i = 0; i < circles.cols(); i++) {
    let parameters = circles.get(0, i);
    let x, y, r;
    x = parameters[0]; //圆心x坐标 
    y = parameters[1]; //圆心y坐标 
    r = parameters[2]; //圆半径 
    log(x + "\t\t" + y + "\t\t" + r);
}