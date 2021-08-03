

var energy=80;
energy=energy+10
    
function feed(){    
   energy=energy+10;
   console.log(energy);
   display();
}

function display(){
    document.getElementById("info").innerHTML=`<p>Energy: ${energy}</p>`;
}
display();


var tired=energy



function play(){
    tired=energy-10 
    console.log(tired);
    display2();
}

function display2(){
    document.getElementById("info").innerHTML=`<p>Play: ${tired}</p>`;

}
display2();