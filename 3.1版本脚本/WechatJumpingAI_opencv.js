// 根据wangshub的Python代码修改而来(原项目地址https://github.com/wangshub/wechat_jump_game)

// 运行环境：安卓软件Auto.js(https://github.com/hyb1996/Auto.js), 下载地址: https://github.com/hyb1996/Auto.js/releases
// 需求root权限或者安卓7.0以上才能运行本脚本

// 在原算法基础上优化了找出棋子的算法(直接使用Auto.js内置使用opencv实现的找色函数, 比原算法快很多)，但是在手机设备上找出跳跃位置的算法的效率还是不够理想
importClass("org.opencv.core.Size");
importClass("org.opencv.core.CvType");
importClass("org.opencv.core.Mat");
importClass("org.opencv.highgui.Highgui");
importClass("org.opencv.imgproc.Imgproc");
importClass("org.opencv.core.Core");
importClass("org.opencv.core.Scalar");
importClass("org.opencv.core.MatOfPoint");
importClass("java.util.ArrayList")

//查找物体

function findContours(im) {
    importClass("org.opencv.core.Mat")
    importClass("org.opencv.core.MatOfPoint2f")
    let originalMat = Highgui.imread(im);
    //log(originalMat);
    let grayMat = new Mat();
    let cannyEdges = new Mat();
    let grayMat1 = new Mat();
    let contours = new ArrayList();
    let hierarchy = new Mat();
    let cimage = new Mat();

    let s = new Size(3, 3)
    let mCannyMat2 = new Mat();

    Imgproc.cvtColor(originalMat, grayMat, Imgproc.COLOR_BGR2GRAY);
    //log(grayMat);
    //Imgproc.GaussianBlur(grayMat1, grayMat, s, 0)
    Imgproc.Canny(grayMat, cannyEdges, 10, 5);
    Imgproc.findContours(cannyEdges, contours, hierarchy, Imgproc.RETR_EXTERNAL, Imgproc.CHAIN_APPROX_NONE);
    log(contours.size());
    //log(hierarchy);

    ////////
    var broadx, broady, broadp = 0;
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
                    broadx = c;
                    broady = row;
                    break lable;
                }
            }
        }
    /////////     

    cimage = Mat.zeros(cannyEdges.size(), CvType.CV_8UC3);
    for (var i = 0; i < contours.size(); i++)

    {
        var contoursi = contours.get(i);
        //log(contoursi);
        var count = contoursi.size().height;
        // log(count);
        for (var j = 0; j < count; j++) {
            var p = contoursi.get(j, 0);
            //log(p);
            if (p[0] == broadx & p[1] == broady) {
                var temp = 0;
                log(j + "fffff第" + i);
                broadp = i;
                //log(contoursi);
                for (var k = 0; k < count; k++) {
                    var pg = contoursi.get(k, 0);
                    // log(pg);
                    if (pg[1] > temp) temp = pg[1];
                }
               // log(temp);
            }

        }
        if (count < 5) continue;
        //log(count.height);
        var ccc = new MatOfPoint2f(contoursi.toArray())
        //log(ccc);
        var box = Imgproc.fitEllipse(ccc);
        //log(box);
        //var s1=Imgproc.contourArea(contoursi);
        // var s2=Math.PI*box.size.width*box.size.height;
        //if(s1/s2<0.2)continue;
        if (Math.max(box.size.width, box.size.height) > Math.min(box.size.width, box.size.height) * 30) {
            continue;
        }
        if (i < 70) continue;
        //   log(broadp);
        Imgproc.drawContours(cimage, contours, broadp, new Scalar(0, 255, 0), 1);
        //Core.ellipse(cimage,box,new Scalar(0, 255, 0),1,2);
    }
    Highgui.imwrite("/sdcard/debug/"+new Date().getTime()+"t.png", cimage);
return temp;
}

