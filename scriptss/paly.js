

function coutinueGame(){
    // genate a random alfabet

    const alfabet=getArandomAlphabet();
    console.log('your random alphabet', alfabet);

    // jtejg  4wugj wg u 4g
    const currentA=document.getElementById('current-a');
    currentA.innerText=alfabet;
   

}





function play(){
    hideElementByID('home-screen');
    showElementByID('play-ground');
    coutinueGame();
}

function getArandomAlphabet(){
    const alphabetString='abcdefghijklmnopqrstuvwxyz';
    const alphabets=alphabetString.split('');
    console.log(alphabets);


    const randomNumber=Math.random()*25;
    const index=Math.round(randomNumber);
    

    const alfabet=alphabets[index];

    console.log(index, alfabet);
    return alfabet;
}