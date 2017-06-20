var user = document.getElementById("number");
var computer = "";

function randomNb(){
    var min = 1;
    var max = 101;

    var nbRandom = Math.floor(Math.random() * (max - min + 1)) + min; // Génère aléatoirement un nombre entre min et max

    computer = nbRandom;
}


randomNb();
//alert(computer);

document.getElementById("go").onclick = function () {

    if (user.value > 0 && user.value < 101) {
        if (user == computer) {
            alert("Bravo !");
        }
        if (user.value < computer) {
            alert("le nombre est plus grand !");
        }
        if (user.value > computer) {
            alert("le nombre est plus petit !");
        }
    }else {
        alert("c'est pas bon !");
    }


};