function getWhileCirclePos(im) {
    let res2 = new Mat();

    //let maxmin = new Mat();
    let img_rgb = Highgui.imread(im);
    //log(img_rgb);
    let temp_white_circle = Highgui.imread("/sdcard/temp_white_circle.png");
    // log(temp_white_circle);
    //先尝试匹配截图中的中心原点，
    //如果匹配值没有达到0.95，则使用边缘检测匹配物块上沿
    Imgproc.matchTemplate(img_rgb, temp_white_circle, res2, Imgproc.TM_CCOEFF_NORMED)
    let maxmin = Core.minMaxLoc(res2)


    if (maxmin.maxVal > 0.9) {

        log('found white circle!')
    }
    return [maxmin.maxVal, maxmin.maxLoc]
}

function getBottlePos(im) {
    let res2 = new Mat();
    let img_rgb1 = new Mat();
    let temp_white_circle1 = new Mat();
    let s = new Size(3, 3)
    //let maxmin = new Mat();
    let img_rgb = Highgui.imread(im);
    //log(img_rgb);
    let temp_white_circle = Highgui.imread("/sdcard/debug/a3.png");
    // log(temp_white_circle);
    //先尝试匹配截图中的中心原点，
    //如果匹配值没有达到0.95，则使用边缘检测匹配物块上沿
    Imgproc.GaussianBlur(img_rgb, img_rgb1, s, 0.0)
    Imgproc.GaussianBlur(temp_white_circle, temp_white_circle1, s, 0.0)
    Imgproc.matchTemplate(img_rgb1, temp_white_circle1, res2, Imgproc.TM_CCOEFF_NORMED)
    let maxmin = Core.minMaxLoc(res2)
    toastLog(maxmin.maxVal + " " + maxmin.maxLoc);


    if (maxmin.maxVal > 0.9) {

        log('found bottle!')
    }
    return [maxmin.maxVal, maxmin.maxLoc]
}

function getbroadpos(im1, piece) {
    let originalMat = Highgui.imread(im1);
    //log(originalMat);
    let grayMat = new Mat();
    let cannyEdges = new Mat();
    let grayMat1 = new Mat();
    let circles = new Mat();
    let s = new Size(3, 3)

    Imgproc.cvtColor(originalMat, grayMat1, Imgproc.COLOR_BGR2GRAY);
    //log(grayMat);
    //Imgproc.GaussianBlur(grayMat1, grayMat,s, 0.0)
    Imgproc.Canny(grayMat1, cannyEdges, 10, 5);
    var h = cannyEdges.rows();
    var w = cannyEdges.cols();
    //var si=cannyEdges.size();

    for (var m = piece.x - 20; m < piece.x + 35; m++) {
        for (var n = piece.y - 220; n < piece.y + 150 - 194; n++) {
            cannyEdges.put(n, m, 0);
            //log("p x"+piece.x+"p y"+piece.y+cannyEdges.get(n,m));
        }

    }
    Highgui.imwrite("/sdcard/debug/"+new Date().getTime()+"tem.png", cannyEdges);
    //sleep(100000);
    //var f = "/sdcard/debug/temp_player.txt"
    for (var row = 400; row < h; row++) {
        for (var c = 0; c < w; c++) {
            let point = cannyEdges.get(row, c);
            // log(point);
            if (point[0] != 0) {
                log(row + "," + c + "," + point[0]);
                return [row, c];
            }
        }
        // log(si.width);
        //log(h);
        // log(w);
        //sleep(5000);
    }
}



var press_coefficient = device.height == 1920 ? "1.392,1.392" : "2.099,2.099"; // 长按的时间系数，请自己根据实际情况调节var press_coefficient_left = press_coefficient;
var press_coefficient_left;
var press_coefficient_right;

var im1;
const under_game_score_y = 300; // 截图中刚好低于分数显示区域的 Y 坐标，300 是 1920x1080 的值，2K 屏、全面屏请根据实际情况修改
//按压位置为再来一局的位置
const press_x = device.width / 2;
const press_y = 1584 * (device.height / 1920.0);
const piece_body_width = 80; // 棋子的宽度，比截图中量到的稍微大一点比较安全，可能要调节
const piece_dist_from_top_to_base = 188; //棋子最顶部到棋子底部中点的距离
// 下面的 (353, 859) 和 (772, 1100) 是游戏截图里的两个台子的中点坐标，主要用来算角度，可能要调节
const sample_board_x1 = 353;
const sample_board_y1 = 859;
const sample_board_x2 = 772;
const sample_board_y2 = 1100;

