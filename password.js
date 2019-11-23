function password_generator( len ) {
    var length = (len)?(len):(10);
    var string = "abcdefghijklmnopqrstuvwxyz"; 
    var numeric = '0123456789';
    var punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    var password = "";
    var character = "";
    var crunch = true;
    while( password.length<length ) {
        entity1 = Math.ceil(string.length * Math.random()*Math.random());
        entity2 = Math.ceil(numeric.length * Math.random()*Math.random());
        entity3 = Math.ceil(punctuation.length * Math.random()*Math.random());
        hold = string.charAt( entity1 );
        hold = (password.length%2==0)?(hold.toUpperCase()):(hold);
        character += hold;
        character += numeric.charAt( entity2 );
        character += punctuation.charAt( entity3 );
        password = character;
    }
    password=password.split('').sort(function(){return 0.5-Math.random()}).join('');
    return password.substr(0,len);
}



document.getElementById('bttn1').addEventListener('click', function() {
    var generatedPassword = password_generator(10)
    var textBox = document.getElementById('textarea')
    textBox.textContent = generatedPassword
    

})

document.getElementById('bttn2').addEventListener('click', function(copyText) {
    var copyText = document.getElementById('textarea')
    document.execCommand('copy');
    alert("Copied The Text: " + copyText.innerText);


})


