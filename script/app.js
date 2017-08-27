/**
 * Created by A2-20PC on 2016/4/6.
 */
/**
 * Created by A2-20PC on 2016/4/6.
 */
var app_control = angular.module("app_control",[]);

app_control.controller("recording",["$scope","$location", function ($scope,$location) {
    $scope.pageType = false;
    function aa(event) {
        event.preventDefault();
    }
    $scope.touchRemove = function () {
        document.addEventListener('touchmove',aa , false);
    };
    $scope.touchBack = function () {
        document.removeEventListener("touchmove", aa)
    };
    $scope.dsccd = 11;
    $scope.classP = {
        p1:"p1",
        p2:"p2",
        p3:"p3",
        p4:"p4",
        p5:"p5",
        p6:"p6",
        p7:"p7",
        p8:"p8",
        p9:"p9",
        p10:"p10",
        p11:"p11",
        p12:"p12",
        p13:"p13",
        p14:"p14",
        p15:"p15",
        p16:"p16",
        p17:"p17",
        p18:"p18",
        p19:"p19",
        p20:"p20",
        p21:"p21",
        p22:"p22",
        p23:"p23",
        p24:"p24",
        p25:"p25",
        p26:"p26",
        p27:"p27",
        p28:"p28",
        p29:"p29",
        p30:"p30"
    };
    $scope.changeLocation = function (url) {
        var jj = /http/.test(url);
        if(jj){
            $("#clickOutSide").attr("href",url);
            document.getElementById('clickOutSide').click();
        }
        else{$location.path(url);}
    };
    $scope.pagaeRember = {
        prev:null,  //上一个记录URL地址
        noew:null,  //当前URL地址
        next:null   //预计的
    };

    $scope.imgs = {
        indexlist1:{
            src1:{src:"img/indexlist1/v1.jpg"},
            src2:{src:"img/indexlist1/v2.jpg"},
            src3:{src:"img/indexlist1/v3.jpg"},
            src4:{src:"img/indexlist1/v4.jpg"},
            src5:{src:"img/indexlist1/v5.jpg"},
            src6:{src:"img/indexlist1/v6.jpg"},
            src7:{src:"img/indexlist1/v7.jpg"},
            src8:{src:"img/indexlist1/v8.jpg"},
            src9:{src:"img/indexlist1/v9.jpg"},
            src10:{src:"img/indexlist1/v10.jpg"}
        },
        indexlist2:{
            bg:{},
            bottom:{},
            line:{},
            ball:{}
        },
        indexlist3:{},
        indexlist4:{},
        srcs1:{ //平面设计
            list1:{bg:"img/p11/p11_pm1.png",logo:"img/p11/pm_logo1.png",href:"http://mp.weixin.qq.com/s?__biz=MzA3MDAwODg4Mw==&mid=204844128&idx=1&sn=3f3e64c4a0896787446071a7316ae9e7&scene=19#wechat_redirect", class:"pg1"},
            list2:{bg:"img/p11/p11_pm2.png",logo:"img/p11/pm_logo2.png",href:"http://mp.weixin.qq.com/s?__biz=MzA3MDAwODg4Mw==&mid=205137811&idx=1&sn=1cad1157d4927eff64c07cd4da44ecca&scene=19#wechat_redirect", class:"pg2"},
            list3:{bg:"img/p11/p11_pm3.png",logo:"img/p11/pm_logo3.png",href:"http://mp.weixin.qq.com/s?__biz=MzA3MDAwODg4Mw==&mid=203384285&idx=1&sn=92f5134e4d22c9f05a7c640eed096a4e&scene=19#wechat_redirect", class:"pg3"},
            list4:{bg:"img/p11/p11_pm4.png",logo:"img/p11/pm_logo4.png",href:"http://mp.weixin.qq.com/s?__biz=MzA3MDAwODg4Mw==&mid=502219962&idx=1&sn=f099d0c3cf17d208f3b4bcca9f767b5c&scene=19#wechat_redirect", class:"pg4"},
            list5:{bg:"img/p11/p11_pm5.png",logo:"img/p11/pm_logo5.png",href:"http://mp.weixin.qq.com/s?__biz=MzA3MDAwODg4Mw==&mid=204235171&idx=1&sn=980eeaf43a2a3ea7919eb8279f17c7b1&scene=19#wechat_redirect", class:"pg5"},
            list6:{bg:"img/p11/p11_pm6.png",logo:"img/p11/pm_logo6.png",href:"http://mp.weixin.qq.com/s?__biz=MzA3MDAwODg4Mw==&mid=502219957&idx=1&sn=baa173dabbc57b9d8b40d734c5ee85b1&scene=19#wechat_redirect", class:"pg6"},
            list7:{bg:"img/p11/p11_pm7.png",logo:"img/p11/pm_logo7.png",href:"http://mp.weixin.qq.com/s?__biz=MzA3MDAwODg4Mw==&mid=205429858&idx=1&sn=224afd46a0bb01203dcd3956e7862ad0&scene=19#wechat_redirect", class:"pg7"}
        },
        srcs2:{ //活动营销
            list1:{bg:"img/p11/p11_hd1.png",logo:"img/p11/logo09.png",href:"http://mp.weixin.qq.com/s?__biz=MzA3MDAwODg4Mw==&mid=201329503&idx=1&sn=0714d3a9bafb352021c233cee4c8668f&scene=19#wechat_redirect", class:"pg1"},
            list2:{bg:"img/p11/p11_hd2.png",logo:"img/p11/logo08.png",href:"http://mp.weixin.qq.com/s?__biz=MzA3MDAwODg4Mw==&mid=401574329&idx=1&sn=00c6652bb870bd962e7197bd75be7f2c&scene=19#wechat_redirect", class:"pg2"},
            list3:{bg:"img/p11/p11_hd3.png",logo:"img/p11/pm_logo1.png",href:"http://mp.weixin.qq.com/s?__biz=MzA3MDAwODg4Mw==&mid=202767882&idx=1&sn=3de01839d32fec0951fd09e6019a0a69&scene=19#wechat_redirect", class:"pg3"}
        },
        srcs3:{ //数字互动
            list18:{bg:"img/p11/p11_h5_18.png",logo:"img/p11/h5_logo3.png",href:"http://a2designing.cn/A2/dw/accredit.html", class:"pg1"},
            list17:{bg:"img/p11/p11_h5_17.png",logo:"img/p11/h5_logo3.png",href:"http://mp.weixin.qq.com/s/VDYZ_H2Z6XknFkdPe7PAvw", class:"pg2"},
            list16:{bg:"img/p11/p11_h5_16.png",logo:"img/p11/h5_logo3.png",href:"http://a2designing.cn/aKevintest/2017newYear", class:"pg3"},
            list15:{bg:"img/p11/p11_h5_15.png",logo:"img/p11/h5_logo3.png",href:"http://a2designing.cn/dsm/2016greeting/congratulation", class:"pg4"},
            list14:{bg:"img/p11/p11_h5_14.png",logo:"img/p11/h5_logo3.png",href:"http://a2designing.cn/Eastman/720/", class:"pg5"},
            list13:{bg:"img/p11/p11_h5_13.png",logo:"img/p11/h5_logo3.png",href:"http://www.a2designing.cn/danone/dngame", class:"pg6"},
            list12:{bg:"img/p11/p11_h5_12.png",logo:"img/p11/h5_logo3.png",href:"http://www.a2designing.cn/dow/shipgame", class:"pg7"},
            list11:{bg:"img/p11/p11_h5_11.png",logo:"img/p11/h5_logo3.png",href:"http://a2designing.cn/keshigame", class:"pg8"},
            list1:{bg:"img/p11/p11_h5_8.png",logo:"img/p11/h5_logo3.png",href:"http://www.a2designing.cn/dow/ChemistryLabNew", class:"pg6"},
            list2:{bg:"img/p11/p11_h5_6.png",logo:"img/p11/h5_logo1.png",href:"http://www.a2designing.cn/dsm/2015Report", class:"pg7"},
            list3:{bg:"img/p11/p11_h5_7.png",logo:"img/p11/h5_logo2.png",href:"http://www.a2designing.cn/zhonghua/introduction", class:"pg8"},
            list4:{bg:"img/p11/p11_h5_9.png",logo:"img/p11/h5_logo4.png",href:"http://a2designing.com/xingyun/index.html", class:"pg4"},
            list5:{bg:"img/p11/p11_h5_10.png",logo:"img/p11/h5_logo5.png",href:"http://a2designing.cn/dow/newDow/", class:"pg5"},
            list6:{bg:"img/p11/p11_h5_1.png",logo:"img/p11/h5_logo1.png",href:"http://a2designing.com/model/index.html", class:"pg6"},
            // list7:{bg:"img/p11/p11_h5_2.png",logo:"img/p11/h5_logo2.png",href:"http://www.a2designing.cn/yashilan/heka/index.html", class:"pg7"},
            list8:{bg:"img/p11/p11_h5_3.png",logo:"img/p11/h5_logo3.png",href:"http://www.a2designing.com/z/index.html#page2", class:"pg8"},
            list9:{bg:"img/p11/p11_h5_4.png",logo:"img/p11/h5_logo4.png",href:"http://www.a2designing.cn/zhonghua/zhanlan20160303/", class:"pg9"},
            list10:{bg:"img/p11/p11_h5_5.png",logo:"img/p11/h5_logo5.png",href:"http://www.a2designing.cn/dow/dowlist/index.html", class:"pg10"}
        },
        srcs4:{ //空间展览
            list15:{bg:"img/p11/p11_3d15.png",logo:"img/p11/3d_logo1.png",href:"http://mp.weixin.qq.com/s/UVaoxG0qWNjC9xX0rtiAgA", class:"pg1"},
            list14:{bg:"img/p11/p11_3d14.png",logo:"img/p11/3d_logo1.png",href:"http://mp.weixin.qq.com/s/WPL2CBCo9qNw7rtbn9YDLQ", class:"pg2"},
            list13:{bg:"img/p11/p11_3d13.png",logo:"img/p11/3d_logo1.png",href:"http://mp.weixin.qq.com/s/zA51Gg2xADEI6UzGEkguog", class:"pg3"},
            list12:{bg:"img/p11/p11_3d12.png",logo:"img/p11/3d_logo1.png",href:"http://mp.weixin.qq.com/s/3BObkdbJBlzSVxWWdwXG_g", class:"pg4"},
            list11:{bg:"img/p11/p11_3d11.png",logo:"img/p11/3d_logo1.png",href:"http://mp.weixin.qq.com/s/Zs0Vq7obkbdiHQASTGgJaA", class:"pg5"},
            list10:{bg:"img/p11/p11_3d10.png",logo:"img/p11/3d_logo1.png",href:"http://mp.weixin.qq.com/s/fCDHyJgcxLMNO6j5lbD1mg", class:"pg6"},
            list9:{bg:"img/p11/p11_3d9.png",logo:"img/p11/3d_logo1.png",href:"http://mp.weixin.qq.com/s/yHb_lu4zCFWgf4go0gCqew", class:"pg7"},
            list1:{bg:"img/p11/p11_3d1.png",logo:"img/p11/3d_logo1.png",href:"http://mp.weixin.qq.com/s?__biz=MzA3MDAwODg4Mw==&mid=400483308&idx=1&sn=19d4954c00ee379f2f21372d1b2f1362&scene=19#wechat_redirect", class:"pg3"},
            list2:{bg:"img/p11/p11_3d2.png",logo:"img/p11/3d_logo2.png",href:"http://mp.weixin.qq.com/s?__biz=MzA3MDAwODg4Mw==&mid=208533093&idx=1&sn=8f27a9015961aebaba9ad50d761f48d5&scene=19#wechat_redirect", class:"pg4"},
            list3:{bg:"img/p11/p11_3d3.png",logo:"img/p11/3d_logo3.png",href:"http://mp.weixin.qq.com/s?__biz=MzA3MDAwODg4Mw==&mid=202287225&idx=1&sn=fc20711e64d60114de9448d619198b4b&scene=19#wechat_redirect", class:"pg5"},
            list4:{bg:"img/p11/p11_3d4.png",logo:"img/p11/3d_logo5.png",href:"http://mp.weixin.qq.com/s?__biz=MzA3MDAwODg4Mw==&mid=401686179&idx=1&sn=11e02cb06b1d66e11be473ffdb521a01&scene=19#wechat_redirect", class:"pg6"},
            list5:{bg:"img/p11/p11_3d5.png",logo:"img/p11/logo08.png",href:"http://mp.weixin.qq.com/s?__biz=MzA3MDAwODg4Mw==&mid=502219658&idx=1&sn=bec0ddbda078c9b6943af9e4cca99353&scene=19#wechat_redirect", class:"pg7"},
            list6:{bg:"img/p11/p11_3d6.png",logo:"img/p11/3d_logo7.png",href:"http://mp.weixin.qq.com/s?__biz=MzA3MDAwODg4Mw==&mid=207633321&idx=1&sn=9029cf372e2288641afa331a096dc1d1&scene=19#wechat_redirect", class:"pg8"},
            list7:{bg:"img/p11/p11_3d7.png",logo:"img/p11/3d_logo8.png",href:"http://mp.weixin.qq.com/s?__biz=MzA3MDAwODg4Mw==&mid=204029395&idx=1&sn=654b2ae9f1cf9d53c8153a5ac9836f23&scene=19#wechat_redirect", class:"pg7"},
            list8:{bg:"img/p11/p11_3d8.png",logo:"img/p11/3d_logo9.png",href:"http://mp.weixin.qq.com/s?__biz=MzA3MDAwODg4Mw==&mid=203547662&idx=1&sn=3447f8c624f489974f68d2c9c536d66b&scene=19#wechat_redirect", class:"pg8"}
        }
    };

    $scope.page1_Content=  {
        content1:{
            p1:"img/design/Graphic_01.jpg",
            p2:"img/design/Graphic_02.jpg",
            p3:"img/design/Graphic_03.jpg",
            p4:"img/design/Graphic_04.jpg"
        },
        content2:{
            p1:"img/",
            p2:"img/",
            p3:"img/"
        },
        content3:{
            p1:"img/",
            p2:"img/",
            p3:"img/",
            p4:"img/",
            p5:"img/"
        },
        content4:{
            p1:"img/3d/c1.jpg",
            p2:"img/3d/c2.jpg",
            p3:"img/3d/c3.jpg"
        }
    };

    $scope.pageNumber = {
        indexlist1:Object.getOwnPropertyNames($scope.imgs.indexlist1).length
    };

}]);


