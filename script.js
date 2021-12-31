function ageindays()
{
    var year=prompt("which year you were born?");
    var days=(2021-year)*365;
    var h1=document.createElement('h1');
    var text=document.createTextNode("you are "+days+" days  old.");
    h1.setAttribute('id','daysoff');
    h1.appendChild(text);
    document.getElementById('result').appendChild(h1);
}
function reset()
{
    document.getElementById('daysoff').remove();
}
function generatecat()
{
    var image=document.createElement('img');
    image.src="https://media4.giphy.com/media/3o6Zt481isNVuQI1l6/200.gif";
    var div=document.getElementById('catimage');
    div.appendChild(image);
}
function game(yourchoice)
{
    var humanchoice,computerchoice;
    humanchoice=yourchoice.id;
    computerchoice=originalchoice(randomchoice());
    console.log(humanchoice);

    console.log(computerchoice);
    var result=decidewinner(humanchoice,computerchoice);
    console.log('winner is',result);
    var info=winner(result[0],result[1]);
    console.log(info);
    rpsfront(info,humanchoice,computerchoice);
}
function randomchoice(){
    return Math.floor(Math.random()*3);
}
function originalchoice(number)
{
    return ['rock','paper','scissor'][number];
}

function decidewinner(humanchoice,computerchoice)
{
    var dbms={
        'rock':{'scissor':1,'rock':0.5,'paper':0},
        'scissor':{'rock':0,'scissor':0.5,'paper':1},
        'paper':{'rock':1,'paper':0.5,'scissor':0},

    }
    var humanscore=dbms[humanchoice][computerchoice];
    var computerscore=dbms[computerchoice][humanchoice];
    return [humanscore,computerscore];
}
function winner(humanscore,computerscore)
{
    if(humanscore>computerscore)
    {
        return {'message':'You Won','color':'green'};
    }
    else if(computerscore>humanscore)
    {
        return {'message':'You Lost','color':'red'};
    }
    else{
        return {'message':'Match Tied','color':'yellow'};
    }
}
function rpsfront(info,humanchoice,computerchoice){
    var imgdbms={
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissor':document.getElementById('scissor').src,
    }
    var humandiv=document.createElement('div');
    var computerdiv=document.createElement('div');
    var messagediv=document.createElement('div');
    humandiv.innerHTML="<img src='"+imgdbms[humanchoice]+"'height='150' width='150' style='box-shadow:0px 10px 50px rgba(37,50,233,1);'>"
    messagediv.innerHTML="<h1 style='color:"+info['color']+";font-size:60px;padding:30px;'>"+info['message']+"</h1>"
    computerdiv.innerHTML="<img src='"+imgdbms[computerchoice]+"'height='150' width='150' style='box-shadow:0px 10px 50px rgba(243,38,24,1);'>"


    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();
    document.getElementById('rps').appendChild(humandiv);
    document.getElementById('rps').appendChild(messagediv);
    document.getElementById('rps').appendChild(computerdiv);

}