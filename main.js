function soundClass(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/fEoy4klB5/model.json",modelready);
    
}

function modelready(){
    classifier.classify(gotresult);
}
function gotresult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);

        document.getElementById("label").innerHTML="I can hear- "+results[0].label;
        document.getElementById("accuracy").innerHTML="Accuracy- "+(results[0].confidence*100).toFixed(2);
        
        r=Math.floor(Math.random()*255)+1;
        g=Math.floor(Math.random()*255)+1;
        b=Math.floor(Math.random()*255)+1;
        
        document.getElementById("label").style.color="rgb("+r+","+g+","+b+")";
        document.getElementById("accuracy").style.color="rgb("+r+","+g+","+b+")";

        img=document.getElementById("img");
        

        if(results[0].label == "Dog"){
            img.src="http://clipartmag.com/images/cute-cartoon-dogs-pictures-18.jpg";
            
        }
        else if(results[0].label == "Cat"){
            img.src="https://clipart.info/images/ccovers/1522855947cute-cat-png-cartoon-clip-art.png";
            
        }
        else if(results[0].label == "Lion"){
            img.src="https://thumbs.dreamstime.com/b/cute-lion-cartoon-illustration-45725631.jpg";
            
        }
        else if(results[0].label =="Cow"){
            img.src="https://tse1.mm.bing.net/th?id=OIP.8jkAFH_8TkiNXykopu3DwAHaHa&pid=Api&P=0&h=180";
        }
        else{
            img.src="ear-removebg-preview.png";
            
        }
    
    }
}