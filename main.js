let slide1 = document.getElementById('slide1');
let slide2 = document.getElementById('slide2');
let slide3 = document.getElementById('slide3');
let slide4 = document.getElementById('slide4');

let wrapper = document.getElementById('wrapper');

let btn1 = document.getElementById('slider_btn1');
let btn2 = document.getElementById('slider_btn2');
let btn3 = document.getElementById('slider_btn3');
let btn4 = document.getElementById('slider_btn4');

let popUp1 = document.getElementById('popUp1');
let popUp2 = document.getElementById('popUp2');
let popUp3 = document.getElementById('popUp3');
let popUp4 = document.getElementById('popUp4');
let popUp5 = document.getElementById('popUp5');
let popUp6 = document.getElementById('popUp6');
let btnClose1 = document.getElementById('btn_close1');
let btnClose2 = document.getElementById('btn_close2');
let btnClose3 = document.getElementById('btn_close3');
let btnClose4 = document.getElementById('btn_close4');
let btnClose5 = document.getElementById('btn_close5');
let btnClose6 = document.getElementById('btn_close6');

let sideNav = document.getElementById('side_nav');
let navItem1 = document.getElementById('nav_item1');
let navItem2 = document.getElementById('nav_item2');
let navItem3 = document.getElementById('nav_item3');
let navItem4 = document.getElementById('nav_item4');
let navItem5 = document.getElementById('nav_item5');
let navItem6 = document.getElementById('nav_item6');

let infoWrapper2 = document.getElementById('infowrapper2');
let infoWrapper1 = document.getElementById('infowrapper1');
let infoWrapper3 = document.getElementById('infowrapper3');
let infoWrapper4 = document.getElementById('infowrapper4');
let infoWrapper5 = document.getElementById('infowrapper5');
let infoWrapper6 = document.getElementById('infowrapper6');


let output = document.getElementById('output_slider');
let owner = document.getElementById('quote_owner_slider');
let indicator1 = document.getElementById('owner_btn1');
let indicator2 = document.getElementById('owner_btn2');
let indicator3 = document.getElementById('owner_btn3');
let indicator4 = document.getElementById('owner_btn4');

let count = 670;
let oneMoreCount = 375;

let clickcount1 = 0;
let clickcount2 = 0;
let clickcount3 = 0;
let clickcount4 = 0;
let clickcount5 = 0;
let clickcount6 = 0;



indicator1.style.backgroundColor = "#77efe5"
btn1.style.backgroundColor = "#77efe5"
popUp1.style.color = "transparent";
popUp2.style.color = "transparent";
popUp3.style.color = "transparent";
popUp4.style.color = "transparent";
popUp5.style.color = "transparent";
popUp6.style.color = "transparent";

function firstSlide(){
    wrapper.style.transform = 'translateX(0px)';
    btn1.style.backgroundColor = "#77efe5";
    btn2.style.backgroundColor = "#d0d0d0";
    btn3.style.backgroundColor = "#d0d0d0";
    btn4.style.backgroundColor = "#d0d0d0";
}

function secondSlide(){
    wrapper.style.transform = 'translateX(-490px)'
    btn2.style.backgroundColor = "#77efe5";
    btn1.style.backgroundColor = "#d0d0d0";
    btn3.style.backgroundColor = "#d0d0d0";
    btn4.style.backgroundColor = "#d0d0d0";
}

function thirdSlide(){
    wrapper.style.transform = 'translateX(-980px)'
    btn3.style.backgroundColor = "#77efe5";
    btn1.style.backgroundColor = "#d0d0d0";
    btn2.style.backgroundColor = "#d0d0d0";
    btn4.style.backgroundColor = "#d0d0d0";
}

function fourthSlide(){
    wrapper.style.transform = 'translateX(-1480px)'
    btn4.style.backgroundColor = "#77efe5";
    btn1.style.backgroundColor = "#d0d0d0";
    btn2.style.backgroundColor = "#d0d0d0";
    btn3.style.backgroundColor = "#d0d0d0";
}

function knowMore1(){
    popUp1.style.height = "425px";
    popUp1.style.color = "black";
    btnClose1.style.display = "block"; 
}

