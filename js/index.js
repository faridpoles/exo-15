var nbr = 1;
while (nbr <2 || nbr >9) {
   var nbr = parseInt(prompt("Quelle table de multiplication voulez-vous consulter entre celle de 2 et celle de 9 !"));
    if (nbr <2) {
        alert("Un peu plus haut !")
    }
    else if (nbr > 9) {
        alert("Un peu plus bas !")
    }
    else {
        alert("Vous avez chosi la table de " + nbr + " Nous allons vous la fournir, veuillez patienter...")
    }
}
if (nbr === 2) {
    document.write("Voici la table de 2 fourni par les soins de votre serviteur ");
    for (i = 1; i <=10 ; i++) {
        document.write("<br/> 2 * " + i + " = " + i*2);
    }
    } else if (nbr === 3) {
        document.write("Voici la table de 3 fourni par les soins de votre serviteur ");
        for (i = 1; i <=10 ; i++) {
            document.write("<br/> 3 * " + i + " = " + i*3);
        }
    } else if (nbr === 4) {
        document.write("Voici la table de 4 fourni par les soins de votre serviteur ");
        for (i = 1; i <=10 ; i++) {
            document.write("<br/> 4 * " + i + " = " + i*4);
        }
    } else if (nbr === 5) {
        document.write("Voici la table de 5 fourni par les soins de votre serviteur ");
        for (i = 1; i <=10 ; i++) {
            document.write("<br/> 5 * " + i + " = " + i*5);
        }
    } else if (nbr === 6) {
        document.write("Voici la table de 6 fourni par les soins de votre serviteur ");
        for (i = 1; i <=10 ; i++) {
            document.write("<br/> 6 * " + i + " = " + i*6);
        }
    } else if (nbr === 7) {
        document.write("Voici la table de 7 fourni par les soins de votre serviteur ");
        for (i = 1; i <=10 ; i++) {
            document.write("<br/> 7 * " + i + " = " + i*7);
        }
    } else if (nbr === 8) {
        document.write("Voici la table de 8 fourni par les soins de votre serviteur ");
        for (i = 1; i <=10 ; i++) {
            document.write("<br/> 8 * " + i + " = " + i*8);
        }
    } else {
        document.write("Voici la table de 9 fourni par les soins de votre serviteur ");
        for (i = 1; i <=10 ; i++) {
            document.write("<br/> 9 * " + i + " = " + i*9);
        }
    }