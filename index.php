<!-- <?php
/**
 * Created by PhpStorm.
 * User: 王振雷（Tony）
 * Date: 2015/12/4
 * Time: 14:10
 */
header("Content-type: text/html; charset=utf-8");
require_once "jssdk.php";
$jssdk = new JSSDK("wx2ed629d45a5214f7", "cb4f759ee482086ca289a76a8a6f21c3");
$signPackage = $jssdk->GetSignPackage();
?> -->
<!DOCTYPE html>
<html ng-app="app" ng-controller="recording" style="background-color: #000;">
<head lang="en">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0,user-scalable=no">
    <meta charset="UTF-8">

    <!--CSS_OWN-->
    <link href="stylesheets/index.css" rel="stylesheet">

    <!--JAVASCRIPT_ANGULAR-->
    <script src="vendor/angular.min.js"></script>
    <script src="vendor/angular-route.min.js"></script>
    <script src="vendor/angular-animate.min.js"></script>
    <script src="vendor/angular-touch.min.js"></script>

    <title>爱图微官网</title >
</head>
<body style="background-color: #000;">
<!--...................Content...................-->


<div id="container" class="{{ pageClass }}" ng-view  ng-class="{true:'hidden',false:'auto'}[pageType]">
    
</div>
<a id="clickOutSide"></a>

<!--...................Content...................-->
<!--JAVASCRIPT_flat-ui.....-->
<script src="vendor/zepto.min.js"></script>
<script src="vendor/jquery.min.js"></script>
<script src="vendor/model.js"></script>
<!-- <script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script>

    wx.config({
        debug: false,
        appId: '<?php echo $signPackage["appId"];?>',
        timestamp: '<?php echo $signPackage["timestamp"];?>',
        nonceStr: '<?php echo $signPackage["nonceStr"];?>',
        signature: '<?php echo $signPackage["signature"];?>',
        jsApiList: [
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'onMenuShareQQ',
            'onMenuShareWeibo'
        ]
    }); 
    wx.ready(function () {
        wx.onMenuShareAppMessage({
            title: '爱图微官网',
            desc: '爱图，品牌创意服务提供商',
            link:"http://a2designing.cn/aitu/weikan/" ,
            imgUrl: 'http://a2designing.cn/logo/a2.png',
            type: 'link',
            dataUrl: '' // 如果type是music或video，则要提供数据链接，默认为空
        });
        wx.onMenuShareTimeline({
            title: '爱图微官网', // 分享标题
            desc: '爱图，品牌创意服务提供商',
            link: 'http://a2designing.cn/aitu/weikan/', // 分享链接
            imgUrl: 'http://a2designing.cn/logo/a2.png', // 分享图标
            success: function () {
                // 用户确认分享后执行的回调函数
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        });
    });

</script> -->
<!--...................OwnScript.......(这个可以压缩，混淆，合并为1个文件)............-->

<script src="script/app.js"></script>


<!--...................百度统计...................-->
<!-- <script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?3d31e65fa67da5034986cd9de86ef80f";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script> -->

</body>
</html>



