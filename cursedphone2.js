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
addtoemail(document.getElementById("emailcharacters"),document.getElementById("emaildisplay"))
addtoemail(document.getElementById("emailcharacters2"),document.getElementById("emaildisplay2"))