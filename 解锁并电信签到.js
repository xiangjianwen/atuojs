//launchApp("Auto.js");
auto();
device.wakeUpIfNeeded()


sleep(1000);
//gesture(400,1020,400,921,60);
gesture(1000, [400, 1000], [400, 501])
//click(600,270)
sleep(1000);
gesture(3000, [580, 770], [370, 980], [137, 1200], [370, 1200], [570, 1200], [580, 979])
sleep(3000);

launchApp("电信营业厅");
sleep(15000);
id("com.ct.client:id/close").findOne().click();
sleep(1000);

id("com.ct.client:id/tab_mall").findOne().click()
sleep(3000);
click("签到有礼")
