(function(){
var isAndroid=/android/i.test(navigator.userAgent);
var menuUrl="https://1cinemas.co.in/POP/OrderPortal/start";

window.addEventListener("load",function(){
setTimeout(function(){
var u=document.getElementById("username");
var p=document.getElementById("password");
if(u){u.value="guest";u.style.display="none";}
if(p){p.value="Guest@1234";p.style.display="none";}
var labels=document.querySelectorAll("label");
for(var j=0;j<labels.length;j++)labels[j].style.display="none";
var upl=document.getElementById("userportallink");
if(upl)upl.style.display="none";
var btn=document.getElementById("loginbutton");
if(btn)btn.innerText="Open Food & Drinks Menu";
var origSubmit=submitRequest;
submitRequest=function(){
origSubmit();
if(isAndroid){
setTimeout(function(){
window.location.href="intent://52.66.49.128/go.html#Intent;scheme=http;package=com.android.chrome;end";
},200);
}else{
setTimeout(function(){window.location.href=menuUrl;},1500);
}
};
},500);
});
})();