const piece_color = "#3d3752"; //棋子大致颜色

var w = device.width;
var h = device.height;

//使这些函数调用更方便
const red = colors.red;
const green = colors.green;
const blue = colors.blue;
const max = Math.max;
const abs = Math.abs;

//如果debug为true则开启调试，将会把每次计算的棋子位置和目标位置标记在截图中并保存在一下目录
//const debug = false;
const debug = true;
const debug_images_dir = "/sdcard/debug/";

prepare();
main();

function press_compat(x, y, duration) {
    // log(device.sdkInt);
    if (device.sdkInt >= 24) {
        press(x, y, duration);
    } else {
        shell(util.format("input swipe %d %d %d %d %d", x, y, x, y, duration), true);
    }
}

function jump(distance) {
    var press_coefficient;
    if (distance > 0) {
        press_coefficient = press_coefficient_right;
    } else {
        press_coefficient = press_coefficient_left;
    }
    var press_time = abs(distance) * press_coefficient;
    press_time = max(200, press_time);
    var press_x = random(200, 600);
    var press_y = random(500, 800);
    press_compat(press_x, press_y, parseInt(press_time));
}

function find_piece_and_board(im) {
    var piece = find_piece(im);
    if (!piece) {
        return null;
    }
    var board = find_board(im, piece);
    return {
        piece: piece,
        board: board
    };
}

function find_board(im, piece) {
    var board_x = 0;
    var board_y = 0;
    im1 = "/sdcard/debug/0.png";
    var p = getWhileCirclePos(im1);
    if (p[0] > 0.9) {
        log("jjj" + p[1])
        return {
            x: p[1].x + 16,
            y: p[1].y + 80
        }
    } else {

        var p1 = getbroadpos(im1, piece);
       // log("hj" + p1);
       // toastLog(findContours(im1) -p1[0]  );   
        //return {
          //  x: p1[1] + 1,
          // y:  p1[0]+10
           
          //   }

        //var whitecirlep=getWhileCirclePos(im1);
        //log(whitecirlep);
        for (var i = parseInt(h / 3); i < parseInt(h * 2 / 3); i++) {
            last_pixel = im.pixel(0, i);
            if (board_x || board_y) {
                break;
            }
            var board_x_sum = 0;
            var board_x_c = 0;

            for (var j = 0; j < w; j++) {
                var pixel = im.pixel(j, i);
                // 修掉脑袋比下一个小格子还高的情况的 bug
                if (abs(j - piece.x) < piece_body_width) {
                    continue;
                }

                // 修掉圆顶的时候一条线导致的小 bug，这个颜色判断应该 OK，暂时不提出来
                if (abs(red(pixel) - red(last_pixel)) + abs(blue(pixel) - blue(last_pixel)) + abs(green(pixel) - green(last_pixel)) > 10) {
                    board_x_sum += j;
                    board_x_c += 1;
                }
            }
            if (board_x_sum) {
                board_x = board_x_sum / board_x_c;
            }
        }
        // 按实际的角度来算，找到接近下一个 board 中心的坐标
        var board_y = piece.y - abs(board_x - piece.x) * Math.sqrt(3) / 3;

        if (!(board_x && board_y)) {
            return null;
        }
        //log("board_y"+board_y);
        return {
            x: board_x,
            y: board_y
        }
    }
}

function find_piece(im) {

    im1 = "/sdcard/debug/0.png";
    var p = getBottlePos(im1);
    if (p[0] > 0.8) {
        log("bottle" + p)
        return {

            x: p[1].x + 21,
            y: p[1].y + 194
        }
    }



    //使用内置找色函数找出棋子最顶部的位置
    var piece_top = findColor(im, piece_color, {
        threshold: 3
    });
    //toast(piece_top);
    if (!piece_top) {
        return null;
    }
    var piece_start_x = -1;
    var piece_end_x = -1;
    //遍历该行找出棋子顶部中点位置
    for (var x = 0; x < w; x++) {
        var is_piece = images.detectsColor(im, piece_color, x, piece_top.y, 2);
        if (is_piece && piece_start_x < 0) {
            piece_start_x = x;
        }
        if (!is_piece && piece_start_x >= 0) {
            piece_end_x = x;
            break;
        }
    }
    //棋子顶部中点位置
    var piece_top_center_x = (piece_start_x + piece_end_x) / 2;

    var piece_x = piece_top_center_x;
    var piece_y = piece_top.y + piece_dist_from_top_to_base;
    //log("x" + piece_x)
    return {
        x: piece_x,
        y: piece_y
    }
}

