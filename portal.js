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
var iframe=document.createElement("iframe");
iframe.name="auth_frame";
iframe.style.display="none";
document.body.appendChild(iframe);
form.target="auth_frame";
form.addEventListener("submit",function(){
setTimeout(function(){
if(isAndroid){
window.location.href="intent://1cinemas.co.in/POP/OrderPortal/start#Intent;scheme=https;package=com.android.chrome;end";
setTimeout(function(){window.location.href=menuUrl;},800);
}else{
window.location.href=menuUrl;
}
},1500);
});
}
}
setup();
})();
