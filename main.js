x=0;
y=0;
 draw_circle-"";
 draw_rect-"";
 
 var SpeechRecognition = window.wibkitSpeechRecognition;
 var recognition=new SpeechRecognition();

 function start()
 {
     document.getElementById("status").innerHTML="I am listeing please speak";
     recognition.start();

 }
  recognition.onresult=function (event) 
  {
      console.log(event);
      var content=event.results[0][0].teanscript;
      document.getElementById("status").innerHTML="The Speech will translated to drawing in a few min"+ content;
      if(content=="circle")
      {
          x=Math.floor(Math.random()*789);
          y=Math.floor(Math.random()*678);
          document.getElementById("status").innerHTML="started drawing circle";
          draw_circle="set";
      }
      if(content=="rectangle")
      {
        x=Math.floor(Math.random()*789);
        y=Math.floor(Math.random()*678);
        document.getElementById("status").innerHTML="started drawing rectangle";
        draw_circle="set";
      }
  }
   function setup()
   {
       canvas=createCanvas(789,678);
   }

   function draw()
   {
       if(draw_circle=="set")
       {
           redius=Math.floor(Math.random()*100);
           circle(x,y,radius);
           document.getElementById("status").innerHTML="Circle is drawn.";
           draw_circle="";
       }
       if(draw_rect=="set")
       {
           recognition(x,y,70,50);
           document.getElementById("status").innerHTML="Rectangle is drawn.";
           draw_rect="";
       }
   }