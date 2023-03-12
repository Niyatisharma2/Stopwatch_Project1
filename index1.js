var isStop = true;
var s = 0;
var min = 0;
var hr = 0;

 function start()
{
   // console.log("starting")
    if(isStop==true)
    {
        isStop =false;
        timer();
    }
}
function timer()
{
//console.log("timer");
if(isStop == false)
{
   
    s++;
   // timer.innerHTML = s;
   // console.log(s);
   // stopwatch.innerHTML = s;
    if(s==60)
    {
       s=0; 
       min++; 
       min++; 
    }
    if(min==60)
    {
        min=0;
        hr++;
    }

    
   stopwatch.innerHTML = hr +" : " + min + ":" + s;
    setTimeout("timer()",100);
}
}
function stop()
{
    isStop = true;
}

   function reset()
   {
isStop =true;
    s=0;
    min=0;
    hr=0;
    stopwatch.innerHTML ="00:00:00";
   }



