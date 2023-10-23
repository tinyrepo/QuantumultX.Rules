/*
# By LimeAroma
# 圈x远程引用
^http:\/\/iqushangwang\.8quan\.com\/index\.php\/i\/index\/index url script-response-body https://raw.githubusercontent.com/LimeAroma/Script/main/Js/QuDa.js
*/

var body = $response.body;
var obj = JSON.parse(body);
//var headers = $response.headers;
//var id = headers['Set-Cookie'].split('|')[0];
//输出data字符串长度便于维护
//console.log(`字符串长度：${obj.data.length}`);
if(obj.data.length == 600){
	//console.log("🎯广告命中");
	obj.data = "null";
	$done({body: JSON.stringify(obj)});
}else{
	$done({});
}
