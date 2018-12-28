var a_idx = 0;
jQuery(document).ready(function($) {
 $("body").click(function(e) {
 var a = new Array("加油", "继续", "你能","相信","坚持","成功", "壮志", "激励", "奋进", "团结", "认真", "追求" ,"刻苦", "奋斗", "鼓励", "勤奋", "恒心","毅力");
 var $i = $("<span/>").text(a[a_idx]);
 a_idx = (a_idx + 1) % a.length;
 var x = e.pageX,
 y = e.pageY;
 $i.css({
 "z-index": 999,
 "top": y - 20,
 "left": x,
 "position": "absolute",
 "font-weight": "900",
 "color": "#FF0000"
 });
 $("body").append($i);
 $i.animate({
 "top": y - 180,
 "opacity": 0
 },
 1500,
 function() {
 $i.remove();
 });
 });
});