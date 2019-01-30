importClass("org.opencv.core.CvType");
importClass("org.opencv.core.Mat");
importClass("org.opencv.imgcodecs.Imgcodecs");
importClass("org.opencv.imgproc.Imgproc");
let originalMat = Imgcodecs.imread("/sdcard/4.jpg");
let grayMat = new Mat();
let cannyEdges = new Mat();
let circles = new Mat();
Imgproc.cvtColor(originalMat, grayMat, Imgproc.COLOR_BGR2GRAY);
Imgproc.Canny(grayMat, cannyEdges, 10, 100);
Imgproc.HoughCircles(cannyEdges, circles, Imgproc.CV_HOUGH_GRADIENT, 1, cannyEdges.rows() / 15);
let houghCircles = new Mat();
houghCircles.create(cannyEdges.rows(), cannyEdges.cols(), CvType.CV_8UC1);
for (let i = 0; i < circles.cols(); i++) {
    let parameters = circles.get(0, i);
    let x, y, r;
    x = parameters[0]; //圆心x坐标 
    y = parameters[1]; //圆心y坐标 
    r = parameters[2]; //圆半径 
    log(x + "\t\t" + y + "\t\t" + r);
}