//launchApp("Auto.js");
//auto();
function yxqd(){
     
var qd=className("android.view.View").text("签到").findOne()
log(qd);
if (qd!=null){
var x1=qd.bounds().centerX();
var y1=qd.bounds().centerY();
click(x1,y1);
}
}
sleep(1000);
//gesture(400,1020,400,921,60);
gesture(1000, [400, 1000], [400, 501])
//click(600,270)
sleep(3000);
gesture(3000, [580, 770], [370, 980], [137, 1200], [370, 1200], [570, 1200], [580, 979])
sleep(3000);
launchApp("易信");

sleep(4000);
while(!click("发现"));
sleep(5000);
while(!click("签到"));
sleep(6000);
yxqd();
sleep(4000);
click(594,264);
sleep(5000);
var f=className("android.view.View").text("打开宝箱").findOnce();
if(f!=true&&f!=null){
    className("android.view.View").text("打开宝箱").findOnce().click();
    };


