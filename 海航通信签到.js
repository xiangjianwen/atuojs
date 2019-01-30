auto();
//console.show()
launchApp("海航通信");
//sleep(3000);
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