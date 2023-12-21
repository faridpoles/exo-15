var nbr = 1;
while (nbr <2 || nbr >9) {
   var nbr = parseInt(prompt("Quelle table de multiplication voulez-vous consulter entre celle de 2 et celle de 9 !"));
    if (nbr <2) {
        alert("Je ne sais calculer qu'à partir de la table de 2 !")
    }
    else if (nbr > 9) {
        alert("Je ne peux calculer que jusqu'à la table de 9 !")
    }
    else {
        alert("Vous avez chosi la table de " + nbr + " Nous allons vous la fournir, veuillez patienter...")
    }
}
document.write("Voici la table de " + nbr + " fourni par les soins de votre serviteur");
for (i=1;i < 10; i++) {
    
    document.write("<br>" + nbr + " * " + i + " = " + nbr * i);
}
