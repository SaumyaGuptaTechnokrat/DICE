function rannum(){
    var Random = document.getElementById('rannum');
    Random.innerHTML = Math.floor((Math.random())*6+1);
    if(Random.innerHTML==1){
        document.getElementById('3').style.visibility="visible";
        document.getElementById('1').style.visibility="hidden";
        document.getElementById('2').style.visibility="hidden";
        document.getElementById('4').style.visibility="hidden";
        document.getElementById('5').style.visibility="hidden";
        document.getElementById('six').style.visibility="hidden";
        document.getElementById('7').style.visibility="hidden";
    }
    if(Random.innerHTML==5){
        document.getElementById('3').style.visibility="visible";
        document.getElementById('1').style.visibility="visible";
        document.getElementById('2').style.visibility="visible";
        document.getElementById('4').style.visibility="visible";
        document.getElementById('5').style.visibility="visible";
        document.getElementById('six').style.visibility="hidden";
        document.getElementById('seven').style.visibility="hidden";

    }
    
    if(Random.innerHTML==4){
        document.getElementById('3').style.visibility="hidden";
        document.getElementById('1').style.visibility="visible";
        document.getElementById('2').style.visibility="visible";
        document.getElementById('4').style.visibility="visible";
        document.getElementById('5').style.visibility="visible";
        document.getElementById('six').style.visibility="hidden";
        document.getElementById('seven').style.visibility="hidden";
    }
    
    if(Random.innerHTML==3){
        document.getElementById('3').style.visibility="visible";
        document.getElementById('1').style.visibility="hidden";
        document.getElementById('2').style.visibility="visible";
        document.getElementById('4').style.visibility="visible";
        document.getElementById('5').style.visibility="hidden";
        document.getElementById('six').style.visibility="hidden";
        document.getElementById('seven').style.visibility="hidden";
    }
    
    if(Random.innerHTML==2){
        document.getElementById('3').style.visibility="hidden";
        document.getElementById('1').style.visibility="hidden";
        document.getElementById('2').style.visibility="visible";
        document.getElementById('4').style.visibility="visible";
        document.getElementById('5').style.visibility="hidden";
        document.getElementById('six').style.visibility="hidden";
        document.getElementById('seven').style.visibility="hidden";
    }
    
    if(Random.innerHTML==6){
        document.getElementById('3').style.visibility="hidden";
        document.getElementById('1').style.visibility="visible";
        document.getElementById('2').style.visibility="visible";
        document.getElementById('4').style.visibility="visible";
        document.getElementById('5').style.visibility="visible";
        document.getElementById('six').style.visibility="visible";
        document.getElementById('seven').style.visibility="visible";

    }
}