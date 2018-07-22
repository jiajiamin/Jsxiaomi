window.onload=function() {
	let piantou=document.getElementsByClassName("piantou")[0];
    let a1=piantou.getElementsByTagName("a");
    let span1=piantou.getElementsByTagName("span");
    let piantouBox=document.getElementsByClassName("piantouBox");
    for (let i=0;i<a1.length-2;i++) {
        a1[i].onmouseenter = function () {
            for (let j=0;j<piantouBox.length;j++){
                piantouBox[j].style.height="0";
                piantouBox[j].style.borderTop="";

            }
            piantouBox[i].style.height="230px";
            piantouBox[i].style.transition="all 0.5s";
            piantouBox[i].style.borderTop="1px solid rgba(0,0,0,0.5)";
            piantouBox[i].style.boxShadow= "0px 2px 10px rgba(0,0,0,0.15)";
        }
        a1[i].onmouseleave=function () {
            piantouBox[i].style.height="0";
            piantouBox[i].style.borderTop="none";
        }
    }
    let shop = document.getElementsByClassName("shop")[0];
    let shopBox = document.getElementsByClassName("shopBox")[0];
    let a = shop.getElementsByTagName("a")[0];
    shop.onmouseenter = function () {
        shopBox.style.display = "block";
        shopBox.style.height = "98px";
        shopBox.style.transition = "all 0.5s";
        shopBox.style.boxShadow = "0px 2px 10px rgba(0,0,0,0.15)";
        shop.style.background = "white"
        a.style.color = "#ff6700";
    }
    shop.onmouseleave = function () {
        shopBox.style.display = "";
        shopBox.style.height = "0px";
        shop.style.background = ""
    }

    let Box1 = document.getElementsByClassName("Box1")[0];
    let img = Box1.getElementsByClassName("img")[0];
    let left = img.getElementsByClassName("left")[0];
    let list = left.getElementsByClassName("list");
    let listBox = left.getElementsByClassName("listBox");
    for (let i = 0; i < list.length; i++) {
        list[i].onmouseenter = function () {
            for (let j = 0; j < list.length; j++) {
                listBox[j].style.display = "none";
            }
            listBox[i].style.display = "block";
        }
        list[i].onmouseleave = function () {
            listBox[i].style.display = "";
        }
    }


    function xxf(floor) {
        let neirong = floor.getElementsByClassName("neirong")[0];
        let right = neirong.getElementsByClassName("right");
        let titleRight = floor.getElementsByClassName("right")[0];
        let span = titleRight.getElementsByTagName("span");
        for (let i = 0; i < span.length; i++) {
            span[i].onmouseenter = function () {
                for (let j = 0; j < span.length; j++) {
                    right[j].style.display = "";
                    span[j].style.color = "";
                    span[j].style.borderBottom = "";
                }
                right[i].style.display = "block";
                span[i].style.color = "#ff6700";
                span[i].style.borderBottom = "2px solid #ff6700"
            }
        }
    }
        let jiadian = document.getElementsByClassName("jiadian")[0];
        xxf(jiadian);
        let zhineng = document.getElementsByClassName("zhineng")[0];
        xxf(zhineng);
        let dapei=document.getElementsByClassName("dapei")[0];
        xxf(dapei);
        let peijian=document.getElementsByClassName("peijian")[0];
        xxf(peijian);
        let zhoubian=document.getElementsByClassName("zhoubian")[0];
        xxf(zhoubian);

}
