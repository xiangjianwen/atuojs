//console.show()
var s = "";
var target = className("android.view.View").depth(21).find();
for (var i = 0; i < target.length; i++) {
    if (target[i].text().length > 3) {
        s = s + target[i].text() + "\n";
    }
}
log(s)

function Chinese(str) { //最长取连续中文
    var str_continuity = "",
        tempstr = "";
    for (var i = 0; i < str.length; i++) {
        var reg = /[\u4E00-\u9FA5]/;
        var s = reg.test(str[i]);
        if (s == true) {
            tempstr = tempstr + str[i];
        } else {
            if (str_continuity.length < tempstr.length) {
                str_continuity = tempstr;
            }
            tempstr = "";
        }
    }

    console.log(str_continuity);

    return str_continuity;

}


//题库
tk();

function tk() {
    var window = floaty.window(
        <vertical>
            <text text="移动" id="mv" textColor="black" textSize="16sp" />
            <input id="tm" text="题目" textSize="16sp" lines="2"/>
            <input id="tk" text="题库" textSize="16sp" lines="2"/>
            <input id="da" text="答案" textSize="16sp" lines="2"/>
            <button id="ok" text="下一题"/>
        </vertical>
    );

    window.exitOnClose();
    window.ok.on("click", () => {
       // toast("傻瓜! " + window.input.text());
        window.disableFocus();
    });

    window.mv.on("long_click", () => {
        window.setAdjustEnabled(!window.isAdjustEnabled());
    });

    setInterval(() => {}, 1000);
}
//答案
function da(tm,tk) {

}