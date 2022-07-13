var element=$(".wrapper-left"); //类数组
//console.log(element)
var str=element.html();
//console.log(str)
element.html("") //将element元素下的内容替换为""

var progress=0;
var ticket=setInterval(function(){
    var current=str.substr(progress,1);
    if(current=="<"){
        progress=str.indexOf(">",progress)+1; 
    }else{
        progress=progress+1;
    }
    
    element.html(str.substring(0,progress) + (progress % 5 ? "_" :""));
    if(progress>=str.length-1){
        //element. html(str.substring(0 , progress));
        clearInterval(ticket);
    }  
},30);