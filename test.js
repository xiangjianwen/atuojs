var name = jsencrypt("e10adc3949ba59abbe56e057f20f883e", "徐汉俊");
var cardnumber = jsencrypt("e10adc3949ba59abbe56e057f20f883e", "112103229"); 
if (name != "" && cardnumber != "") {
    $.post("http://www.srjyyun.com/Areas/gradesProject/Detils.ashx", {
        "jsonType": "Index",
        "card": name,
        "cardnumber": cardnumber
    }, function(mag) {
        var info = eval("(" + mag + ")");
        
    }); 
} else {
    alert("姓名和准考证号不得为空");
}