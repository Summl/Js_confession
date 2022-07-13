if(!document.createElement("canvas").getContext){
    var msg= document.createElement( "div");
    msg.innerHTML="可以使用canvas";
    document. body.append(msg);
    //console.log("dont't use canvas");
}else{
    //console.log("can use canvas");

    function renderHeart(){
        var canvas=document.getElementById("heart");
        canvas.width=900;
        canvas.height=900;
        canvas.style.width=canvas.width+"px";
        canvas.style.height=canvas.height+"px";

        var context=canvas.getContext("2d");
        context.translate(canvas.width/2,canvas.height/2);//将坐标系移动到canvas的中心
        context.scale(1,-1);
        context.moveTo(0,0);
        //var colors=["red","green","blue","gold","pink"];
        var imgs=[];
        for(j=1;j<=5;j++){
            var img=new Image(50,50);
            img.src="./imgs/"+j+".jpg"; 
            //img.src=`./imgs/${j}.jpg`;
            imgs.push(img);
        }
        var i=0; //半径与x轴的夹角
        var t=0; //通过t 绘制不同的圆
        var ticket=setInterval(function(){
            render();
        },80);
        function render(){
            i=i+0.15;
            if(t>=5){
                t=0;
            }
            var r=18;
            var x=r*16*Math.sin(i)*Math.sin(i)*Math.sin(i);
            var y=r*(13*Math.cos(i)-5*Math.cos(2*i)-2*Math.cos(3*i)-Math.cos(4*i));

            context.drawImage(imgs[t],x,y,imgs[t].width,imgs[t].height);
            //context.scale(1,-1);
            t=t+1;
            //console.log(i);
            if(i>6){
                clearInterval(ticket);
            }

        }
    }
    

}