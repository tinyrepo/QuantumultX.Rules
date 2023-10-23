// 作者：LimeAroma
/*
//Loon订阅脚本
[Script]
http-response https?:\/\/j1\.pupuapi\.com\/client\/marketing\/banner\/v7\?position_types=2(%[A-Z0-9]+)+&store_id script-path=https://raw.githubusercontent.com/LimeAroma/Script/main/Js/PupuSplashAds.js, requires-body=true, tag=朴朴超市开屏广告

[MITM]
hostname=j1.pupuapi.com

//圈x远程引用
https?:\/\/j1\.pupuapi\.com\/client\/marketing\/banner\/v7\?position_types=2(%[A-Z0-9]+)+&store_id url script-response-body https://raw.githubusercontent.com/LimeAroma/Script/Js/PupuSplashAds.js

hostname=j1.pupuapi.com
*/

let obj=JSON.parse($response.body);
obj.data = obj.data.filter(item => !(item.position_type === 50));
$done({body: JSON.stringify(obj)});
