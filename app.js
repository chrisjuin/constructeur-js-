function Eleve(id , prenom , nom , sexe ,age){

	this.id = id; 
	this.prenom = prenom; 
	this.nom = nom; 
	this.sexe = sexe;
	this.age = age;
	this.affiche = function(){
		console.log(this.id + " " + " Monsieur " + " " + this.prenom + " " +this.nom + " " +this.sexe + " " + this.age); 
	}
};

var p1 = new Eleve("765","Chris" ,"Juin" , "Masculin" , 21);
p1.affiche(); 




function Classe(){
	this.curIdEleve = 1; 
	this.eleves = [];
	this.addEleve = function(prenom , nom , age , sexe){
		var eleve = new Eleve(this.curIdEleve , prenom , nom , sexe , age); 
		this.eleves.push(eleve); 
		this.curIdEleve ++;
	} 
	
}; 

var classe1 = new Classe();
classe1.addEleve("Chris" , "Juin" , 21 , "Masculin"); 
classe1.addEleve("Leo" , "Subias" , 20 , "Masculin"); 


// Exercice avec les objets: Gestion d'une classe d'école

// Consignes pour l'exercice:
// faites l'appel des methodes avec les valeur dans votre programme ( pas besoin d'utiliser le prompt)
// faites l'affichage avec des console.log dans un premier temps
// Créer un objet Eleve
// Avec les attributs: id, prenom, nom, sexe, age
// Un constructeur avec les parametres correspondants aux attributs
// Une méthode affiche() qui affiche Monsieur/Madame Prenom Nom
// Créer un objet Classe
// Attributs: curIdEleve ( un incrément qui servira pour définir l'id unique de l'élève), eleves ( le tableau qui contiendra les élèves)
// Avec un constructeur sans parametres, qui initialise les attributs curIdEleve à 1 et eleves à tableau vide []
// Une methode addEleve( prenom, nom, sexe, age ) qui ajoute un élève (l'id de l'élève sera défini à partir de l'attribut curIdEleve) et incrémente curIdEleve.
// Une methode compteEleve( sexe ) qui compte le nombre d'eleve en fonction du sexe ( A pour tous, M pour hommes et F pour Femme)
// Une methode afficheEleves qui affiche tous les élèves ( en utilisant la méhode affiche de chaque éleve)
// Une méthode afficheStatClasse qui affiche le nombre total de la classe, le nombre de femme, le nombre d'homme, la moyenne d'age
