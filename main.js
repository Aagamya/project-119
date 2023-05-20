function preload() {


    classifier = ml5.imageClassifier('DoodleNet');
  }
  

function setup(){
canvas= createCanvas(400,400)
canvas.center()
background("white")
canvas.mouseReleased(classifyCanvas)
synth=window.speechSynthesis
}

function draw(){
strokeWeight(3)
stroke("black")
if(mouseIsPressed){
line(pmouseX,pmouseY,mouseX,mouseY)
}
}

function clearCanvas(){
background("white")
document.getElementById("label").innerHTML="";
document.getElementById("confidence").innerHTML="";

}

function classifyCanvas(){
 classifier.classify(canvas,gotResults)   
}

function gotResults(error,results){
   if(error){
    console.log(error)
   }
   else{
   console.log(results)
   document.getElementById("label").innerHTML="Label: "+results[0].label
   document.getElementById("confidence").innerHTML="Confidence: "+Math.round(results[0].confidence*100)+"%"
   utterThis=new SpeechSynthesisUtterance (results[0].label)
   synth.speak(utterThis)
   }
}