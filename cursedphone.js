function newele(type,id,html,parent="",classes="",onclick="",value=0){
    ele=document.createElement(type)
    ele.id=id
    ele.innerHTML=html
    ele.classList.add(classes)
    ele.onclick=onclick
    ele.value=value
    parent.appendChild(ele)
}
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
function addzeroes(number,zeroamount){
    number=number.toString()
    if (number.length<zeroamount){
        number="0".repeat(zeroamount-number.length)+number
    }
    return number
}
function updatephonenum(ele){
    ele.innerHTML=addzeroes(ele.value,10)
}
function buttonpress(ele){
    document.getElementById("accountname").innerHTML+=ele.innerHTML
}
function increaseval(ele,currentvalue,value,priortext,loop=0,addzero=0){
    currentvalue=parseInt(currentvalue)
    if (loop!=0 && (currentvalue+value)>loop){
        ele.innerHTML=currentvalue+value-loop-1
    } else {
        ele.innerHTML=currentvalue+value
    }
    ele.innerHTML=addzeroes(parseInt(ele.innerHTML),addzero)
    ele.innerHTML=priortext+ele.innerHTML
}
alphabet=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
shuffle(alphabet)
for (i=0;i<10;i++){
    newele("DIV","",alphabet[i],document.getElementById("firstrow"),"active",function() {buttonpress(this)})
}
for (i=0;i<9;i++){
    newele("DIV","",alphabet[i+10],document.getElementById("secondrow"),"active",function() {buttonpress(this)})
}
for (i=0;i<7;i++){
    newele("DIV","",alphabet[i+19],document.getElementById("thirdrow"),"active",function() {buttonpress(this)})
}
/*
for (i=0;i<9999;i++){
    newele("OPTION","",addzeroes(i,4),document.getElementById("bsb"),"emptyclass","",i)
}
for (i=0;i<9999;i++){
    newele("OPTION","",addzeroes(i,4),document.getElementById("bsb2"),"emptyclass","",i)
}*/
time=0
setInterval(function(){time+=0.1},100)
function submitdata(){
    sessionStorage.setItem("phonenum",addzeroes(document.getElementById("phonenum").value,10))
    sessionStorage.setItem("useraccount",document.getElementById("accountname").innerHTML.replace("Account name: ",""))
    sessionStorage.setItem("bsbnumber",(""+document.getElementById("bsb1").innerHTML+""+document.getElementById("bsb2").innerHTML))
    sessionStorage.setItem("amountpaid",document.getElementById("amountpaid").innerHTML.replace("$",""))
    sessionStorage.setItem("time",time)
    if (document.getElementById("phonenum").value!=0 && document.getElementById("accountname").innerHTML!="Account name: " && (""+document.getElementById("bsb1").innerHTML+""+document.getElementById("bsb2").innerHTML)!="00000000" && document.getElementById("amountpaid").innerHTML!=0){window.location.href="./email.html"}
}
