class Player1{
    rannum(){
        var Random11 = document.getElementById('rannum');
        Random11.innerHTML = Math.floor((Math.random())*6+1);
        
        var Random = document.getElementById('rannum2');
        Random.innerHTML = Math.floor((Math.random())*6+1);
        
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
        return (parseInt(Random11.innerHTML)+parseInt(Random.innerHTML));
    }
    
    sum1(){
        var dice=this.rannum();
        document.getElementById('sumplayer1').innerHTML=dice;    
    }

    rannum2(){
        var Random21 = document.getElementById('rannumplayer21');
        Random21.innerHTML = Math.floor((Math.random())*6+1);
        
        var Random22 = document.getElementById('rannumplayer22');
        Random22.innerHTML = Math.floor((Math.random())*6+1);
        
            if(Random21.innerHTML==1){
                document.getElementById('player23').style.visibility="visible";
                document.getElementById('player21').style.visibility="hidden";
                document.getElementById('player22').style.visibility="hidden";
                document.getElementById('player24').style.visibility="hidden";
                document.getElementById('player25').style.visibility="hidden";
                document.getElementById('player2six').style.visibility="hidden";
                document.getElementById('player2seven').style.visibility="hidden";
            }
            if(Random21.innerHTML==5){
                document.getElementById('player23').style.visibility="visible";
                document.getElementById('player21').style.visibility="visible";
                document.getElementById('player22').style.visibility="visible";
                document.getElementById('player24').style.visibility="visible";
                document.getElementById('player25').style.visibility="visible";
                document.getElementById('player2six').style.visibility="hidden";
                document.getElementById('player2seven').style.visibility="hidden";

            }

            if(Random21.innerHTML==4){
                document.getElementById('player23').style.visibility="hidden";
                document.getElementById('player21').style.visibility="visible";
                document.getElementById('player22').style.visibility="visible";
                document.getElementById('player24').style.visibility="visible";
                document.getElementById('player25').style.visibility="visible";
                document.getElementById('player2six').style.visibility="hidden";
                document.getElementById('player2seven').style.visibility="hidden";
            }

            if(Random21.innerHTML==3){
                document.getElementById('player23').style.visibility="visible";
                document.getElementById('player21').style.visibility="hidden";
                document.getElementById('player22').style.visibility="visible";
                document.getElementById('player24').style.visibility="visible";
                document.getElementById('player25').style.visibility="hidden";
                document.getElementById('player2six').style.visibility="hidden";
                document.getElementById('player2seven').style.visibility="hidden";
            }

            if(Random21.innerHTML==2){
                document.getElementById('player23').style.visibility="hidden";
                document.getElementById('player21').style.visibility="hidden";
                document.getElementById('player22').style.visibility="visible";
                document.getElementById('player24').style.visibility="visible";
                document.getElementById('player25').style.visibility="hidden";
                document.getElementById('player2six').style.visibility="hidden";
                document.getElementById('player2seven').style.visibility="hidden";
            }

            if(Random21.innerHTML==6){
                document.getElementById('player23').style.visibility="hidden";
                document.getElementById('player21').style.visibility="visible";
                document.getElementById('player22').style.visibility="visible";
                document.getElementById('player24').style.visibility="visible";
                document.getElementById('player25').style.visibility="visible";
                document.getElementById('player2six').style.visibility="visible";
                document.getElementById('player2seven').style.visibility="visible";

            }
            if(Random22.innerHTML==1){
                document.getElementById('player223').style.visibility="visible";
                document.getElementById('player221').style.visibility="hidden";
                document.getElementById('player222').style.visibility="hidden";
                document.getElementById('player224').style.visibility="hidden";
                document.getElementById('player225').style.visibility="hidden";
                document.getElementById('player22six').style.visibility="hidden";
                document.getElementById('player22seven').style.visibility="hidden";
            }
            if(Random22.innerHTML==5){
                document.getElementById('player223').style.visibility="visible";
                document.getElementById('player221').style.visibility="visible";
                document.getElementById('player222').style.visibility="visible";
                document.getElementById('player224').style.visibility="visible";
                document.getElementById('player225').style.visibility="visible";
                document.getElementById('player22six').style.visibility="hidden";
                document.getElementById('player22seven').style.visibility="hidden";

            }
            
            if(Random22.innerHTML==4){
                document.getElementById('player223').style.visibility="hidden";
                document.getElementById('player221').style.visibility="visible";
                document.getElementById('player222').style.visibility="visible";
                document.getElementById('player224').style.visibility="visible";
                document.getElementById('player225').style.visibility="visible";
                document.getElementById('player22six').style.visibility="hidden";
                document.getElementById('player22seven').style.visibility="hidden";
            }
            
            if(Random22.innerHTML==3){
                document.getElementById('player223').style.visibility="visible";
                document.getElementById('player221').style.visibility="hidden";
                document.getElementById('player222').style.visibility="visible";
                document.getElementById('player224').style.visibility="visible";
                document.getElementById('player225').style.visibility="hidden";
                document.getElementById('player22six').style.visibility="hidden";
                document.getElementById('player22seven').style.visibility="hidden";
            }
            
            if(Random22.innerHTML==2){
                document.getElementById('player223').style.visibility="hidden";
                document.getElementById('player221').style.visibility="hidden";
                document.getElementById('player222').style.visibility="visible";
                document.getElementById('player224').style.visibility="visible";
                document.getElementById('player225').style.visibility="hidden";
                document.getElementById('player22six').style.visibility="hidden";
                document.getElementById('player22seven').style.visibility="hidden";
            }
            
            if(Random22.innerHTML==6){
                document.getElementById('player223').style.visibility="hidden";
                document.getElementById('player221').style.visibility="visible";
                document.getElementById('player222').style.visibility="visible";
                document.getElementById('player224').style.visibility="visible";
                document.getElementById('player225').style.visibility="visible";
                document.getElementById('player22six').style.visibility="visible";
                document.getElementById('player22seven').style.visibility="visible";

            }
            return (parseInt(Random21.innerHTML)+parseInt(Random22.innerHTML));            
    }
    sum2(){
        var dice2=this.rannum2();
        document.getElementById('sumplayer2').innerHTML=dice2;    
    }
    Winner(){
        if(parseInt(document.getElementById('sumplayer1').innerHTML)>parseInt(document.getElementById('sumplayer2').innerHTML)){
            document.getElementById('winner').innerHTML="Player1 is the Winner";
            document.getElementById('chanceof').style.display="none";

            var blink = document.getElementById('winner');
            setInterval(function() {
                blink.style.opacity = (blink.style.opacity == 0 ? 1 : 0);

            }, 500);
            document.body.style.backgroundImage = "url('https://th.bing.com/th/id/R.9da239e790083475fb5a2e8b6816fa5f?rik=ABIChsJvomoQDQ&riu=http%3a%2f%2fwww.rimwe.com%2f_Media%2fanimated-dice.gif&ehk=NC6%2bm4OX8konkYJdvimhWg%2b4ChU9yc76rQ%2btZ4bm2A4%3d&risl=&pid=ImgRaw&r=0')";
            document.body.style.backgroundRepeat="no-repeat";
            document.body.style.backgroundSize="1500px 800px";
            setInterval(function(){
                blink.style.color="red";
                blink.style.fontSize+="50px";
            },500);
            var gameOver= document.getElementById('game');
            gameOver.style.display="none";
            
            setTimeout(() => {
                document.getElementById('gameOver').style.display="block";
                }, 4000);
                
            setTimeout(()=>{
                document.getElementById('winner').style.display="none";
                  },5000);

        }
        if(parseInt(document.getElementById('sumplayer1').innerHTML)<parseInt(document.getElementById('sumplayer2').innerHTML)){
            document.getElementById('winner').innerHTML="Player2 is the Winner";
            var gameOver= document.getElementById('game');
            gameOver.style.display="none";
            document.getElementById('chanceof').style.display="none";

            var blink = document.getElementById('winner');
            setInterval(function() {
                blink.style.opacity = (blink.style.opacity == 0 ? 1 : 0);
                
            }, 500);
            
            document.body.style.backgroundImage = "url('https://th.bing.com/th/id/R.9da239e790083475fb5a2e8b6816fa5f?rik=ABIChsJvomoQDQ&riu=http%3a%2f%2fwww.rimwe.com%2f_Media%2fanimated-dice.gif&ehk=NC6%2bm4OX8konkYJdvimhWg%2b4ChU9yc76rQ%2btZ4bm2A4%3d&risl=&pid=ImgRaw&r=0')";
            document.body.style.backgroundRepeat="no-repeat";
            document.body.style.backgroundSize="1500px 800px";
            setInterval(function(){
                blink.style.color="red";
                blink.style.fontSize+="50px";
            },500);
            setTimeout(() => {
                document.getElementById('gameOver').style.display="block";
            }, 4000);
            setTimeout(()=>{
                document.getElementById('winner').style.display="none";
                  },5000);
        }
        
        else if(parseInt(document.getElementById('sumplayer1').innerHTML)==parseInt(document.getElementById('sumplayer2').innerHTML)){
            document.getElementById('winner').innerHTML="The Match is Tie Kindly Play Again";
            var blink = document.getElementById('but');
            setInterval(function() {
                blink.style.opacity = (blink.style.opacity == 0 ? 1 : 0);
            }, 500); 
        }
    }
    toggle1(){
        var div1 = document.getElementById("player1");
        div1.style.pointerEvents='none';
    }
    toggle2(){
        var div1 = document.getElementById("player2");
        div1.style.pointerEvents='none';
    }
    Chance1(){
            document.getElementById('chanceof').innerHTML="Its Chance of Player2";
    }
    Chance2(){
        document.getElementById('chanceof').innerHTML="Now Click on Get Winners:";
    }
    
}
var player = new Player1();
player.rannum();
player.sum1();
player.rannum2();
player.sum2();
player.Winner();
player.toggle1();
player.toggle2();
player.Chance1();
player.Chance2();