function closeMore1(){
    popUp1.style.height = "0px";
    popUp1.style.color = "transparent";
    btnClose1.style.display = "none";

}

function knowMore2(){
    popUp2.style.height = "425px";
    popUp2.style.color = "black";
    btnClose2.style.display = "block"; 
}

function closeMore2(){
    popUp2.style.height = "0px";
    popUp2.style.color = "transparent";
    btnClose2.style.display = "none";

}

function knowMore3(){
    popUp3.style.height = "425px";
    popUp3.style.color = "black";
    btnClose3.style.display = "block"; 
}

function closeMore3(){
    popUp3.style.height = "0px";
    popUp3.style.color = "transparent";
    btnClose3.style.display = "none";

}

function knowMore4(){
    popUp4.style.height = "425px";
    popUp4.style.color = "black";
    btnClose4.style.display = "block"; 
}

function closeMore4(){
    popUp4.style.height = "0px";
    popUp4.style.color = "transparent";
    btnClose4.style.display = "none";

}
function knowMore5(){
    popUp5.style.height = "425px";
    popUp5.style.color = "black";
    btnClose5.style.display = "block"; 
}

function closeMore5(){
    popUp5.style.height = "0px";
    popUp5.style.color = "transparent";
    btnClose5.style.display = "none";

}

function knowMore6(){
    popUp6.style.height = "425px";
    popUp6.style.color = "black";
    btnClose6.style.display = "block"; 
}

function closeMore6(){
    popUp6.style.height = "0px";
    popUp6.style.color = "transparent";
    btnClose6.style.display = "none";

}

function unitBtn2(){
    infoWrapper2.style.opacity = "1";
    clickcount2++;
    if(clickcount2 > 1){
        infoWrapper2.style.opacity = "0";
        clickcount2 = 0;
    }
}
function unitBtn4(){
    infoWrapper4.style.opacity = "1";
    clickcount4++;
    if(clickcount4 > 1){
        infoWrapper4.style.opacity = "0";
        clickcount4 = 0;
    }
}
function unitBtn5(){
    infoWrapper5.style.opacity = "1";
    clickcount5++;
    if(clickcount5 > 1){
        infoWrapper5.style.opacity = "0";
        clickcount5 = 0;
    }
}
function unitBtn6(){
    infoWrapper6.style.opacity = "1";
    clickcount6++;
    if(clickcount6 > 1){
        infoWrapper6.style.opacity = "0";
        clickcount6 = 0;
    }
}
function unitBtn1(){
    infoWrapper1.style.opacity = "1";
    clickcount1++;
    if(clickcount1 > 1){
        infoWrapper1.style.opacity = "0";
        clickcount1 = 0;
    }
}
function unitBtn3(){
    infoWrapper3.style.opacity = "1";
    clickcount3++;
    if(clickcount3 > 1){
        infoWrapper3.style.opacity = "0";
        clickcount3 = 0;
    }
}



function outputBtn2(){
    output.style.transform = 'translateX(-'+ count +'px)';
    owner.style.transform = 'translateX(-'+ oneMoreCount +'px)';
    indicator1.style.backgroundColor = "#d0d0d0";
    indicator2.style.backgroundColor = "#77efe5";
    count = count + 670;
    oneMoreCount = oneMoreCount + 375;
    if (count > 1340){
        indicator2.style.backgroundColor = "#d0d0d0";
        indicator3.style.backgroundColor = "#77efe5";
    }
    if (count > 2011){
        count = 0;
        indicator3.style.backgroundColor = "#d0d0d0";
        indicator4.style.backgroundColor = "#77efe5";
    }
    if (oneMoreCount > 1126){
        oneMoreCount = 0;
    }
    
}

function burgermenu(){
    sideNav.style.width ="100%";
    navItem1.style.display = "inline";
    navItem2.style.display = "inline";
    navItem3.style.display = "inline";
    navItem4.style.display = "inline";
    navItem5.style.display = "inline";
    navItem6.style.display = "inline";
}
function closeBurger(){
    sideNav.style.width = "0";
    navItem1.style.display = "none";
    navItem2.style.display = "none";
    navItem3.style.display = "none";
    navItem4.style.display = "none";
    navItem5.style.display = "none";
    navItem6.style.display = "none";
}
