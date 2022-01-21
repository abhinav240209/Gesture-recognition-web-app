nose_x="";
nose_y="";
left_wrist_x="";
left_wrist_y="";
right_wrist_x="";
right_wrist_y="";
//shape=[];
//console.log(shape);
difference="";

function preload() {
   
}

function draw() {
      var shapes=document.getElementsByName("shape");
      //console.log(shapes);
      if(shapes[0].checked==true){
          background("lightblue");
          fill("red");
          stroke("white");          
          square(nose_x,nose_y,difference);
          document.getElementById("width_height").innerHTML="Length of a square side is "+difference;
          fill("black");
          textSize(35);
          text("Square",30,30);
          document.body.style.backgroundImage="url('square.jpg')";
      }
      else if(shapes[1].checked==true){
          background("lightblue");
          fill("purple");
          stroke("white");
          circle(nose_x,nose_y,difference);
          document.getElementById("width_height").innerHTML="radius of the circle is "+difference;
          fill("black");
          textSize(35);
          text("Circle",30,30);
          document.body.style.backgroundImage="url('circle.png')";
      }
}

function setup() {
    canvas=createCanvas(600,470);
    canvas.position(700,135);
    video=createCapture(VIDEO);
    video.position(0,135);
    video.size(600,470);
    background("lightblue");   
    classifier=ml5.poseNet(video,modelLoaded);
    classifier.on('pose',gotPoses);
}

function modelLoaded() {
     console.log("model is Loaded");
}

function gotPoses(results){
    if(results.length>0){
        //console.log(results);
        nose_x=results[0].pose.nose.x;
        nose_y=results[0].pose.nose.y;
        left_wrist_x=Math.floor(results[0].pose.leftWrist.x);
        left_wrist_y=results[0].pose.leftWrist.y;
        right_wrist_x=Math.floor(results[0].pose.rightWrist.x);
        right_wrist_y=results[0].pose.rightWrist.y;
       /* console.log("nose x and y");
        console.log(nose_x+","+nose_y);
        console.log("leftWrist x and y");
        console.log(left_wrist_x+","+left_wrist_y);
        console.log("rightWrist x and y");
        console.log(right_wrist_x+","+right_wrist_y);*/

        console.log(left_wrist_x+","+right_wrist_x);
        difference=left_wrist_x-right_wrist_x;
        
        }
}

