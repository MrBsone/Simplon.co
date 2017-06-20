var listContact = [{
  prenom : "Maurice",
  nom : "l'invocateur",
  numero : "0123456789"
}, {
  prenom : "Arnold",
  nom : "l'invoqué",
  numero : "0123456789"
}];

function printList() {
  var todelete = document.body.getElementsByTagName('ul')[0];
    if (todelete != null){
    document.body.removeChild(todelete);
  }

  var chaine = "";
  var liste = document.createElement('ul');


  for (var elem in listContact){

    chaine = chaine + "<li>" + listContact[elem].prenom + " " + listContact[elem].nom + " " + listContact[elem].numero + "</li>";

  }

liste.innerHTML = chaine;

document.body.append(liste);
};

var submit = document.getElementById('ajouter');

submit.onclick = function(defaut){

  defaut.preventDefault();

  var inputPrenom = document.forms['myForm'].elements['prenom'].value;
  var inputNom = document.forms['myForm'].elements['nom'].value;
  var inputNumero = document.forms['myForm'].elements['numero'].value;

  var monTableau = {
    'prenom' : inputPrenom,
    'nom' : inputNom,
    'numero' : inputNumero
  };

  listContact.push(monTableau);

  printList();
};




// MARCHE MAL

var submitSearch = document.getElementById('recherche');
var search = document.getElementById('rechercher');

submitSearch.onclick = function searching(defaut) {
  defaut.preventDefault();

  var liste2 = document.createElement('ul');
  recherche = search.value;
  element = "";

    for (i = 0; i < listContact.length; i++) {
      if (listContact[i].prenom == recherche || listContact[i].nom == recherche || listContact[i].numero == recherche) {
        element += "<li>" + texteContact(listContact[i]) + "</li>";
      }
    }

    liste2.innerHTML = element;
    document.body.append(liste2);
}

function texteContact(contact) {
    alert(contact.prenom + " " + contact.nom + " (" + contact.numero + ")");
}

// JUSQU A LA



printList();
