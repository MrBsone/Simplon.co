###
### VARIABLES GLOBALES ###
##########################

#On initialise le nombre de tentative à 1
$nbcoups = 1

#On fais générer un nombre entier entre 1 et 100 ( 1 et 100 inclus)
NB_COMPUTEUR = rand(1..100)


#On affiche ce que l'utilisateur doit faire pour jouer
print"Saisissez un nombre entier entre 1 et 100"


###
### METHODES ###
################

##
# Cette méthode récupère le nombre rentré par l'utilisateur et la renvois pour être utilisée en dehors de la méthode
##
def menu
  choix = 0

  #ici on gère les cas limites : Tant que choix est inférieur à 1 ou supérieur à 100, on réaffiche la demande
  while choix < 1 or choix > 100
    print  "\nVotre choix : "
    choix = gets.chomp.to_i

  end

  #On retourne la valeur rentrée par l'utilisateur
  return choix

end

#On récupère cette même valeur
choix = menu

#Tant que choix n'est pas égal à NB_COMPUTEUR...
until choix == NB_COMPUTEUR do

  #On test SI choix lui est inférieur
  if choix < NB_COMPUTEUR
    print "Le nombre à trouver est supérieur\n"

  #SINON SI choix lui est supérieur
  elsif choix > NB_COMPUTEUR
    print "Le nombre à trouver est inférieur\n"

  end

  #On incrémente la variable $nbcoups de 1
  $nbcoups += 1

  #On renvois à la méthode menu pour demander à nouveau à l'utilisateur de rentrer un nouveau nombre
  choix = menu

end

#Quand choix est égal à NB_COMPUTEUR on affiche la victoire et le nombre de tentative(s)
puts "Bravo vous avez gagné(e) en #{$nbcoups} tentative(s)"



=begin

  Documentation :

        - $nomvariable               = variable globale
        - NOM_VARIABLE               = Les constantes remplissent la même fonction que les variables,
                                       à la différence près que vous ne devez pas modifier leur valeur tout au long
                                       du programme.
        - def nomméthode(paramètres) = Ceci est une méthode (semblable à une fonction)
        - gets                       = récupère la chaîne de caractères
        - .chomp                     = supprime les chaînes de caractères \n et \r
        - .to_i                      = retourne un entier

/////

Les variables globales et les constantes peuvent être utilisées dans tout le programme
contrairement aux variables locales

/////

Les méthodes sont similaires aux fonctions à quelques détails près :

        - Les méthodes ne peuvent pas être utilisées dans d'autres méthodes, pour pallier au problème :

              - il faut retourner sa valeur dans une variable préalablement initialisée (return nomdelavariable)

/////

Lors de l'entrée, Ruby ajoute automatiquement une ligne vierge (ou nouvelle ligne) après chaque bit d'entrée;
Chomp supprime cette ligne supplémentaire. (Votre programme fonctionnera bien sans chomp, mais vous obtiendrez
des lignes vierges supplémentaires partout.)

/////
=end



