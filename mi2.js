window.onload=function(){
    let banner=document.querySelectorAll(".banner img");
    let dot=document.querySelectorAll(".banner li");
    let but=document.querySelector(".banner .leftmini");
    let but2=document.querySelector(".banner .rightmini");
    let father=document.querySelector(".banners");
    banner[0].style.opacity=1;
    dot[0].classList.add("hots");
    next=0;
    now=0;
    let t=setInterval(move,2000);
    let flag=true;
    function move(){
        next++;
        if(next==banner.length){
            next=0;
        }
       banner[now].style.opacity=0;
        animate(banner[next],{opacity:1},function(){
            flag=true;
        });
        dot[now].classList.remove("hots");
        dot[next].classList.add("hots");
        now=next;
    }
    function moveL(){
        next--;
        if(next==-1){
            next=banner.length-1;
        }
        banner[now].style.opacity=0;
        animate(banner[next],{opacity:1},function(){
            flag=true;
        });
        dot[now].classList.remove("hots");
        dot[next].classList.add("hots");
        now=next;
    }
for(let i=0;i<dot.length;i++){
        dot[i].onmouseenter=function(){
            for(let j=0;j<dot.length;j++){
                dot[j].classList.remove("hots");
                banner[j].style.opacity=0;
            }
            clearInterval(t);
            dot[i].classList.add("hots");
            banner[i].style.opacity=1;
            next=i;
            now=i;
        }
     dot[i].onmouseleave=function(){
         t=setInterval(move,2000);
     }
}
but.onclick=function(){
        if(!flag){
            return;
        }
        flag=false;
        moveL();
}
    but2.onclick=function(){
        if(!flag){
            return;
        }
        flag=false;
        move();
    }
father.onmouseenter=function () {
    clearInterval(t);
}
father.onmouseleave=function () {
    t=setInterval(move,2000);
    }


    let looks=document.querySelectorAll(".looks");
    let dots=document.querySelectorAll(".dot31");
    let dots1=document.querySelector(".cbox .but1");
    let dots23=document.querySelector(".cbox .but2");


    let smallbanner=function(looks,dots,dots1,dots23){
        looks[0].style.left=0;
        dots[0].classList.add("hot");
        let next1=0;
        let now1=0;
        let flagg=true;
        function move1(){
            next1++;
            if(next1==looks.length){
                next1=0;
            }
            looks[next1].style.left="288px";
            animate(looks[now1],{left:-288},function(){
                flagg=true;
            });
            animate(looks[next1],{left:0});
            dots[now1].classList.remove("hot");
            dots[next1].classList.add("hot");
            now1=next1;
        }
        function moveL1(){
            next1--;
            if(next1<0){
                next1=looks.length-1;
            }
            looks[next1].style.left="-288px";
            animate(looks[now1],{left:288},function(){
                flagg=true;});
            animate(looks[next1],{left:0});
            dots[now1].classList.remove("hot");
            dots[next1].classList.add("hot");
            now1=next1;
        }
        for(let i=0;i<dots.length;i++){
            dots[i].onclick=function(){
                if(i==now1){
                    return;
                }
                else if(i>now1){
                    looks[i].style.left="288px";
                    animate(looks[now1],{left:-288});
                    animate(looks[i],{left:0});
                    dots[now1].classList.remove("hot");
                    dots[i].classList.add("hot");
                }
                else if(i<now1){
                    looks[i].style.left="-288px";
                    animate(looks[now1],{left:288});
                    animate(looks[i],{left:0});
                    dots[now1].classList.remove("hot");
                    dots[i].classList.add("hot");
                }
                now1=i;
                next1=now1;
            }
        }
        dots1.onclick=function(){
            if(!flagg){
                return;
            }
            flagg=false;
            if(next1==0){
                flagg=true;
                return;
            }
            moveL1();
        }
        dots23.onclick=function(){
            if(!flagg){
                return;
            }
            flagg=false;
            if(next1==looks.length-1){
                flagg=true;
                return;
            }
            move1();
        }
    }
    smallbanner(looks,dots,dots1,dots23);
    let view1=document.querySelectorAll(".lookq");
    let doot1=document.querySelectorAll(".dot32");
    let buut1=document.querySelector(".but3");
    let buut2=document.querySelector(".but4");
    smallbanner(view1,doot1,buut1,buut2);
    let view2=document.querySelectorAll(".lookw");
    let doot2=document.querySelectorAll(".dot33");
    let buut3=document.querySelector(".but5");
    let buut4=document.querySelector(".but6");
    smallbanner(view2,doot2,buut3,buut4);
    let view3=document.querySelectorAll(".looke");
    let doot3=document.querySelectorAll(".dot34");
    let buut5=document.querySelector(".but7");
    let buut6=document.querySelector(".but8");
    smallbanner(view3,doot3,buut5,buut6);




//    *************
//    左右点击
    let fcenter=document.querySelector(".bigfter");
    let lllft=document.querySelector(".lllft");
    let rrrit=document.querySelector(".rrrit");
    let w=parseInt(getComputedStyle(fcenter,null).width)/3;
    function leftRight(fcenter,lllft,rrrit,w,num){
        let times=0;
        rrrit.onclick=function(){
            times++;
            if(times==num){
                times=num-1;
            }
            fcenter.style.transform=`translate(${-w*times}px)`
        }
        lllft.onclick=function(){
            times--;
            if(times==-1){
                times=0;
            }
            fcenter.style.transform=`translate(${-w*times}px)`
        }
    }
    leftRight(fcenter,lllft,rrrit,w,3);
    let bg=document.querySelector(".bbigg");
    let Leftt=document.querySelector(".Leftt");
    let Rightt=document.querySelector(".Rightt");
    let q=parseInt(getComputedStyle(bg,null).width)/2;
    console.log(q)
    leftRight(bg,Leftt,Rightt,q,2);
}



