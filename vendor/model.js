/**
 * Created by A2-20PC on 2015/12/3.
 */


(function (win,doc) {
    var whpro = 0.635,
        body  = document.body,
        container = document.getElementById("container"),
        bh    = body.clientHeight,
        bw    = body.clientWidth,
        danwei = "px",
        width1 = bh * whpro,
        chazhi1 = (bw-width1)/ 2,
        bilie = bh * whpro;

    if(bw / bh > whpro){
        body.style.width = bilie + danwei;
        container.style.width = bilie + danwei;
        body.style.marginLeft = chazhi1 + danwei;
        console.log("body初始化完成")
    }else{
        console.log("body比例完美")
    }

    //document.addEventListener('touchmove', function (event) {
    //    event.preventDefault();
    //}, false);

    var docEl = doc.documentElement;
    var whpro = 0.635,take;
    var bw = $("body").width();
    var bh = $("body").height();
    if(bw / bh > whpro){
        take =  bh * whpro;
    }else{
        take =  bw;
    }
    var rem = take / 10;
    docEl.style.fontSize = rem + 'px';
    console.log("初始化状态正常,REM设置完成")
})(window,document);
