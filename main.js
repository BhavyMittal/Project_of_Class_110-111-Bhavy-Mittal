prediction_1 = "";
prediction_2 = "";

Webcam.set({

    width : 350,
    height : 300,
    image_format : 'png',
    png_quality : 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function capture_image()
{
     Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="image_capture" src="'+data_uri+'"/>';
     });
}
console.log("ML5 Version is",ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/8ZnlBYPB0/model.json',modelLoaded);

function modelLoaded()
{
    console.log("ModelLoaded!");
}

function speak()
{
    synth = window.SpeechSynthesis;
    speak_data_1 = "The first prediction is " + prediction_1;
    speak_data_2 - "and the second perdiction is" + prediction_2;
    Utterthis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(Utterthis);
}
