Webcam.set({
    width: 1000,
    height: 600,
    image_format: "png",
    png_quality: 190
});
camera = document.getElementById("cameragobrr");
Webcam.attach("#cameragobrr");
function snapshotgobrr(){
    Webcam.snap(function(datauri)
    {
        document.getElementById("resultt").innerHTML = '<img id="Capturegobrr"src="'+datauri+'"/>';
    });
}
console.log("ml5 version",ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/HKWhK7cmH/model.json',modelLoaded);
function modelLoaded()
{
console.log("model loaded")
}
function checkingsirgobrr(){
    img = document.getElementById("Capturegobrr");
    classifier.classify(img,gotResult)
}

function gotResult(error,result){
if(error){
    console.error(error)
}
else(console.log(result))
document.getElementById("Objecrgobrrr").innerHTML = result[0].label;
document.getElementById("Accuracygobrrr").innerHTML = result[0].confidence.toFixed(4);
}
