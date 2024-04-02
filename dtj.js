

[rewrite_local]
^https:\/\/admin\.dingtiku\.cn\/app\/video\/getVideoCourseDetails url script-response-body dtj.js
[mitm] 
hostname = admin.dingtiku.cn




var body = $response.body;
body = body.replace(/"allowTry":\w+/g, '"allowTry":是');

$done(body);
