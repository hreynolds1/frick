function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}
function newele(type,id,html,parent="",classes="",onclick="",value=0){
    ele=document.createElement(type)
    ele.id=id
    ele.innerHTML=html
    ele.classList.add(classes)
    ele.onclick=onclick
    ele.value=value
    parent.appendChild(ele)
}
phonenumber=sessionStorage.getItem("phonenum")
useraccountname=sessionStorage.getItem("useraccount")
bsbnumber=sessionStorage.getItem("bsbnumber")
amountpaid=sessionStorage.getItem("amountpaid")
time=parseFloat(sessionStorage.getItem("time"))
setInterval(function(){time+=0.1},100)
console.log(""+phonenumber+", "+useraccountname+", "+bsbnumber+", "+amountpaid)
characters="0123456789abcdefghijklmnopqrstuvwxyz)!@#$%^&*(`~][|}{';\":/.,?><=-+_".split("")
function addtoemail(element,display,change=false){
    if (change){
        display.innerHTML+=element.value
    }
    element.textContent=""
    shuffle(characters)
    for (i in characters){
        newele("OPTION",characters[i],characters[i],element,"emptyclass","",characters[i])
    }
}
function submit(){
    if (document.getElementById("emaildisplay").innerHTML.replace("Email: ","")==document.getElementById("emaildisplay2").innerHTML.replace("Confirm email: ","") && document.getElementById("emaildisplay").innerHTML!="Email: "){
        sessionStorage.setItem("email",document.getElementById("emaildisplay").innerHTML.replace("Email: ",""))
        sessionStorage.setItem("time",time)
        window.location.href="./results.html"
    }
}
try{
    addtoemail(document.getElementById("emailcharacters"),document.getElementById("emaildisplay"))
    addtoemail(document.getElementById("emailcharacters2"),document.getElementById("emaildisplay2"))
} catch(err){}
