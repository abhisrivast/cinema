(function(){
var isAndroid=/android/i.test(navigator.userAgent);
var menuUrl="https://1cinemas.co.in/POP/OrderPortal/start";

function waitReady(){
if(typeof submitRequest!=="function"){setTimeout(waitReady,100);return;}

// Auto-fill credentials
var u=document.getElementById("username");
var p=document.getElementById("password");
if(u){u.value="guest";u.style.display="none";}
if(p){p.value="Guest@1234";p.style.display="none";}

// Hide labels
var labels=document.querySelectorAll("label");
for(var j=0;j<labels.length;j++)labels[j].style.display="none";

// Hide "Access User Portal" and other links
var upl=document.getElementById("userportallink");
if(upl)upl.style.display="none";

// Change button text
var btn=document.getElementById("loginbutton");
if(btn)btn.innerText="Open Food & Drinks Menu";

// Override submitRequest: call original, then watch for success and redirect
var origSubmit=submitRequest;
submitRequest=function(){
origSubmit();
// Watch for auth success (DOM class toggle)
var check=setInterval(function(){
var creds=document.getElementById("credentials");
if(creds&&creds.classList.contains("loggedin")){
clearInterval(check);
setTimeout(function(){
if(isAndroid){
window.location.href="intent://1cinemas.co.in/POP/OrderPortal/start#Intent;scheme=https;package=com.android.chrome;end";
setTimeout(function(){window.location.href=menuUrl;},800);
}else{
window.location.href=menuUrl;
}
},1500);
}
},200);
};
}
waitReady();
})();
