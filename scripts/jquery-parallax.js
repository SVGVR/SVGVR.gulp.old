$.fn.parallax=function(n,i){$el=$(this),TweenLite.to($el,.2,{x:-((i.clientX-window.innerWidth/2)/n),y:-((i.clientY-window.innerHeight/2)/n)})};