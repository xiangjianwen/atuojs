console.show();
let date= new Date(); 
var token="oM1KJjpCT5eOkecG8hNBTGcCl08w"
var ClassId="250ae63c-2c81-475c-ac7e-904ae6fea240"
//oM1KJjuCwmNomxSJ2T322bmb-oI4
//85768912-a148-4c5a-906f-c0670aa7d7eb
date.setMinutes(date.getMinutes() - date.getTimezoneOffset()); 
// toJSON 的时区补偿 
var date1=date.toJSON().substr(0, 10).replace(/[-T]/g, '-'); 
//2017021822
var url="http://jkdk.jx.edu.cn/Api/Statistics/GetClassClockUserList?ClassId="+ClassId+"&clockInDate="+date1+"&pageIndex=1&pageSize=150";
var r = http.get(url, {
    headers: {
        'Accept-Language': 'zh-cn,zh;q=0.5',
        'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11',
        'token':token
    }
});
var nameJson=r.body.string();
//log(nameJson)

var reg = /"F_Name":"(.*?)"[\s\S]*?"F_HealthStatus":./g
//var d=/"F_Name":"(.*?)"/g
//var d2=/"F_HealthStatus":./g
//var n = nameJson.match(d)
var n=nameJson.match(reg)
//nameJson.replace(reg, '$1');
var reg2=/"F_Name":.?"(.*?)"[\s\S]*?"F_HealthStatus":(.)/g
var s="",l=0;
for(var i=0;i<n.length;i++)
{
    
n[i].match(reg2)

if(RegExp.$2=="0"){l++;s=s+RegExp.$1+","}
}
console.log("今日未填报有"+l+"人:"+s)