console.show()
while(!click("江西电信"));
sleep(10000);
back();
sleep(2000);
while(!click("优惠活动"));
sleep(2000);
while(!click("流量加油转"));
sleep(20000);
click(370,830)
//请求截图
sleep(2000)
if(!requestScreenCapture()){
    toast("请求截图失败");
    exit();
}
//连续截图10张图片(间隔1秒)并保存到存储卡目录

    captureScreen("/sdcard/screencapture"  + ".png");
    sleep(1000);
