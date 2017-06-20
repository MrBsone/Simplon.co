var array = ["stone", "paper", "ciseaux" ];
var affich = document.getElementById("affi");
var pierre = document.getElementById("stone");
var feuille = document.getElementById("paper");
var ciseaux = document.getElementById("ciseaux");
var computer = "";
var scoreComputer = 0;//Score de l'ordinateur
var scoreUser = 0;//Score du joueur
var winRatio = 0;//Ratio de victoire
var cpt = 1;

// Cette fonction affiche les éléments
function affichage() {

    affich.innerHTML = "<p>Votre Score : " + scoreUser + "</p>"
        + "<p>Score de l'ordinateur : " + scoreComputer + "</p>"
        + "<p>Ratio de victoire : " + winRatio + "</p>";

}

// Cette fonction génère aléatoirement un nombre entre min et max
function random() {
    var min = 0;
    var max = 2;

    var nbRandom = Math.floor(Math.random() * (max - min + 1)) + min; // Génère aléatoirement un nombre entre min et max

    computer = array[nbRandom];
}

// Cette fonction lance la fonction game() avec le paramettre Pierre
pierre.addEventListener("click", function () {
    game("Pierre");
    ratio();
});

// Cette fonction lance la fonction game() avec le paramettre Feuille
feuille.addEventListener("click", function () {
    game("Feuille");
    ratio();
});

// Cette fonction lance la fonction game() avec le paramettre ciseaux
ciseaux.addEventListener("click", function () {
    game("Ciseaux");
    ratio();
});


// comparaison entre le choix du joueur et le choix de l'ordinateur
function game(_event) {
    var un = "stone";
    var deux = "paper";
    var trois = "ciseaux";

    random();

    switch (_event){
        case "Pierre" :

            // Si Pierre est égale à Pierre
            if (un == computer){
                alert("Egalité");
            }

            // si l'ordinateur joue ciseaux
            if (computer == "ciseaux"){
                alert("Gagné !");
                incrScoreUser();
            }

            // si l'ordinateur joue Papier
            if (computer == "paper"){
                alert("Perdu !");
                incrScoreComputer();
            }
            break;
        case "Feuille" :

            //Si Feuille est égale à Feuille
            if (deux == computer){
                alert("Egalité");
            }

            // Si l'ordinateur joue Pierre
            if (computer == "stone"){
                alert("Gagné !");
                incrScoreUser();
            }

            // si l'ordinateur joue ciseaux
            if (computer == "ciseaux"){
                alert("Perdu !");
                incrScoreComputer();
            }
            break;

        case "Ciseaux" :

            //si ciseaux est égale à ciseaux
            if (trois == computer){
                alert("Egalité");
            }

            // si l'ordinateur joue Papier
            if(computer == "paper"){
                alert("Gagné !");
                incrScoreUser();
            }

            // Si l'ordinateur joue Pierre
            if (computer == "stone"){
                alert("Perdu !");
                incrScoreComputer();
            }
            break;
    }
}

// Mise à jour du score du joueur
function incrScoreUser(){
    scoreUser = scoreUser + cpt;
    affichage();
}

//Mise à jour du score de l'ordinateur
function incrScoreComputer() {
    scoreComputer = scoreComputer + cpt;
    affichage();
}

//Mise à jour du ratio de victoire
function ratio() {
    winRatio = scoreUser / (scoreUser + scoreComputer);
    affichage();
}

//Affichage au chargement de la page
affichage();