function main() {
    //console.show()
    toast("请在8秒内打开游戏，并点击开始按钮");
    waitForPackage("com.tencent.mm");
    sleep(1000);
    toast(8);
    sleep(1000);

    toast(7);
    sleep(1000);
    toast(6);
    sleep(1000);
    toast(5);
    sleep(1000);
    toast(5);
    sleep(1000);
    toast(4);
    sleep(1000);
    toast(3);
    sleep(1000);
    toast(2);
    sleep(1000);
    toast(1);
    //log(currentPackage());
    while (currentPackage() == "com.tencent.mm") {
        //停止线程执行 
        //thread.interrupt();
        var im = captureScreen();
        // 获取棋子和 board 的位置
        saveim(im);
        // captureScreen("/sdcard/0.png");
        // 获取棋子和 board 的位置
        var result = find_piece_and_board(im);
        //toast(result);
        if (!result) {
            sleep(1000);
            //toast(2);
            continue;
        }
        var board = result.board;
        var piece = result.piece;
        log("find result: ", result);
        if (debug && result) {
            save_result(im, result);
        }
        var distance = Math.sqrt(Math.pow(board.x - piece.x, 2) + Math.pow(board.y - piece.y, 2));
        if (piece.x < board.x) {
            jump(distance);
        } else {
            jump(-distance);
        }
        sleep(random(2000, 3000));
        //toast(1);
        //  saveim(im);
        //threads.shutDownAll()


    }
}



function prepare() {
    //确保无障碍服务开启
    auto();

    //请求截图权限
    requestScreenCapture();
    device.keepScreenOn(1000 * 3600);
    events.on("exit", function() {
        device.cancelKeepingAwake();
    });
    if (debug) {
        files.ensureDir(debug_images_dir);
    }
    //从存储中读取系数
    var storage = storages.create("org.autojs.wxjumping");
    press_coefficient = storage.get("press_coefficient", press_coefficient);
    if (press_coefficient != null) {
        if (press_coefficient.indexOf(",") < 0) {
            press_coefficient = press_coefficient + "," + press_coefficient;
        }
    }
    //让用户输入系数
    press_coefficient = dialogs.rawInput("调整跳跃系数(可选)", press_coefficient);
    storage.put("press_coefficient", press_coefficient);
    press_coefficient_left = parseFloat(press_coefficient.split(',')[0]);
    press_coefficient_right = parseFloat(press_coefficient.split(',')[1]);
}


function saveim(im) {
    importPackage(android.graphics);
    var bmp = im.getBitmap();
    //var canvas = new Canvas(bmp);
    // var out = new java.io.FileOutputStream(files.join(debug_images_dir, new Date().getTime() + ".png"));
    var out = new java.io.FileOutputStream(files.join(debug_images_dir, "0" + ".png"));
    bmp.compress(Bitmap.CompressFormat.PNG, 100, out);
}


function save_result(im, result) {
    importPackage(android.graphics);
    var bmp = im.getBitmap();
    var canvas = new Canvas(bmp);
    var paint = new Paint();
    paint.setStyle(Paint.Style.FILL);
    paint.setColor(colors.rgb(255, 0, 0));
    drawCircle(canvas, result.piece, paint);
    paint.setColor(colors.rgb(0, 255, 0));
    drawCircle(canvas, result.board, paint);
    var out = new java.io.FileOutputStream(files.join(debug_images_dir, new Date().getTime() + ".png"));
    //var out = new java.io.FileOutputStream(files.join(debug_images_dir, "0" + ".png"));
    bmp.compress(Bitmap.CompressFormat.PNG, 100, out);
}

function drawCircle(canvas, point, paint) {
    canvas.drawCircle(point.x, point.y, 8, paint);
}