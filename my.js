console.show()
log(id("etPwd").find());
if(id("etPwd").exists()){
  log(1);
}
var x= className("android.widget.EditText").find();
x[1].setText("777888");
var z=className("android.widget.RelativeLayout").find();
log(z.length);
var c=className("android.widget.RelativeLayout").depth(6).find();
log(c.bounds());

 