app_control.controller("Imgs",["$scope", function ($scope) {

}]);


var directives_m = angular.module("directives_m",[]);


directives_m.directive("goT", function () {
    return {
        link: function (scope,ele,attrs,regradCtrl) {
            var tar = ele;
            dd =0;  //有漏洞，是否可以用scope代替
            tar.on("swipeLeft", function () {
                var parent = this.parentNode,
                    pagesS=scope.pageNumber.indexlist1,
                    animationValue;
                if(dd<pagesS-1){
                    ++dd;
                    animationValue = dd*-100+"%";
                    $(parent).animate({left:animationValue},"slow");

                    if(dd==pagesS-1){
                        $('#right1').hide();
                    }else{
                        $('#right1').show();
                        $('#left1').show();

                    }
                }else{

                }
            });
            tar.on("swipeRight", function () {
                var parent = this.parentNode,
                    animationValue;
                if(dd>=1){
                    --dd;
                    animationValue = dd*-100+"%";
                    $(parent).animate({left:animationValue},"slow");
                    if(dd==0){
                        $('#left1').hide();
                    }else{
                        $('#right1').show();
                        $('#left1').show();

                    }
                }

            });
        }
    };
});


var app = angular.module("app",["directives_m","app_control","ngRoute","ngTouch","ngAnimate"]);

