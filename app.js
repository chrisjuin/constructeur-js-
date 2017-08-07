function Eleve(id , prenom , nom , sexe ,age){

	this.id = id ; 
	this.prenom = prenom; 
	this.nom = nom; 
	this.sexe = sexe;
	this.age = age
	this.affiche = function(){
		console.log(this.id + " " + this.prenom + " " +this.nom + " " +this.sexe + " "); 
	}
};

var p1 = new Eleve("765","Chris" ,"Juin" , "Masculin" , 21);
p1.affiche(); 
