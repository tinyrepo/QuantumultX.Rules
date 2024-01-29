/*************************************

#星锤日记 https://is.gd/R5KqD4
#倒数鸭  https://is.gd/rETAhp
#星垂专注 https://is.gd/rEG9H5
#Context https://is.gd/splCnF
#Vision-个人OKR目标管理 https://t.cn/A6OxXNxK
#Structured-每日计划 https://t.cn/A6cWhz4X
#cookie记账
#倒数鸭
#HTTPBOT 2022.2.1 作者zoo
#Mypianist 2.08
#TouchRetouch 5.1.12
#Appspree https://t.cn/A6otfeAc 3.1
#Persona 1.824
#WordSwag 4.56
#AnkiPro 1.22.1
#SmartAI
#AI Chat
#‎AI Type
#TextMask
#Music Mate
#Langster https://too.st/7aW 同作者5个软件
#muse 同作者2个软件
#Funexpected
#中国法律
#白云天气
#1Blocker
#Aphrodite
#Apollo
#pandora
#widgetart
#Spark
#Pillow
#图图记账
#VSCO
#谜底时钟
#谜底黑胶
#OffScreen
#花样文字
#ScannerPro
#车票票
#HTTPBot
#Audiomack
#ServerBee
#NotBoring天气
#NotBoring习惯
#NotBoring计算器
#NotBoring计时器
#NotBoringVibes
#倒数鸭
#iptv-ultra
#happy-days
#chatai[非国区旧版V3.6]
#aptv[旧版V1.25]
#TouchRetouch
#方弗相机
#Myjumplab
#目标地图
#Paku
#AwesomeHabits
#Gear
#MoneyThings
#Anybox
#noto
#Widgetsmith
#Percento
#Planny
#loopsie
#手机硬件管家
#ImageX
#我的时间
#Fin
#星垂日记
#星垂专注
#Locket
#one4wall
#mizframa
#极简时钟
#极简日记
#治愈时钟
#photomator
#奇妙组件
#structured
#卡片馆
#ColorWidgets
#pdfviewer
#vision
#photoroom
#pure记账
#clica
#usage
#TimeFinder
#Brass
#ElementNote
#小决定
#Tangerine
#pastepal
#Airmail
#stresswatch
#IN
#LemoFM
#我的物品
#spektr
#filmnoir
#物品指南
#musicmate
#事线
#小鱼短信
#Tasks
#currency
#Pixelify
#小熊记账
#小熊轻断食
#Everlog
#达成21
#读不舍手
#crystaliq
#FaceGlow
#noverdue

**************************************

[rewrite_local]
#修改
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/Revenuecat.js
#清理
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-request-header https://raw.githubusercontent.com/Yu9191/Rewrite/main/Revenuecat.js


[mitm]
hostname = api.revenuecat.com

************************************/

