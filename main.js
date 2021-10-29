function audiotaker() {
    navigator.mediaDevices.getUserMedia({audio: true});
    modeltoproject= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/OUkyuR-ul/model.json" , modelready);
    }
    function modelready() {
        modeltoproject.classify(resultser);

    }
      
    function resultser(error, results) {
        if (error) {
            console.log(error);
        } else {
            console.log(results);
            document.getElementById("shownameofsound").innerHTML= "I can hear - " + results[0].label ;
            document.getElementById("showaccuracyofsound").innerHTML= "Accuracy - " + (results[0].confidence*100).toFixed(2) + " %";
            random_no_r= Math.floor(Math.random()*255) + 1;
            random_no_g= Math.floor(Math.random()*255) + 1;
            random_no_b= Math.floor(Math.random()*255) + 1;
            document.getElementById("shownameofsound").style.color= "rgb(" + random_no_r + "," + random_no_g + "," + random_no_b + ")";
            document.getElementById("showaccuracyofsound").style.color= "rgb(" + random_no_r + "," + random_no_g + "," + random_no_b + ")";
            img= document.getElementById("alien1") ;
            img1= document.getElementById("alien2") ;
            img2= document.getElementById("alien3") ;
            img3= document.getElementById("alien4") ;

            if (results[0].label == "clap") {
                img.src= "aliens-01.gif" ;
                img1.src= "aliens-02.png" ;
                img2.src= "aliens-03.png" ;
                img3.src= "aliens-04.png" ;
            } else if(results[0].label == "snap"){
                img.src= "aliens-01.png" ;
                img1.src= "aliens-02.gif" ;
                img2.src= "aliens-03.png" ;
                img3.src= "aliens-04.png" ;
            } else if(results[0].label == "bell"){
                img.src= "aliens-01.png" ;
                img1.src= "aliens-02.png" ;
                img2.src= "aliens-03.gif" ;
                img3.src= "aliens-04.png" ;
            } else if(results[0].label == "wonderland"){
img.src= "aliens-01.png" ;
img1.src= "aliens-02.png" ;
img2.src= "aliens-03.png" ;
img3.src= "aliens-04.gif" ;
            }
            }
    }
