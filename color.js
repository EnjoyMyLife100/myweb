

var Body = {
    set_color:function(color){
        document.querySelector('body').style.color=color;
    },
    set_backgroundcolor:function(color){
        document.querySelector('body').style.backgroundColor=color;
    }
}
var Link = {
    set_color:function(color){
        var links=document.querySelectorAll('a');
    var i=0;
    while (i<links.length){
        links[i].style.color='powderblue';
        i=i+1;
    }
}
}
function nightdaybutton(self){
if(self.value==='night'){
    Body.set_color('white');
    Body.set_backgroundcolor('black');
    self.value='day';
    Link[set_color]('powderblue')
    
}
else{
    Body.set_color('black');
    Body.set_backgroundcolor('white');
    self.value='night';
    
    Link[set_color]('blue');
    }                
}