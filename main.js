function start() {
    m=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kAQVKJluV/model.json',modelloaded);
}

function modelloaded() {
    console.log("Model is loaded.");
}