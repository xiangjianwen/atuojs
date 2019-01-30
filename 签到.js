auto();
var i=0;
//console.show()
var thread = threads.start(function(){ 
//在子线程执行的定时器
 setInterval(function(){
      //log("子线程:" + threads.currentThread()); 
      click("允许一次");
      }, 1000); 
      }); 

launchApp("海航通信");
sleep(5000);
id("rl_home").findOne().click()
//
var qd=id("tv_sigin_calendar").find();
//click("13");
log(qd[0].text());
click(qd[0].text());
id("lv_show_data").findOne().children().forEach(child => {
var target = child.findOne(id("btn_sign_in"));
if(target!=null){target.click();}
});
function time(t){
    var tt=setInterval(function(){
    i++;
    if(i==t){clearInterval(tt);}
    toast(i  + "秒");
}, 1000);

    
    }
function yx(yxname)
{sleep(1000);
    var yinxin=desc(yxname).find();
    log(yinxin);
sleep(1000);
var x=yinxin[0].bounds().centerX();
var y=yinxin[0].bounds().centerY();
click(x,y);
    }
launchApp("易信");
sleep(3000);//time(3);
yx("双开易信");
//
sleep(5000);//time(5);
while(!click("发现"));
sleep(5000);//time(5);
//click("星币商城");
while(!click("签到"));
sleep(8000);
click(282,192)
sleep(8000);
click(594,264)
sleep(2000);
var f=className("android.view.View").text("打开宝箱").findOnce();
if(f==true){
    className("android.view.View").text("打开宝箱").findOnce().click();
    };

//id("auto-id-TTMkpUfF3bgUrHvX").findOne().click();
//while(!click("签到赚星币"));
//className("android.view.View").text("签到赚星币").findOne().click()
//sleep(4000);
//click(650, 310);
//while(!click("打开宝箱"));

launchApp("易信");
sleep(1000);
//setScreenMetrics(720, 1440);
//click(220, 1100);
//
yx("易信");
sleep(4000);
while(!click("发现"));
sleep(5000);
while(!click("签到"));
sleep(4000);
click(282,192)
sleep(4000);
click(594,264);
sleep(2000);
var f=className("android.view.View").text("打开宝箱").findOnce();
if(f==true){
    className("android.view.View").text("打开宝箱").findOnce().click();
    };
