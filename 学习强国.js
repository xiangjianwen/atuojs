ReadNewsjx()

function ReadNewsjx() {

    for (l = 0; l < 10; l++) {

        sleep(5000);
        var title = className("android.widget.TextView").text("江西").findOne();
        log(title);
        myclick(title)
        sleep(3000);
        var f = className("android.widget.TextView").text("江西学习平台").find();

        myclick(f[1])
        //f[1].click();
        sleep(3000);
        log(l);
        for (var i = 0; i < 4; i++) {
            swipe(600, 610, 200, 210, 1000)
            if (l < 4) {
                sleep(2000);
            } else {
                sleep(50000);
            }
        }
        var isjx = className("android.widget.TextView").text("江西").findOne(2000);

        if (isjx == null) {
            back();
        }
    }
}

function myclick(c) {
    var x = c.bounds().centerX();
    var y = c.bounds().centerY();
    click(x, y);
}