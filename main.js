var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML;
    recognition.start();
    
}

recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML=content;
    if(content=="take my selfie"){
        console.log("taking selfie");
        speak();
    }
    
}
function speak(){
    var synth= window.speechSynthesis;
    speak_data= "Taking ur selfie in 5 seconds"
    var utterThis= new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(() => {
        take_snapshot();
        save();

    },5000);
}
Webcam.set({
    width:360,height:260,image_format:"png",png_quality:4000
});

camera= document.getElementById("camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie_image"src="'+data_uri+'">'; 
    });
}
function save(){
    link=document.getElementById("link");
    img=document.getElementById("selfie_image").src;
    link.href=img;
    link.click();
}