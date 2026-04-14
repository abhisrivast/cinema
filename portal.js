(function(){
var isAndroid=/android/i.test(navigator.userAgent);
var menuUrl="https://1cinemas.co.in/POP/OrderPortal/start";
function setup(){
var inputs=document.querySelectorAll("input");
var found=false;
for(var i=0;i<inputs.length;i++){
if(inputs[i].type==="text"||inputs[i].type==="email"){inputs[i].value="guest";inputs[i].style.position="absolute";inputs[i].style.left="-9999px";found=true;}
if(inputs[i].type==="password"){inputs[i].value="Guest@1234";inputs[i].style.position="absolute";inputs[i].style.left="-9999px";}
}
if(!found){setTimeout(setup,200);return;}
var labels=document.querySelectorAll("label");
for(var j=0;j<labels.length;j++)labels[j].style.display="none";
var form=document.querySelector("form");
var btn=document.querySelector("button,input[type=submit]");
if(btn&&form){
form.onsubmit=function(e){if(e)e.preventDefault();return false;};
btn.addEventListener("click",function(e){
e.preventDefault();
e.stopPropagation();
e.stopImmediatePropagation();
var data="";
var fi=form.querySelectorAll("input,select,textarea");
for(var k=0;k<fi.length;k++){
if(fi[k].name)data+=(data?"&":"")+encodeURIComponent(fi[k].name)+"="+encodeURIComponent(fi[k].value);
}
var xhr=new XMLHttpRequest();
xhr.open(form.method||"POST",form.action,true);
xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
xhr.onload=xhr.onerror=function(){
if(isAndroid){
window.location.href="intent://1cinemas.co.in/POP/OrderPortal/start#Intent;scheme=https;package=com.android.chrome;end";
setTimeout(function(){window.location.href=menuUrl;},800);
}else{
window.location.href=menuUrl;
}
};
xhr.send(data);
return false;
},true);
}
}
setup();
})();
