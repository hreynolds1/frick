function sectomin(sec){
    if (sec<60){return sec+" seconds"}else{return (""+Math.floor(sec/60)+" "+plural("minute",Math.floor(sec/60))+" and "+Math.floor(sec % 60)+" "+plural("second",sec % 60))}
}
function plural(word,num){
    if (num==1){return word}else{return word+"s"}
}
phonenumber=sessionStorage.getItem("phonenum")
useraccountname=sessionStorage.getItem("useraccount")
bsbnumber=sessionStorage.getItem("bsbnumber")
amountpaid=sessionStorage.getItem("amountpaid")
email=sessionStorage.getItem("email")
time=parseFloat(sessionStorage.getItem("time")).toFixed(1)
console.log(time)
document.getElementById("time").innerHTML="Time: "+sectomin(time)
document.getElementById("phonenum").innerHTML+=phonenumber
document.getElementById("accountname").innerHTML+=useraccountname
document.getElementById("bsbnum").innerHTML+=bsbnumber
document.getElementById("amountpaid2").innerHTML+=amountpaid
document.getElementById("email").innerHTML+=email
function restart(){
    sessionStorage.clear()
    window.location.href="./index.html"
}