app.config(["$routeProvider",function ($routeProvider) {
    $routeProvider.
    when("/",{templateUrl:"views/index.html",controller:function($scope){$scope.pageClass = $scope.classP.p1;$("body").css("background","white");$("title").html("爱图微官网");$scope.pageType=true;$scope.touchRemove()}}).
    when("/catalog1",{templateUrl:"views/indexlist1.html",controller:function($scope){
        $scope.touchRemove();$scope.pageClass = $scope.classP.p2;$("body").css("background","white");$("title").html("爱图微官网");
        $scope.pageType=true;
        $scope.imgs.srcs=$scope.imgs.indexlist1;
        console.log($scope.imgs.srcs)
        $scope.pageNumbers = {"width":$scope.pageNumber.indexlist1*100+"%"};
        $scope.pageNumbers.img = {"float":"left","width": 100/$scope.pageNumber.indexlist1+"%"}
    }}).
    when("/catalog2",{templateUrl:"views/indexlist2.html",controller:function($scope){$scope.touchRemove();$scope.pageClass = $scope.classP.p3;$("body").css("background","white");$("title").html("爱图微官网");$scope.pageType=true;}}).
    when("/catalog3",{templateUrl:"views/indexlist3.html",controller:function($scope){$scope.touchRemove();$scope.pageClass = $scope.classP.p4;$("body").css("background","white");$("title").html("爱图微官网");$scope.pageType=true;}}).
    when("/pageList1",{templateUrl:"views/page1.html",controller:function($scope){$scope.touchBack();$scope.pageClass = $scope.classP.p5;$("body").css("background","#231815");$("title").html("爱图微官网");$scope.imgs.srcs=$scope.imgs.srcs1;}}).
    when("/pageList2",{templateUrl:"views/page1.html",controller:function($scope){$scope.touchBack();$scope.pageClass = $scope.classP.p6;$("body").css("background","#231815");$("title").html("爱图微官网");$scope.imgs.srcs=$scope.imgs.srcs2;}}).
    when("/pageList3",{templateUrl:"views/page1.html",controller:function($scope){$scope.touchBack();$scope.pageClass = $scope.classP.p7;$("body").css("background","#231815");$("title").html("爱图微官网");$scope.imgs.srcs=$scope.imgs.srcs3;}}).
    when("/pageList4",{templateUrl:"views/page1.html",controller:function($scope){$scope.touchBack();$scope.pageClass = $scope.classP.p8;$("body").css("background","#231815");$("title").html("爱图微官网");$scope.imgs.srcs=$scope.imgs.srcs4;}}).
    when("/otherlist1",{templateUrl:"views/page2.html",controller:function($scope){$scope.touchBack();$scope.pageClass = $scope.classP.p9;$("body").css("background","-webkit-linear-gradient(-90deg, #006383 0%, #2dbad4 40%, #e5eece 85%, #bed582 100%);");$("title").html("爱图微官网");}}).
    when("/otherlist2",{templateUrl:"views/page3.html",controller:function($scope){$scope.touchBack();$scope.pageClass = $scope.classP.p10;$("body").css("background","-webkit-linear-gradient(-90deg, #006383 0%, #2dbad4 40%, #e5eece 85%, #bed582 100%);");$("title").html("爱图微官网");}}).
    when("/otherlist3",{templateUrl:"views/page4.html",controller:function($scope){$scope.touchRemove();$scope.pageType=true;$scope.pageClass = $scope.classP.p11;$("body").css("background","-webkit-linear-gradient(-90deg, #006383 0%, #2dbad4 40%, #e5eece 85%, #bed582 100%);");$("title").html("爱图微官网");}}).
    when("/otherlist4",{templateUrl:"views/page5.html",controller:function($scope){$scope.touchBack();$scope.pageClass = $scope.classP.p12;$("body").css("background","-webkit-linear-gradient(-90deg, #006383 0%, #2dbad4 40%, #e5eece 85%, #bed582 100%);");$("title").html("爱图微官网");}}).
    when("/otherlist5",{templateUrl:"views/page6.html",controller:function($scope){$scope.touchBack();$scope.pageClass = $scope.classP.p13;$("body").css("background","-webkit-linear-gradient(-90deg, #006383 0%, #2dbad4 40%, #e5eece 85%, #bed582 100%);");$("title").html("爱图微官网");}}).
    when("/otherlist6",{templateUrl:"views/page7.html",controller:function($scope){$scope.touchBack();$scope.pageClass = $scope.classP.p14;$("body").css("background","-webkit-linear-gradient(-90deg, #006383 0%, #2dbad4 40%, #e5eece 85%, #bed582 100%);");$("title").html("爱图微官网");}}).
    when("/otherlist7",{templateUrl:"views/page8.html",controller:function($scope){$scope.touchBack();$scope.pageClass = $scope.classP.p15;$("body").css("background","-webkit-linear-gradient(-90deg, #006383 0%, #2dbad4 40%, #e5eece 85%, #bed582 100%);");$("title").html("爱图微官网");}}).
    when("/page1content1",{templateUrl:"views/page1content.html",controller:function($scope){$scope.touchBack();$scope.pageClass = $scope.classP.p16;$scope.page1content = $scope.page1_Content.content1.p1;$("title").html("DSM");}}).
    when("/page1content2",{templateUrl:"views/page1content.html",controller:function($scope){$scope.touchBack();$scope.pageClass = $scope.classP.p17;$scope.page1content = $scope.page1_Content.content1.p2;$("title").html("远东");}}).
    when("/page1content3",{templateUrl:"views/page1content.html",controller:function($scope){$scope.touchBack();$scope.pageClass = $scope.classP.p18;$scope.page1content = $scope.page1_Content.content1.p3;$("title").html("DOW");}}).
    when("/page1content4",{templateUrl:"views/page1content.html",controller:function($scope){$scope.touchBack();$scope.pageClass = $scope.classP.p19;$scope.page1content = $scope.page1_Content.content1.p4;$("title").html("GE");}}).
    when("/page1content5",{templateUrl:"views/page1content.html",controller:function($scope){$scope.touchBack();$scope.pageClass = $scope.classP.p20;$scope.page1content = $scope.page1_Content.content2.p1;$("title").html("ENI");}}).
    when("/page1content6",{templateUrl:"views/page1content.html",controller:function($scope){$scope.touchBack();$scope.pageClass = $scope.classP.p21;$scope.page1content = $scope.page1_Content.content2.p2;$("title").html("KPC");}}).
    when("/page1content7",{templateUrl:"views/page1content.html",controller:function($scope){$scope.touchBack();$scope.pageClass = $scope.classP.p22;$scope.page1content = $scope.page1_Content.content2.p3;$("title").html("GE");}}).
    when("/page1content8",{templateUrl:"views/page1content.html",controller:function($scope){$scope.touchBack();$scope.pageClass = $scope.classP.p23;$scope.page1content = $scope.page1_Content.content3.p1;$("title").html("WANHUA");}}).
    when("/page1content9",{templateUrl:"views/page1content.html",controller:function($scope){$scope.touchBack();$scope.pageClass = $scope.classP.p24;$scope.page1content = $scope.page1_Content.content3.p2;$("title").html("ASHLAND");}}).
    when("/page1content10",{templateUrl:"views/page1content.html",controller:function($scope){$scope.touchBack();$scope.pageClass = $scope.classP.p25;$scope.page1content = $scope.page1_Content.content3.p3;$("title").html("远东");}}).
    when("/page1content11",{templateUrl:"views/page1content.html",controller:function($scope){$scope.touchBack();$scope.pageClass = $scope.classP.p26;$scope.page1content = $scope.page1_Content.content3.p4;$("title").html("中化国际");}}).
    when("/page1content12",{templateUrl:"views/page1content.html",controller:function($scope){$scope.touchBack();$scope.pageClass = $scope.classP.p27;$scope.page1content = $scope.page1_Content.content3.p5;$("title").html("DOW");}}).
    when("/page1content13",{templateUrl:"views/page1content.html",controller:function($scope){$scope.touchBack();$scope.pageClass = $scope.classP.p28;$scope.page1content = $scope.page1_Content.content4.p1;$("title").html("ENI");}}).
    when("/page1content14",{templateUrl:"views/page1content.html",controller:function($scope){$scope.touchBack();$scope.pageClass = $scope.classP.p29;$scope.page1content = $scope.page1_Content.content4.p2;$("title").html("KPC");}}).
    when("/page1content15",{templateUrl:"views/page1content.html",controller:function($scope){$scope.touchBack();$scope.pageClass = $scope.classP.p30;$scope.page1content = $scope.page1_Content.content4.p3;$("title").html("GE");}}).
    otherwise("/");
}]);



