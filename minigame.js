window.addEventListener("load",init);
function init() {
    var pr=document.getElementsByClassName("press");
     pr[0].style.display="none";
    var btn=document.getElementsByClassName("play");
    btn[0].addEventListener("click",start);
    window.addEventListener("keydown",key);
    
}
function search() {
    var s=document.getElementById("Lsearch").value;
    var a=document.getElementsByTagName("li");
    for(var i=0;i<a.length;i++){
        if(a[i].innerText.indexOf(s)==-1) a[i].style.display="none";
        else  a[i].style.display="list-item";
    }

}
function f() {
    var h=document.getElementById("height").value;
    var w=document.getElementById("weight").value;
    var str=document.getElementsByTagName("p");
    str[0].innerText+=parseFloat(w)/(parseFloat(h)*parseFloat(h)/10000);
}
var x=20;
var y=10;
function key(e) {

    console.log(e.key);
    var a=document.getElementsByClassName("square");
    if(e.key=="ArrowUp") a[0].style.top=(y-=10).toString()+"px";
    if(e.key=="ArrowDown") a[0].style.top=(y+=10).toString()+"px";
    if(e.key=="ArrowLeft") a[0].style.left=(x-=10).toString()+"px";
    if(e.key=="ArrowRight") a[0].style.left=(x+=10).toString()+"px";
}
function start() {
    var a=document.getElementsByClassName("interface");
    a[0].childNodes[1].style.display="none";
    a[0].childNodes[3].style.display="none";
    a[0].childNodes[5].style.display="none";
    var pr=document.getElementsByClassName("press");
    pr[0].style.display= "inline";
    var x=Math.random()*3 + 1;
    var t=0;
    var timer2=0;
    var timer=setTimeout(function(){
        a[0].style.backgroundColor="red";
        timer2 =setInterval(function(){
            console.log(t);
            t++;},5);
    },x*1000);
    pr[0].addEventListener("click",function(){
        clearInterval(timer2);
        clearTimeout(timer);
        if(a[0].style.backgroundColor!="red"){
            alert("你太急了");
            stop();
        }
        else{
            alert(t/200);
            stop();
        }
    });
}
function stop() {
    var a=document.getElementsByClassName("interface");
    a[0].childNodes[1].style.display="block";
    a[0].childNodes[3].style.display="block";
    a[0].childNodes[5].style.display="inline";  
    a[0].style.backgroundColor="white";
    var pr=document.getElementsByClassName("press");
    pr[0].style.display= "none";
}