const Q = {};
const Q1 = JSON.parse(typeof $response != "undefined" && $response.body || null);
if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  Q.headers = $request.headers;
} else if (Q1 && Q1.subscriber) {
  Q1.subscriber.subscriptions = Q1.subscriber.subscriptions || {};
  Q1.subscriber.entitlements = Q1.subscriber.entitlements || {};
  var headers = {};
  for (var key in $request.headers) {
  const reg = /^[a-z]+$/;
  if (key === "User-Agent" && !reg.test(key)) {
    var lowerkey = key.toLowerCase();
    $request.headers[lowerkey] = $request.headers[key];
    delete $request.headers[key];
    }
  }
  var UA = $request.headers['user-agent'];
  const app = '1';
  const UAMappings = {
    'StarDiary':{ name: 'pro', id: 'com.gsdyx.StarDiary.nonConsumable.forever'},
    'CountDuck':{ name: 'premium', id: 'Lifetime'},
    'StarFocus':{ name: 'pro', id: 'com.gsdyx.StarFocus.nonConsumable.forever'},
    'Context_iOS':{ name: 'pro', id: 'ctx_3y_sspai_preorder_angel'},
    'Vision':{ name: 'promo_3.0', id: 'vis_lifetime_3.0_promo'},
    'Structured':{ name: 'pro', id: 'today.structured.pro'},
    'Cookie':{ name: 'allaccess', id: 'app.ft.Bookkeeping.lifetime'},
    'CountDuck':{ name: 'premium', id: 'Lifetime'},
    'HTTPBot':{ name: 'Pro', id: 'httpbot_1499_1y_1w0'},
    'MyPianist':{ name: 'pro', id: 'com.collaparte.mypianist.pro.gift.twelve'},
    'TouchRetouchBasic':{ name: 'premium', id: 'tr5_yearlysubsc_30_and_20_dlrs'},//年底订阅
    'Free':{ name: 'pro', id: 'appspree_pro_lifetime'},
    'Version':{ name: 'pro', id: 'httpbot_1499_1y_1w0'},
    'wordswag':{ name: 'pro', id: 'Pro_Launch_Monthly'},
    'BlackBox':{ name: 'plus', id: 'app.filmnoir.appstore.purchases.lifetime'},
    'LongmaoApp':{ name: 'pro', id: 'douyina_forever_01'},
    'AnkiPro':{ name: 'Premium', id: 'com.ankipro.app.lifetime'},
    'AIChat':{ name: 'AI Plus', id: 'aiplus_yearly'},
    'SmartAIChat':{ name: 'Premium', id: 'sc_3999_1y'},
    'AIKeyboard':{ name: 'plus_keyboard', id: 'aiplus_keyboard_yearly'},
    'TextMask':{ name: 'pro', id: 'tm_lifetime'},
    'MusicMate':{ name: 'premium', id: 'mm_lifetime_68_premium'},
    'ImagineAI':{ name: 'pro', id: 'artistai.yearly.1'},
    'VoiceAI':{ name: 'Special Offer', id: 'voiceannualspecial'},
    'Langster':{ name: 'Premium', id: 'com.langster.universal.lifetime'},
    'Chat%E7%BB%83%E5%8F%A3%E8%AF%AD':{ name: 'Premium', id: 'com.tech.AiSpeak.All'},
    'Readle':{ name: 'Premium', id: 'com.hello.german.yearly'},
    'image_upscaler':{ name: 'pro', id: 'yearly_sub_pro'},
    'Muse':{ name: 'pro', id: 'monthly_pro_muse'},
    'Funexpected%20Math':{ name: 'plus', id: 'Plus6Months14DaysTrial'},
    'cdiary':{ name: 'Premium', id: 'pub.kiya.daymoment.lifetime'},
    'Sex%20Actions':{ name: 'Premium Plus', id: 'ru.sexactions.subscriptionPlusWeek1'},
    'Law':{ name: 'vip', id: 'LawVIPOneYear'},
    'Emoji+%20%F0%9F%98%9':{ name: 'premium', id: 'com.emoji.freemium.subscription.premium'},
    '%E8%BD%A6%E7%A5%A8%E7%A5%A8':{ name: 'vip+watch_vip', id: 'premium'},
    'LUTCamera':{ name: 'ProVersion', id: 'com.uzero.funforcam.monthlysub'},
    'totowallet':{ name: 'all', id: 'com.ziheng.totowallet.yearly'},
    'Aphrodite':{ name: 'all', id: 'premium'},
    'apollo':{ name: 'all', id: 'premium'},
    'widget_art':{ name: 'all', id: 'premium'},
    'OneBox':{ name: 'all', id: 'premium'},
    'Spark':{ name: 'premium', id: 'premium'},
    'Pillow':{ name: 'premium', id: 'premium'},
    '1Blocker':{ name: 'premium', id: 'premium'},
    'VSCO':{ name: 'membership', id: 'premium'},
    'UTC':{ name: 'Entitlement.Pro', id: 'premium'},
    '%E8%AC%8E%E5%BA%95%E9%BB%91%E8%86%A0':{ name: 'Entitlement.Pro', id: 'premium'},
    '%E8%AC%8E%E5%BA%95%E6%99%82%E9%90%98':{ name: 'Entitlement.Pro', id: 'premium'},
    'OffScreen':{ name: 'Entitlement.Pro', id: 'premium'},
    'ScannerPro':{ name: 'plus', id: 'premium', id: 'premium'},
    'WhiteCloud':{ name: 'allaccess', id: 'premium'},
    'HTTPBot':{ name: 'pro', id: 'premium'},
    'audiomack':{ name: 'Premium1', id: 'premium'},
    'server_bee':{ name: 'Pro', id: 'premium'},
    'simple-':{ name: 'patron', id: 'premium'},
    'streaks':{ name: 'patron', id: 'premium'},
    'andyworks-calculator':{ name: 'patron', id: 'premium'},
    'vibes':{ name: 'patron', id: 'premium'},
    'CountDuck':{ name: 'premium', id: 'Lifetime'},
    'IPTVUltra':{ name: 'premium', id: 'premium'},
    'Happy%3ADays':{ name: 'pro', id: 'happy_999_lifetime'},
    'ChatGPTApp':{ name: 'Advanced', id: 'premium'},
    'APTV':{ name: 'pro', id: 'premium'},
    'TouchRetouchBasic':{ name: 'premium', id: 'premium'},
    'My%20Jump%20Lab':{ name: 'lifetime', id: 'premium'},
    '%E7%9B%AE%E6%A0%87%E5%9C%B0%E5%9B%BE':{ name: 'pro', id: 'premium'},
    'Paku':{ name: 'pro', id: 'premium'},
    'Awesome%20Habits':{ name: 'premium', id: 'premium'},
    'Gear':{ name: 'pro', id: 'com.gear.app.yearly'},
    'MoneyThings':{ name: 'Premium', id: 'premium'},
    'Anybox':{ name: 'pro', id: 'premium'},
    'Fileball':{ name: 'filebox_pro', id: 'premium'},
    'Noto':{ name: 'pro', id: 'premium'},
    'Grow':{ name: 'grow.pro', id: 'grow_lifetime'},
    'WidgetSmith':{ name: 'Premium', id: 'premium'},
    'Percento':{ name: 'premium', id: 'premium'},
    'Planny':{ name: 'premium', id: 'premium'},
    'CPUMonitor':{ name: 'Pro', id: 'premium'},
    'Locket':{ name: 'Gold', id: 'premium'},
    'My%20Tim':{ name: 'Pro', id: 'premium'},
    'Photom':{ name: 'premium', id: 'pixelmator_photo_pro_subscription_v1_pro_offer'},
    'mizframa':{ name: 'premium', id: 'mf_20_lifetime2'},
    'ImageX':{ name: 'imagex.pro.ios', id: 'imagex.pro.ios.lifetime'},
    'Fin':{ name: 'premium', id: 'com.circles.fin.premium.yearly'},
    'Ledger':{ name: 'Pro', id: 'com.lifetime.pro'},
    'One4Wall':{ name: 'lifetime', id: 'lifetime_key'},
    'OneWidget':{ name: 'allaccess', id: 'premium'},
    'CardPhoto':{ name: 'premium', id: 'premium'},
    'PDF%20Viewer':{ name: 'sub.pro', id: 'premium'},
    'PhotoRoom':{ name: 'business', id: 'premium'},
    'Decision':{ name: 'com.nixwang.decision.entitlements.pro', id: 'premium'},
    'Tangerine':{ name: 'Premium', id: 'premium'},
    'PastePal':{ name: 'premium', id: 'premium'},
    'Airmail':{ name: 'Airmail Premium', id: 'premium'},
    'Stress':{ name: 'StressWatch Pro', id: 'premium'},
    'PinPaper':{ name: 'allaccess', id: 'premium'},
    'Echo':{ name: 'PLUS', id: 'premium'},
    'MyThings':{ name: 'pro','xyz.jiaolong.MyThings.pro.infinity'},
    'Overdue':{ name: 'Pro', id: 'premium'},
    'BlackBox':{ name: 'plus','app.filmnoir.appstore.purchases.lifetime'},
    'Spektr':{ name: 'premium', id: 'premium'},
    'MusicMate':{ name: 'premium','mm_lifetime_68_premium'},
    '%E4%BA%8B%E7%BA%BF':{ name: 'pro','xyz.jiaolong.eventline.pro.lifetime'},
    'Tasks':{ name: 'Pro', id: 'premium'},
    'Currency':{ name: 'plus', id: 'premium'},
    'money_manager':{ name: 'premium', id: 'premium'},
    'fastdiet':{ name: 'premium', id: 'premium'},
    'Blurer':{ name: 'paid_access', id: 'premium'},
    'Everlog':{ name: 'premium', id: 'premium'},
    'reader':{ name: 'vip2','com.valo.reader.vip2.year'},
    'GetFace':{ name: 'Pro access', id: 'premium'},
    'Focused%20Work':{ name: 'Pro', id: 'premium'},
    'G%20E%20I%20S%20T':{ name: 'memorado_premium', id: 'premium'},
    'Email%20Me':{ name: 'premium', id: 'premium'},
    'Alpenglow':{ name: 'newPro', id: 'premium'},
    'Darkroom':{ name: 'co.bergen.Darkroom.entitlement.allToolsAndFilters', id: 'premium'},
    };

  const data = {
    "expires_date": "2099-12-31T12:00:00Z",
    "original_purchase_date": "2023-09-01T11:00:00Z",
    "purchase_date": "2023-09-01T11:00:00Z",
    "ownership_type": "PURCHASED",
    "store": "app_store"
  };
  for (const i in UAMappings) {
    if (new RegExp(`^${i}`, 'i').test(UA)) {
      const { name, id } = UAMappings[i];
      Q1.subscriber.subscriptions = {};
      Q1.subscriber.subscriptions[id] = data;
      Q1.subscriber.entitlements[name] = JSON.parse(JSON.stringify(data));
      Q1.subscriber.entitlements[name].product_identifier = id;
      break;
    }
  }
  Q.body = JSON.stringify(Q1);
}
$done(Q);
