//https://teachablemachine.withgoogle.com/models/m4UjHONSI/
function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/ONAx7fZ13/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}