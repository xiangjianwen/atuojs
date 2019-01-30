

var window = floaty.window(
     <vertical>
       <text id="m" text="长按移动" textColor="red"/>
        <button id="b" text="0" w="auto" h="auto" style="Widget.AppCompat.Button.Colored" />
        <button id="b1" text="1" w="auto" h="auto" style="Widget.AppCompat.Button.Colored" />
        <button id="b2" text="2" w="auto" h="auto" style="Widget.AppCompat.Button.Colored" />
        <button id="b3" text="3" w="auto" h="auto" style="Widget.AppCompat.Button.Colored" />
        <button id="b4" text="4" w="auto" h="auto" style="Widget.AppCompat.Button.Colored" />
      </vertical>   
    
);
var score=0;
var window1 = floaty.window(
     <vertical>
      <text id="m1" text="长按移动" textColor="red"/>
        <button id="a" text="0" w="auto" h="auto" style="Widget.AppCompat.Button.Colored" />
        <button id="a1" text="1" w="auto" h="auto" style="Widget.AppCompat.Button.Colored" />
        <button id="a2" text="2" w="auto" h="auto" style="Widget.AppCompat.Button.Colored" />
        <button id="a3" text="3" w="auto" h="auto" style="Widget.AppCompat.Button.Colored" />
        
      </vertical>   
    
);

window.b.on("click", ()=>{

    score=0;//toast(score);
});
window.b1.on("click", ()=>{
score=1;//toast(score);
});
window.b2.on("click", ()=>{
score=2;//toast(score);
});
window.b3.on("click", ()=>{
score=3;//toast(score);
});
window.b4.on("click", ()=>{
score=4;//toast(score);
});

window1.a.on("click", ()=>{

    score=score+0;
    toast(score);
    submit(score);
    
});
window1.a1.on("click", ()=>{
score=score+2;
toast(score);
submit(score);
});
window1.a2.on("click", ()=>{
score=score+4;
toast(score);
submit(score);
});
window1.a3.on("click", ()=>{
score=score+6;
toast(score);
submit(score);
});



window.m.click(()=>{
   window.setAdjustEnabled(!window.isAdjustEnabled());
   return true;
});
window1.m1.click(()=>{
   window1.setAdjustEnabled(!window1.isAdjustEnabled());
   return true;
});
window.exitOnClose();
window1.exitOnClose();

function submit(i){
var target=id("point_btn").find();
//target.click();
//if(target[2].text()=="2"){
    //toast( target[].text());
    //}
log(target[i].text());
target[i].click();
}

setInterval(()=>{}, 1000);
