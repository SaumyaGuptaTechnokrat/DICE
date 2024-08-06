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

Verify(){
    const sum = parseInt(document.getElementById('sumplayer1').innerHTML);
        const inputNum = parseInt(document.getElementById('num').value);
    if (inputNum < 1 || inputNum > 12) {
        document.getElementById('Won').innerHTML = 'Please enter a number between 1 and 12.';
    }
    else if(sum === inputNum){
        document.getElementById('Won').innerHTML=' Congratulations!! You Won the Jackpot' ;
        setTimeout(()=>{
            document.getElementById('num').style.pointerEvents='none';
            document.getElementById('playAgainBtn').style.display = 'inline-block';
        });
    }    
    else{
        document.getElementById('Won').innerHTML='You Lost the Jackpot ' + '<br>' +'because sum of dice' + '<br>' + 'is not equal to your input' ;
        document.getElementById('playAgainBtn').style.display = 'inline-block';

    }
    document.getElementById('art').style.height='670px';
    document.getElementById('art2').style.height='670px';
}
/*AfterClickingInput(){
        document.getElementById('getSumbtn').style.pointerEvents='all';
}*/
playAgain() {
    document.getElementById('num').value = '';
    document.getElementById('num').style.pointerEvents = 'all';
    document.getElementById('playAgainBtn').style.display = 'none';
    document.getElementById('Won').innerHTML = '';
    document.getElementById('sumplayer1').innerHTML = '-';
    document.getElementById('rannum').innerHTML = '-';
    document.getElementById('rannum2').innerHTML = '-';
}
}
var player = new Player1();
document.getElementById('num').addEventListener('input', function(event) {
    const input = event.target;
    const value = input.value;

    // Show error if value is invalid
    if (isNaN(value) || value < 1 || value > 12) {
        document.getElementById('input-error').style.display = 'block';
        document.getElementById('getSumbtn').style.pointerEvents = 'none';
    } else {
        document.getElementById('input-error').style.display = 'none';
        document.getElementById('getSumbtn').style.pointerEvents = 'all';
    }
});
player.rannum();
player.sum1();
player.AfterClickingInput();
var a;
function checkNumber(event) {
const input = event.target;
const value = input.value;

if (isNaN(value) || value < 1 || value > 12) {
// If the input is not a number between 2 and 12, clear the input
input.value = '';
}
if(!isNaN(value)){
document.getElementById('getSumbtn').style.pointerEvents='all';
}
}
