 launchApp("电信营业厅");
 sleep(20000);
 id("btnCardLogin").findOne().click();
 sleep(2000);

//console.show()
var x= className("android.widget.EditText").find();
x[1].setText("777888");
sleep(1000);
 swipe(174,1120,557,1121,1000);
 sleep(3000);
 id("com.ct.client:id/close").click();
 sleep(1000);
var wo= className("android.widget.TextView").find();
//log(wo);
var qdid;
//for(var i=0;i<wo.size();i++)
//{
    //var t=wo[i].text();
// log(t);
  //if(t=="我"){  
 // log(wo[i].parent());
 // qd(wo[i].parent());
  //}
 
  //}
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