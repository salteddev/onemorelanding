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

let infoWrapper2 = document.getElementById('infowrapper2');
let infoWrapper1 = document.getElementById('infowrapper1');
let infoWrapper3 = document.getElementById('infowrapper3');


let output = document.getElementById('output_slider');
let owner = document.getElementById('quote_owner_slider');
let indicator1 = document.getElementById('owner_btn1');
let indicator2 = document.getElementById('owner_btn2');
let indicator3 = document.getElementById('owner_btn3');
let indicator4 = document.getElementById('owner_btn4');

let count = 670;
let oneMoreCount = 375;



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
}
function unitBtn1(){
    infoWrapper1.style.opacity = "1";
}
function unitBtn3(){
    infoWrapper3.style.opacity = "1";
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
