

[rewrite_local]
^https:\/\/poster\.leminet\.cn\/v01\/profile url script-response-body hbsj.js
[mitm] 
hostname = poster.leminet.cn


var body = $response.body;
body = body.replace(/"vip":\w+/g, '"vip":true');
body = body.replace(/"vip_expire":\d+/g, '"vip_expire":32480034939');
$done(body);
