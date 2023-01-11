class Player1{
    
    rannum(){
        let Random11 = document.getElementById('rannum');
        Random11.innerHTML = Math.floor((Math.random())*6+1);
        if(Random11.innerHTML==1){
            document.getElementById('3').style.visibility="visible";
            document.getElementById('1').style.visibility="hidden";
            document.getElementById('2').style.visibility="hidden";
            document.getElementById('4').style.visibility="hidden";
            document.getElementById('5').style.visibility="hidden";
            document.getElementById('six').style.visibility="hidden";
            document.getElementById('seven').style.visibility="hidden";
            
        }
        if(Random11.innerHTML==5){
            document.getElementById('3').style.visibility="visible";
            document.getElementById('1').style.visibility="visible";
            document.getElementById('2').style.visibility="visible";
            document.getElementById('4').style.visibility="visible";
            document.getElementById('5').style.visibility="visible";
            document.getElementById('six').style.visibility="hidden";
            document.getElementById('seven').style.visibility="hidden";
            
        }
        
        if(Random11.innerHTML==4){
            document.getElementById('3').style.visibility="hidden";
            document.getElementById('1').style.visibility="visible";
            document.getElementById('2').style.visibility="visible";
            document.getElementById('4').style.visibility="visible";
            document.getElementById('5').style.visibility="visible";
            document.getElementById('six').style.visibility="hidden";
            document.getElementById('seven').style.visibility="hidden";
            ;
        }
        
        if(Random11.innerHTML==3){
            document.getElementById('3').style.visibility="visible";
            document.getElementById('1').style.visibility="hidden";
            document.getElementById('2').style.visibility="visible";
            document.getElementById('4').style.visibility="visible";
            document.getElementById('5').style.visibility="hidden";
            document.getElementById('six').style.visibility="hidden";
            document.getElementById('seven').style.visibility="hidden";
            
        }
        
        if(Random11.innerHTML==2){
            document.getElementById('3').style.visibility="hidden";
            document.getElementById('1').style.visibility="hidden";
            document.getElementById('2').style.visibility="visible";
            document.getElementById('4').style.visibility="visible";
            document.getElementById('5').style.visibility="hidden";
            document.getElementById('six').style.visibility="hidden";
            document.getElementById('seven').style.visibility="hidden";
            
        }
        
        if(Random11.innerHTML==6){
            document.getElementById('3').style.visibility="hidden";
            document.getElementById('1').style.visibility="visible";
            document.getElementById('2').style.visibility="visible";
            document.getElementById('4').style.visibility="visible";
            document.getElementById('5').style.visibility="visible";
            document.getElementById('six').style.visibility="visible";
            document.getElementById('seven').style.visibility="visible";
            

        }
        
    }
    getDice12(){
        let Random12 = document.getElementById('rannum2').innerHTML;
    }

    rannum2(){  
        let Random = document.getElementById('rannum2');
        Random.innerHTML = Math.floor((Math.random())*6+1);
        if(Random.innerHTML==1){
            document.getElementById('10').style.visibility="visible";
            document.getElementById('11').style.visibility="hidden";
            document.getElementById('12').style.visibility="hidden";
            document.getElementById('8').style.visibility="hidden";
            document.getElementById('9').style.visibility="hidden";
            document.getElementById('thirteen').style.visibility="hidden";
            document.getElementById('fourteen').style.visibility="hidden";
            
        }
        if(Random.innerHTML==5){
            document.getElementById('8').style.visibility="visible";
            document.getElementById('9').style.visibility="visible";
            document.getElementById('10').style.visibility="visible";
            document.getElementById('11').style.visibility="visible";
            document.getElementById('12').style.visibility="visible";
            document.getElementById('thirteen').style.visibility="hidden";
            document.getElementById('fourteen').style.visibility="hidden";
            
        }
        
        if(Random.innerHTML==4){
            document.getElementById('10').style.visibility="hidden";
            document.getElementById('9').style.visibility="visible";
            document.getElementById('11').style.visibility="visible";
            document.getElementById('12').style.visibility="visible";
            document.getElementById('8').style.visibility="visible";
            document.getElementById('thirteen').style.visibility="hidden";
            document.getElementById('fourteen').style.visibility="hidden";
            
        }
        
        if(Random.innerHTML==3){
            document.getElementById('9').style.visibility="visible";
            document.getElementById('12').style.visibility="hidden";
            document.getElementById('10').style.visibility="visible";
            document.getElementById('11').style.visibility="visible";
            document.getElementById('8').style.visibility="hidden";
            document.getElementById('thirteen').style.visibility="hidden";
            document.getElementById('fourteen').style.visibility="hidden";
            
        }
        
        if(Random.innerHTML==2){
            document.getElementById('8').style.visibility="hidden";
            document.getElementById('10').style.visibility="hidden";
            document.getElementById('9').style.visibility="visible";
            document.getElementById('11').style.visibility="visible";
            document.getElementById('12').style.visibility="hidden";
            document.getElementById('thirteen').style.visibility="hidden";
            document.getElementById('fourteen').style.visibility="hidden";
            
        }
        
        if(Random.innerHTML==6){
            document.getElementById('10').style.visibility="hidden";
            document.getElementById('11').style.visibility="visible";
            document.getElementById('12').style.visibility="visible";
            document.getElementById('thirteen').style.visibility="visible";
            document.getElementById('fourteen').style.visibility="visible";
            document.getElementById('8').style.visibility="visible";
            document.getElementById('9').style.visibility="visible";
            
        }

    }
    
    /*sum1(){
        let randomnum  = document.getElementById('rannum');
        let randomnum1 = document.getElementById('rannum2');
    
        randomnum.innerText=parseInt(Math.floor(Math.random()*6+1));
        randomnum1.innerText=parseInt(Math.floor(Math.random()*6+1));
        document.getElementById('sumplayer1').innerHTML=parseInt(randomnum1.innerHTML)+parseInt(randomnum.innerHTML);
    }*/
}
let player = new Player1();
player.rannum();
player.rannum2();
player.sum1()
function getDice21(){
    let Random21 = document.getElementById('rannumplayer21');
    Random21.innerHTML = Math.floor((Math.random())*6+1);
}
function rannumplayer21(){
    let Random = document.getElementById('rannumplayer21');
    Random.innerHTML = Math.floor((Math.random())*6+1);
    getDice21();
    if(Random.innerHTML==1){
        document.getElementById('player23').style.visibility="visible";
        document.getElementById('player21').style.visibility="hidden";
        document.getElementById('player22').style.visibility="hidden";
        document.getElementById('player24').style.visibility="hidden";
        document.getElementById('player25').style.visibility="hidden";
        document.getElementById('player2six').style.visibility="hidden";
        document.getElementById('player2seven').style.visibility="hidden";
    }
    if(Random.innerHTML==5){
        document.getElementById('player23').style.visibility="visible";
        document.getElementById('player21').style.visibility="visible";
        document.getElementById('player22').style.visibility="visible";
        document.getElementById('player24').style.visibility="visible";
        document.getElementById('player25').style.visibility="visible";
        document.getElementById('player2six').style.visibility="hidden";
        document.getElementById('player2seven').style.visibility="hidden";

    }
    
    if(Random.innerHTML==4){
        document.getElementById('player23').style.visibility="hidden";
        document.getElementById('player21').style.visibility="visible";
        document.getElementById('player22').style.visibility="visible";
        document.getElementById('player24').style.visibility="visible";
        document.getElementById('player25').style.visibility="visible";
        document.getElementById('player2six').style.visibility="hidden";
        document.getElementById('player2seven').style.visibility="hidden";
    }
    
    if(Random.innerHTML==3){
        document.getElementById('player23').style.visibility="visible";
        document.getElementById('player21').style.visibility="hidden";
        document.getElementById('player22').style.visibility="visible";
        document.getElementById('player24').style.visibility="visible";
        document.getElementById('player25').style.visibility="hidden";
        document.getElementById('player2six').style.visibility="hidden";
        document.getElementById('player2seven').style.visibility="hidden";
    }
    
    if(Random.innerHTML==2){
        document.getElementById('player23').style.visibility="hidden";
        document.getElementById('player21').style.visibility="hidden";
        document.getElementById('player22').style.visibility="visible";
        document.getElementById('player24').style.visibility="visible";
        document.getElementById('player25').style.visibility="hidden";
        document.getElementById('player2six').style.visibility="hidden";
        document.getElementById('player2seven').style.visibility="hidden";
    }
    
    if(Random.innerHTML==6){
        document.getElementById('player23').style.visibility="hidden";
        document.getElementById('player21').style.visibility="visible";
        document.getElementById('player22').style.visibility="visible";
        document.getElementById('player24').style.visibility="visible";
        document.getElementById('player25').style.visibility="visible";
        document.getElementById('player2six').style.visibility="visible";
        document.getElementById('player2seven').style.visibility="visible";

    }
    
}
function getDice22(){
    let Random22 = document.getElementById('rannumplayer22');
    Random22.innerHTML = Math.floor((Math.random())*6+1);
}
function rannumplayer22(){
    getDice22();
    let Random = document.getElementById('rannumplayer22');
    Random.innerHTML = Math.floor((Math.random())*6+1);
    if(Random.innerHTML==1){
        document.getElementById('player223').style.visibility="visible";
        document.getElementById('player221').style.visibility="hidden";
        document.getElementById('player222').style.visibility="hidden";
        document.getElementById('player224').style.visibility="hidden";
        document.getElementById('player225').style.visibility="hidden";
        document.getElementById('player22six').style.visibility="hidden";
        document.getElementById('player22seven').style.visibility="hidden";
    }
    if(Random.innerHTML==5){
        document.getElementById('player223').style.visibility="visible";
        document.getElementById('player221').style.visibility="visible";
        document.getElementById('player222').style.visibility="visible";
        document.getElementById('player224').style.visibility="visible";
        document.getElementById('player225').style.visibility="visible";
        document.getElementById('player22six').style.visibility="hidden";
        document.getElementById('player22seven').style.visibility="hidden";

    }
    
    if(Random.innerHTML==4){
        document.getElementById('player223').style.visibility="hidden";
        document.getElementById('player221').style.visibility="visible";
        document.getElementById('player222').style.visibility="visible";
        document.getElementById('player224').style.visibility="visible";
        document.getElementById('player225').style.visibility="visible";
        document.getElementById('player22six').style.visibility="hidden";
        document.getElementById('player22seven').style.visibility="hidden";
    }
    
    if(Random.innerHTML==3){
        document.getElementById('player223').style.visibility="visible";
        document.getElementById('player221').style.visibility="hidden";
        document.getElementById('player222').style.visibility="visible";
        document.getElementById('player224').style.visibility="visible";
        document.getElementById('player225').style.visibility="hidden";
        document.getElementById('player22six').style.visibility="hidden";
        document.getElementById('player22seven').style.visibility="hidden";
    }
    
    if(Random.innerHTML==2){
        document.getElementById('player223').style.visibility="hidden";
        document.getElementById('player221').style.visibility="hidden";
        document.getElementById('player222').style.visibility="visible";
        document.getElementById('player224').style.visibility="visible";
        document.getElementById('player225').style.visibility="hidden";
        document.getElementById('player22six').style.visibility="hidden";
        document.getElementById('player22seven').style.visibility="hidden";
    }
    
    if(Random.innerHTML==6){
        document.getElementById('player223').style.visibility="hidden";
        document.getElementById('player221').style.visibility="visible";
        document.getElementById('player222').style.visibility="visible";
        document.getElementById('player224').style.visibility="visible";
        document.getElementById('player225').style.visibility="visible";
        document.getElementById('player22six').style.visibility="visible";
        document.getElementById('player22seven').style.visibility="visible";

    }
}
