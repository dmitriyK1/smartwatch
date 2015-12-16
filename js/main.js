/*!
 * Peppermint touch slider
 * v. 1.4.0 | https://github.com/wilddeer/Peppermint
 * Copyright Oleg Korsunsky | http://wd.dizaina.net/
 *
 * Depends on Event Burrito (included) | https://github.com/wilddeer/Event-Burrito
 * MIT License
 */
function Peppermint(a,b){function c(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])}function d(a){var b=["Webkit","Moz","O","ms"],c=document.createElement("div");if(void 0!==c.style[a])return!0;a=a.charAt(0).toUpperCase()+a.slice(1);for(var d in b)if(void 0!==c.style[b[d]+a])return!0;return!1}function e(a,b){new RegExp("(\\s|^)"+b+"(\\s|$)").test(a.className)||(a.className+=" "+b)}function f(a,b){a.className=a.className.replace(new RegExp("(\\s+|^)"+b+"(\\s+|$)","g")," ").replace(/^\s+|\s+$/g,"")}function g(a,b){0>a?a=0:a>v-1&&(a=v-1);for(var c=C.dots.length-1;c>=0;c--)f(C.dots[c],G.activeDot);return e(C.dots[a],G.activeDot),E=a,h(-a*C.width,void 0===b?F.speed:b),o(),F.onSlideChange&&F.onSlideChange(a),a}function h(a,b){var c=b?b+"ms":"";y.style.webkitTransitionDuration=y.style.MozTransitionDuration=y.style.msTransitionDuration=y.style.OTransitionDuration=y.style.transitionDuration=c,j(a)}function i(a,b){if(B&&clearInterval(B),!b)return void j(a);var c=+new Date,d=C.left;B=setInterval(function(){function e(a,b){return(b-a)*i+a}var f,g,h=+new Date-c,i=h/b,k=[0,.7,1,1];return i>=1?(j(a),void clearInterval(B)):(f=a-d,g=e(e(e(k[0],k[1]),e(k[1],k[2])),e(e(k[1],k[2]),e(k[2],k[3]))),void j(Math.floor(g*f+d)))},15)}function j(a){y.style.webkitTransform="translate("+a+"px,0) translateZ(0)",y.style.msTransform=y.style.MozTransform=y.style.OTransform=y.style.transform="translateX("+a+"px)",C.left=a}function k(a){y.style.left=a+"px",C.left=a}function l(){var a=E+1;return a>v-1&&(a=0),g(a)}function m(){var a=E-1;return 0>a&&(a=v-1),g(a)}function n(){A=!0,o()}function o(){A&&(z&&clearTimeout(z),z=setTimeout(function(){l()},F.slideshowInterval))}function p(){z&&clearTimeout(z)}function q(){A=!1,z&&clearTimeout(z)}function r(){C.width=a.offsetWidth,y.style.width=C.width*v+"px";for(var b=0;v>b;b++)C.slides[b].style.width=C.width+"px";h(-E*C.width)}function s(a,b,c,d){b&&(a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent("on"+b,c))}function t(){EventBurrito(y,{mouse:F.mouseDrag,start:function(){e(a,G.drag)},move:function(a,b,c){p(),c.x=c.x/(!E&&c.x>0||E==v-1&&c.x<0?Math.abs(c.x)/C.width*2+1:1),h(c.x-C.width*E)},end:function(b,c,d){if(d.x){var e=Math.abs(d.x)/C.width,h=Math.floor(e)+(e-Math.floor(e)>.25?1:0),i=d.time<D+D*h/1.8&&Math.abs(d.x)-h*C.width>(h?-C.width/9:20);h+=i?1:0,d.x<0?g(E+h,F.touchSpeed):g(E-h,F.touchSpeed),F.stopSlideshowAfterInteraction&&q()}f(a,G.drag)}})}function u(){var b=F.slidesContainer||a,c=F.dotsContainer||a;if(!(F.disableIfOneSlide&&b.children.length<=1)){(!H.transforms||window.opera)&&(j=k),(!H.transitions||window.opera)&&(h=i),y=F.slidesContainer||document.createElement("div"),e(y,G.slides);for(var d=0,l=b.children.length;l>d;d++){var m=b.children[d],o=document.createElement("li");C.slides.push(m),o.setAttribute("tabindex","0"),o.setAttribute("role","button"),o.innerHTML="<span></span>",function(b,c){s(c,"click",function(){g(b),F.stopSlideshowAfterInteraction&&q()}),s(c,"keyup",function(a){13==a.keyCode&&(g(b),F.stopSlideshowAfterInteraction&&q())}),s(c,"mouseup",function(){e(c,G.mouseClicked)}),s(c,"blur",function(){f(c,G.mouseClicked)},!0),s(m,"focus",m.onfocusin=function(){a.scrollLeft=0,setTimeout(function(){a.scrollLeft=0},0),g(b)},!0)}(d,o),C.dots.push(o)}v=C.slides.length,w=100/v,e(a,G.active),f(a,G.inactive),F.mouseDrag&&e(a,G.mouse),C.width=a.offsetWidth,y.style.width=C.width*v+"px";for(var d=0;v>d;d++)C.slides[d].style.width=C.width+"px",y.appendChild(C.slides[d]);if(F.slidesContainer||a.appendChild(y),F.dots&&v>1){x=document.createElement("ul"),e(x,G.dots);for(var d=0,l=C.dots.length;l>d;d++)x.appendChild(C.dots[d]);F.dotsPrepend?c.insertBefore(x,c.firstChild):c.appendChild(x)}s(window,"resize",r),s(window,"orientationchange",r),setTimeout(function(){g(F.startSlide,0)},0),F.slideshow&&n(),t(),setTimeout(function(){F.onSetup&&F.onSetup(v)},0)}}var v,w,x,y,z,A,B,C={slides:[],dots:[],left:0},D=200,E=0,F={speed:300,touchSpeed:300,slideshow:!1,slideshowInterval:4e3,stopSlideshowAfterInteraction:!1,startSlide:0,mouseDrag:!0,disableIfOneSlide:!0,cssPrefix:"peppermint-",dots:!1,dotsPrepend:!1,dotsContainer:void 0,slidesContainer:void 0,onSlideChange:void 0,onSetup:void 0};b&&c(F,b);var G={inactive:F.cssPrefix+"inactive",active:F.cssPrefix+"active",mouse:F.cssPrefix+"mouse",drag:F.cssPrefix+"drag",slides:F.cssPrefix+"slides",dots:F.cssPrefix+"dots",activeDot:F.cssPrefix+"active-dot",mouseClicked:F.cssPrefix+"mouse-clicked"},H={transforms:d("transform"),transitions:d("transition")};return u(),{slideTo:function(a,b){return g(parseInt(a,10),b)},next:l,prev:m,start:n,stop:q,pause:p,getCurrentPos:function(){return E},getSlidesNumber:function(){return v},recalcWidth:r}}window.jQuery&&!function($){$.fn.Peppermint=function(a){return this.each(function(){$(this).data("Peppermint",Peppermint(this,a))}),this}}(window.jQuery);
function EventBurrito(a,b){function c(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])}function d(a,b,c,d){return b?(a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent("on"+b,c),{remove:function(){e(a,b,c,d)}}):void 0}function e(a,b,c,d){b&&(a.removeEventListener?a.removeEventListener(b,c,!!d):a.detachEvent("on"+b,c))}function f(a){a.preventDefault?a.preventDefault():a.returnValue=!1}function g(a){if(r={x:(o?a.clientX:a.touches[0].clientX)-q.x,y:(o?a.clientY:a.touches[0].clientY)-q.y,time:Number(new Date)-q.time},r.time-t[t.length-1].time){for(var b=0;b<t.length-1&&r.time-t[b].time>80;b++);s={x:(r.x-t[b].x)/(r.time-t[b].time),y:(r.y-t[b].y)/(r.time-t[b].time)},t.length>=5&&t.shift(),t.push({x:r.x,y:r.y,time:r.time})}}function h(a,b){v=!0,o=b,y[o](a)||(d(document,x[o][1],i),d(document,x[o][2],j),d(document,x[o][3],j),m.preventDefault&&o&&f(a),q={x:o?a.clientX:a.touches[0].clientX,y:o?a.clientY:a.touches[0].clientY,time:Number(new Date)},n=void 0,r={x:0,y:0,time:0},s={x:0,y:0},t=[{x:0,y:0,time:0}],m.start(a,q))}function i(a){!m.preventScroll&&n||y[o](a)||(g(a),(Math.abs(r.x)>m.clickTolerance||Math.abs(r.y)>m.clickTolerance)&&(v=!1),void 0===n&&3!==o&&(n=Math.abs(r.x)<Math.abs(r.y)&&!m.preventScroll)||(m.preventDefault&&f(a),m.move(a,q,r,s)))}function j(a){o&&g(a),!v&&a.target&&a.target.blur&&a.target.blur(),e(document,x[o][1],i),e(document,x[o][2],j),e(document,x[o][3],j),m.end(a,q,r,s)}function k(){u.push(d(a,x[w][0],function(a){h(a,w)})),u.push(d(a,"dragstart",f)),m.mouse&&!w&&u.push(d(a,x[3][0],function(a){h(a,3)})),u.push(d(a,"click",function(a){v?m.click(a):f(a)}))}var l=function(){},m={preventDefault:!0,clickTolerance:0,preventScroll:!1,mouse:!0,start:l,move:l,end:l,click:l};b&&c(m,b);var n,o,p={pointerEvents:!!window.navigator.pointerEnabled,msPointerEvents:!!window.navigator.msPointerEnabled},q={},r={},s={},t=[],u=[],v=!0,w=p.pointerEvents?1:p.msPointerEvents?2:0,x=[["touchstart","touchmove","touchend","touchcancel"],["pointerdown","pointermove","pointerup","pointercancel"],["MSPointerDown","MSPointerMove","MSPointerUp","MSPointerCancel"],["mousedown","mousemove","mouseup",!1]],y=[function(a){return a.touches&&a.touches.length>1||a.scale&&1!==a.scale},function(a){return!a.isPrimary||a.buttons&&1!==a.buttons||!m.mouse&&"touch"!==a.pointerType&&"pen"!==a.pointerType},function(a){return!a.isPrimary||a.buttons&&1!==a.buttons||!m.mouse&&a.pointerType!==a.MSPOINTER_TYPE_TOUCH&&a.pointerType!==a.MSPOINTER_TYPE_PEN},function(a){return a.buttons&&1!==a.buttons}];return k(),{getClicksAllowed:function(){return v},kill:function(){for(var a=u.length-1;a>=0;a--)u[a].remove()}}}
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"c:\\!Development\\smartwatch\\dev\\scripts\\main.js":[function(require,module,exports){
'use strict';

//=============================================================================
// UTILITY FUNCTIONS START
//=============================================================================

function currentYPosition() {
    // Firefox, Chrome, Opera, Safari
    if (self.pageYOffset) return self.pageYOffset;
    // Internet Explorer 6 - standards mode
    if (document.documentElement && document.documentElement.scrollTop)
        return document.documentElement.scrollTop;
    // Internet Explorer 6, 7 and 8
    if (document.body.scrollTop) return document.body.scrollTop;
    return 0;
}

function elmYPosition(eID) {
    var elm = document.getElementById(eID);
    var y = elm.offsetTop;
    var node = elm;
    while (node.offsetParent && node.offsetParent != document.body) {
        node = node.offsetParent;
        y += node.offsetTop;
    }
    return y;
}

function smoothScroll(eID) {
    var startY = currentYPosition();
    var stopY = elmYPosition(eID);
    var distance = stopY > startY ? stopY - startY : startY - stopY;
    if (distance < 100) {
        scrollTo(0, stopY);
        return;
    }
    var speed = Math.round(distance / 100);
    if (speed >= 20) speed = 20;
    var step = Math.round(distance / 25);
    var leapY = stopY > startY ? startY + step : startY - step;
    var timer = 0;
    if (stopY > startY) {
        for (var i = startY; i < stopY; i += step) {
            setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
            leapY += step;
            if (leapY > stopY) leapY = stopY;
            timer++;
        }
        return;
    }
    for (var i = startY; i > stopY; i -= step) {
        setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
        leapY -= step;
        if (leapY < stopY) leapY = stopY;
        timer++;
    }
    return false;
}

function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

function isOnScreen(elm) {
    var vpH = viewPortHeight(),
        st = scrollY(),
        y = posY(elm);

    return (y < (vpH + st));

    function posY(elm) {
        var test = elm,
            top = 0;

        while (!!test && test.tagName.toLowerCase() !== "body") {
            top += test.offsetTop;
            test = test.offsetParent;
        }

        return top;
    }

    function viewPortHeight() {
        var de = document.documentElement;

        if (!!window.innerWidth) {
            return window.innerHeight;
        } else if (de && !isNaN(de.clientHeight)) {
            return de.clientHeight;
        }

        return 0;
    }

    function scrollY() {
        if (window.pageYOffset) {
            return window.pageYOffset;
        }
        return Math.max(document.documentElement.scrollTop, document.body.scrollTop);
    }
}

//=============================================================================
// UTILITY FUNCTIONS END
//=============================================================================

var isVideoFocused = debounce(isVideoFocused, 200),
    isFormFocused = debounce(isFormFocused, 200),
    iframe = document.getElementById('video'),
    form = document.getElementById('form');

window.addEventListener('scroll', isVideoFocused, false);
window.addEventListener('scroll', isFormFocused, false);

function isVideoFocused() {
    if (isOnScreen(iframe)) {
        iframe.src += '?autoplay=1';
        window.removeEventListener('scroll', isVideoFocused);
    }
}

function isFormFocused() {
    if (isOnScreen(form)) {
        form.querySelector('input').focus();
        window.removeEventListener('scroll', isFormFocused);
    }
}

//=============================================================================
// SLIDER START
//=============================================================================

var slider = document.querySelector('.peppermint'),
    sliderContainer = document.getElementById('slider'),
    leftArr = sliderContainer.querySelector('.slider-prev'),
    rightArr = sliderContainer.querySelector('.slider-next'),
    sliderWidget = Peppermint(slider, {
        mouseDrag: true,
        dots: false,
        slideshow: true,
        slideshowInterval: 70000000,
        speed: 500
    });

leftArr.addEventListener('click', sliderWidget.prev, false);
rightArr.addEventListener('click', sliderWidget.next, false);

//=============================================================================
// SLIDER END
//=============================================================================

var btns = Array.prototype.slice.call(document.querySelectorAll('.js-order'));

btns.forEach(function(btn) {
    btn.addEventListener('click', onOrderClick, false);
});

function onOrderClick() {
    smoothScroll('form');
}

},{}]},{},["c:\\!Development\\smartwatch\\dev\\scripts\\main.js"]);
