function Personne(nom , prenom , adresse , age){
  
this.nom = nom ; 
this.prenom = prenom; 
this.adresse = adresse; 
this.age = age;
  this.affiche = function(){
  console.log(this.prenom + " " + this.nom + " " +this.adresse + " " +this.age); 
}
};

var p1 = new Personne("Juin","Chris" ,"Fanjeaux" , 21);
p1.affiche(); 
