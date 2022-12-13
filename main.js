Webcam.set({
    width: 350,
    heigh: 300,
    image_format: "png",
    png_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach("#camera");

function tirarFoto(){
    Webcam.snap(function(data_uri){
        document.getElementById("resultado").innerHTML = '<img id="img" src="' + data_uri + '></img>';
    });
}

console.log(ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/6EDQYzhN6/");

function modelLoaded(){
    console.log("O modelo foi carregado");
}
