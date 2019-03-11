var f = "/storage/emulated/0/atuojs/教育/";
var d = "/storage/emulated/0/atuojs/t/";
log(files.isDir(f));
for (var i = 1; i < 300; i++) {
    if (i < 10) {
        files.rename( i + ".jpg", "00"+i  + ".jpg")
    } else if (i >= 10&&i<100) {
        files.rename(i + ".jpg", "0"+i+ ".jpg")
    } else {
        //files.rename("新文档 2019-03-07 22.26.07_" + i + ".jpg", (42 + i * 2 - 2) + ".jpg")
    }


}