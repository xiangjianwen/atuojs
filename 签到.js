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

    function yx(yxname)
{sleep(1000);
    var yinxin=desc(yxname).find();
    log(yinxin);
sleep(1000);
var x=yinxin[0].bounds().centerX();
var y=yinxin[0].bounds().centerY();
click(x,y);
    }
 function yxqd(){
     
var qd=className("android.view.View").text("签到").findOne()
log(qd);
if (qd!=null){
var x1=qd.bounds().centerX();
var y1=qd.bounds().centerY();
click(x1,y1);
}
}
launchApp("易信");
sleep(3000);
yx("双开易信");
//
sleep(5000);
while(!click("发现"));
sleep(5000);
//click("星币商城");
while(!click("签到"));
sleep(6000);
yxqd();
sleep(4000);
click(594,264)
sleep(5000);
var f=className("android.view.View").text("打开宝箱").findOnce();
if(f!=true&&f!=null){
    className("android.view.View").text("打开宝箱").findOnce().click();
    };

launchApp("易信");
sleep(3000);
yx("易信");
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
 launchApp("电信营业厅");
 sleep(15000);
var login = id("btnCardLogin").findOne(2000);
 if(login!=null)
 {
     login.click();
 sleep(2000);

//console.show()
var x= className("android.widget.EditText").find();
x[1].setText("777888");
sleep(1000);
 swipe(174,1120,557,1121,1000);
 }
 sleep(3000);
 id("com.ct.client:id/close").click();
 sleep(1000);
var wo= className("android.widget.TextView").find();
//log(wo);
var qdid;

  id("com.ct.client:id/tab_mall").findOne().click()
  sleep(3000);
var c1=id("com.ct.client:id/ItemText").findOne();
zgdxqd(c1);
  //sleep(5000);
  
  
  function zgdxqd(one){
     

if (one!=null){
var x1=one.bounds().centerX();
var y1=one.bounds().centerY();
click(x1,y1);
}
}