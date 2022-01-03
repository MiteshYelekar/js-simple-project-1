//clallenge 1 :Age and Days

function ageindays(){
var birthyear=prompt("what year u were born");
var agedays=(2022-birthyear)*365;
var h1 = document.createElement('h1');
var textanswer=document.createTextNode('You are ' +agedays +' old.');
h1.setAttribute('id','ageindays');
h1.appendChild(textanswer);
document.getElementById('flex-box-result').appendChild(h1);

console.log(agedays);
}

function reset(){
    document.getElementById('ageindays').remove();
}