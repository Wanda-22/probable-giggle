function start() {
    m=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kAQVKJluV/model.json',modelloaded);
}

function modelloaded() {
    console.log("It is loaded.");
    m.classify(Answer);
}


function Answer(error,result) {
    if (error) {
        console.log(error);
    }
    else{
        console.log(result);
        document.getElementById('ear').innerHTML="I can hear - " + result[0].label;
        document.getElementById('acc').innerHTML="Accuracy - " + Math.floor(result[0].confidence*100)+ "%";
        R=Math.floor(Math.random()*255)+1;
        B=Math.floor(Math.random()*255)+1;
        G=Math.floor(Math.random()*255)+1;
        document.getElementById('ear').style.color="rgb("+R+","+B+","+G+")";
        document.getElementById('acc').style.color="rgb("+R+","+B+","+G+")";
        a1=document.getElementById('a');
        if (result[0].label=="Meowing") {
            a1.src="cat.jpg";
        }
        else if (result[0].label=="Moowing") {
            a1.src="cow.jpg";
        }
        else if (result[0].label=="Chirping") {
            a1.src="bird.png";
        }
        else if (result[0].label=="Barking") {
            a1.src="dog.png";
        }
        else {
            a1.src="ear.jpg"
        }
    }
}