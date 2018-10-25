var dot = document.getElementsByClassName('dot');
var wrapSlide = document.getElementById('wrap-slide');
var titleDot = document.getElementsByClassName('titleDot');


function slide(index) {
    wrapSlide.style.top = -index * 100 + '%';
    for(var i =0;i < dot.length ;i++) {
        dot[i].style.transform = 'scale(1,1)';
        dot[index].style.transform = 'scale(1.8,1.8)';
    }
    
}

window.addEventListener('keydown',pressKey);
function pressKey(e) {
    var dis = wrapSlide.offsetTop;
    var h = window.innerHeight;
    var per = Math.round(dis / h );
    var per1 = per * 100;
    if(e.keyCode===38){
    
        if(per1 < 0 ){
            wrapSlide.style.top = per1 + 100 + '%';
        }
    }else if(e.keyCode === 40){
        
        if(per1 > -1000){
            wrapSlide.style.top = per1-100 + '%';
        }
        
        
    }

    // slide dot
    for(var i =0;i < dot.length;i++) {
        let absPer = Math.abs((per1-100)/100);
        
        if(absPer < dot.length){
            dot[i].style.transform = 'scale(1,1)';
        dot[absPer].style.transform = 'scale(1.8,1.8)';
        }
    }
}