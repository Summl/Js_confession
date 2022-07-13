var startTime=new Date();
//console.log(starttime);
startTime.setFullYear(2013,7,6);
startTime.setHours (0);
startTime.setMinutes (0);
startTime.setSeconds(0);
startTime. setMilliseconds(0);
console. log(startTime)//指定时间


//计算时间差值
function timeElaspe(start,now){
    //console.log(Date.parse(now),Date.parse(start));
    var seconds=(Date.parse(now)-Date.parse(start))/1000; //转成秒
    var days = Math.floor(seconds / (3600*24));//算出天数后，向下取整
    seconds=seconds % (3600*24);//不到一天的秒数
    var hours=Math.floor(seconds / 3600);//算出小时后，向下取整
    seconds=seconds % 3600;//不到一小时的秒数
    var minutes=Math.floor(seconds/60);//算出分钟后，向下取整
    seconds=seconds % 60;//不到一分钟的秒数
    //console.log(`我们相识了一共${days}天,${hours}小时,${minutes}分钟,${seconds}秒`);
    $("#time-elpase").html(
        `<span class="topWord">过去很好，未来会更好！</span></br>出道时长：&nbsp;
        <span class="broad" ><span class="time" >${days}</span> days，<span class="time">${hours}</span> hours，<span class="time">${minutes}</span> minutes，<span class="time">${seconds}</span> seconds</span>
        <br><br><div class="buttom" style="text-align: center; color: mediumslateblue;" >精彩才刚刚开始！</div>`
    );
}

setInterval(function(){
    //var nowTime=new Date();
    timeElaspe(startTime,new Date());
},1000);

$("#time-elpase").fadeIn(5000);