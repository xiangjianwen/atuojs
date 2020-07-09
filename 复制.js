if(!requestScreenCapture()){
    toast("请求截图失败");
    exit();
}
//连续截图10张图片(间隔1秒)并保存到存储卡目录

    captureScreen("/sdcard/screencapture"  + ".png");
    sleep(1000);
