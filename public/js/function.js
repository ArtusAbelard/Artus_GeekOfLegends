import { chronos, lilith, sauron , guerrier , mage ,archer} from "./instance.js";

let bosschoice
let bossrandomadversaire 

let randomchose = () => {
    if (Math.random() * 100 < 33.3333) {
        bosschoice=sauron
        console.log(`${bosschoice.nom} a ete choisis `);
    }
    else if (Math.random() * 100 < 33.3333) {
        bosschoice=chronos
        console.log(`${bosschoice.nom} a ete choisis `);
    }else{
        bosschoice=lilith
        console.log(`${bosschoice.nom} a ete choisis `);
    }
}
let bossrandomchose= () => {
    if (Math.random() * 100 < 33.3333) {
        bossrandomadversaire=guerrier
        console.log(`${bossrandomadversaire.nom} a ete choisis comme adversaire contre ${bosschoice.nom}`);
    }
    else if (Math.random() * 100 < 33.3333) {
        bossrandomadversaire=mage
        console.log(`${bossrandomadversaire.nom} a ete choisis comme adversaire contre ${bosschoice.nom}`);
    }else{
        bossrandomadversaire=archer
        console.log(`${bossrandomadversaire.nom} a ete choisis comme adversaire contre ${bosschoice.nom}`);
    }
}



function timeout() {
  let timeout1;
  let timeout2;
  let timeout3;
  let timeout4;

  timeout1 = setTimeout(alertFunc1, 1000);
  timeout2 = setTimeout(alertFunc2, 2000);
  timeout3 = setTimeout(alertFunc3, 3000);
  timeout4 = setTimeout(alertFunc4, 4000);

}

function alertFunc1() {
  console.log("3");
}
function alertFunc2() {
    console.log("2");
}
function alertFunc3() {
    console.log("1");
}
function alertFunc4() {
    console.log("GO");
    console.log("");
}

// atack function

function ataqueguerrier(x,y) {
    if (y.pv>=1) {
        if (y.particularite>=4) {
            console.log("vous etes guerrier et vous avez 4 point de rage vous infligez 25% de dégât en plus");   
            x.pv=x.pv-(y.force+(y.force/100)*25);
            y.particularite=0
            console.log(`le boss n'a plus que ${x.pv} pv`);
            if (y.posture=="attaque") {
                console.log(`${y.nom} est en attaque degat augmenter de 20%`);
                x.pv=y.force+(y.force/100)*20;
                console.log(`le boss n'a plus que ${x.pv} pv`);
            }else{
                console.log(`${y.nom} est en defense ${y.nom} prend moin de degats`);
                x.pv=x.pv-y.force
                console.log(y.force);
                console.log(`le boss n'a plus que ${x.pv} pv`);   
    
            }           
        }else{
            console.log("vous etes guerrier et vous avez pas assez de point de rage vous infligez les dégâts normaux");
            x.pv=x.pv-y.force;
            y.particularite=y.particularite+1;
            console.log(`le ${y.type} a actuellement ${y.particularite} point de rage`);
            console.log(`le boss n'a plus que ${x.pv} pv`);
            if (y.posture=="attaque") {
                console.log(`${y.nom} est en attaque degat augmenter de 20%`);
                x.pv=x.pv-(y.force+(y.force/100)*20);
                console.log(`le boss n'a plus que ${x.pv} pv`);
            }else if (y.posture=="defense"){
                console.log(`${y.nom} est en defense ${y.nom} prend moitier moin de degats`);
                x.pv=x.pv-y.force
                console.log(`le boss n'a plus que ${x.pv} pv`);  
            };
        } 
        
    }else{
        console.log(`${y.type} est mort est ne joue donc plus !`);
    }
}
function ataquemage(x,y) {
    if (y.pv>=1) {
        if (y.particularite<=1) {
            console.log("vous etes mage et vous avez plus de point de mana vous passez votre tours et recuperer 7 de mana");  
            y.particularite=y.particularite+7
            console.log(`le ${y.type} a actuellement ${y.particularite} point de mana`);
        }else{
            console.log("vous etes mage et vous avez assez de point de mana vous infligez les dégâts normaux");
            x.pv=x.pv-y.force;
            y.particularite=y.particularite-2
            console.log(`le ${y.type} a actuellement ${y.particularite} point de mana`);
            console.log(`le boss n'a plus que ${x.pv} pv`);
            if (y.posture=="attaque") {
                console.log(`${y.nom} est en attaque degat augmenter de 20%`);
                x.pv=x.pv-(y.force+(y.force/100)*20);
                console.log(`le boss n'a plus que ${x.pv} pv`);
            }else if (y.posture=="defense"){
                console.log(`${y.nom} est en defense ${y.nom} prend moitier moin de degats`);
                x.pv=x.pv-y.force
                // console.log(y.force); 
                console.log(`le boss n'a plus que ${x.pv} pv`);  
            };
            
        }
        
    }else{
        console.log(`${y.type} est mort est ne joue donc plus !`);
    } 
}

function ataquearcher(x,y) {
    if (y.pv>=1) {
        if (y.particularite<=0) {
            console.log("vous etes archer et vous avez plus de fleches vous passez votre tours et recuperer 6 fleches");  
            y.particularite=6 
            console.log(`le ${y.type} a actuellement ${y.particularite} fleches`);
        }else{
            console.log("vous etes archer et vous avez assez de fléches vous infligez les dégâts normaux");
            y.particularite=y.particularite-2
            console.log(`le ${y.type} a actuellement ${y.particularite}fleches`);
            x.pv=x.pv-y.force;
            console.log(`le boss n'a plus que ${x.pv} pv`);  
            if (y.posture=="attaque") {
                console.log(`${y.nom} est en attaque degat augmenter de 20%`);
                x.pv=x.pv-(y.force+(y.force/100)*20);
                console.log(`le boss n'a plus que ${x.pv} pv`);
            }else if (y.posture=="defense"){
                console.log(`${y.nom} est en defense ${y.nom} prend moin de degats`);
                x.pv=x.pv-y.force
                // console.log(y.force); 
                console.log(`le boss n'a plus que ${x.pv} pv`);  
            } 
        }
        
    }else{
        console.log(`${y.type} est mort est ne joue donc plus !`);
    } 
}

function bossattack (x) {
    if (bossrandomadversaire.posture=="defense") {
    bossrandomadversaire.pv=bossrandomadversaire.pv-(x.force/2)
    console.log(`${x.nom} attaque ${bossrandomadversaire.nom} et ${bossrandomadversaire.nom} est en defense et ducoup n'a plus que ${bossrandomadversaire.pv} hp`);
    }else{
    
    bossrandomadversaire.pv=bossrandomadversaire.pv-x.force
    console.log(`${x.nom} attaque ${bossrandomadversaire.nom} et ${bossrandomadversaire.nom} n'est pas en defense et ducoup n'a plus que ${bossrandomadversaire.pv} hp`);
    }
}

function enigme () {
    if (bosschoice.pv<=100) {
        if (Math.random() * 100 < 33.3333) {
            console.log("Quel est l'animal le plus sourd du monde ?");
            let reponse1 = prompt("reponse?")
            if (reponse1=="La grenouille") {
                bosschoice.pv=0
                console.log("bien jouer les heros on gagner !");
            }else{
                guerrier.pv=0
                mage.pv=0
                archer.pv=0
                console.log("dommage c est La grenouille car elle fait « Coaaa, cooooa ».");
            }
        }
        else if (Math.random() * 100 < 33.3333) {
            console.log("Je commence la nuit et je termine le matin. Qui suis-je ?");
            let reponse2 = prompt("reponse?")
            if (reponse2=="n") {
                bosschoice.pv=0
                console.log("bien jouer les heros on gagner !");
            }else{
                guerrier.pv=0
                mage.pv=0
                archer.pv=0
                console.log("dommage c est La lettre « N »");
            }
            
            
        }else{
            console.log("Je transforme une plante en une planète. Qui suis-je ?");
            let reponse3 = prompt("reponse?")
            if (reponse3=="è") {
                bosschoice.pv=0
                console.log("bien jouer les heros on gagner !");
            }else{
                guerrier.pv=0
                mage.pv=0
                archer.pv=0
                console.log("dommage c est La lettre « è »");
            }
            
            
        }
        
    }if (bosschoice.pv<(guerrier.pv+mage.pv+archer.pv)) {
            console.log("les heros on gagner !");
            
        }else{
            console.log(`le boss ${bosschoice.nom} a gagner !`);
        }
    
}




export function lejeux() {
    guerrier.nom=prompt("entree un nom pour votre guerrier !")
    mage.nom=prompt("entree un nom pour votre mage !")
    archer.nom=prompt("entree un nom pour votre archer !")
    randomchose()
    guerrier.posture()
    mage.posture()
    archer.posture()

    while (guerrier.pv+mage.pv+archer.pv != 150 ){
        alert("veuillez répartir 150 pv pour vos 3 heros attention minimum 1hp par heros")
        guerrier.pv= +prompt("veuillez donnez les pv pour le guerrier");
        console.log(`le guerrier a ${guerrier.pv} pv`);
        mage.pv= +prompt("veuillez donnez les pv pour le mage");
        console.log(`le mage a ${mage.pv} pv`);
        archer.pv= +prompt("veuillez donnez les pv pour le archer");  
        console.log(`l'archer a ${archer.pv} pv`); 
    }
    console.log("parfait");

    while ( (guerrier.force+mage.force+archer.force != 120 ) && (guerrier.force,mage.force,archer.force >= 1) ) {
        alert("veuillez répartir 120 point de force pour vos 3 heros attention minimum 1hp par heros")
        guerrier.force= +prompt("veuillez donnez la force pour le guerrier");
        console.log(`le guerrier a ${guerrier.force} de force`);
        mage.force= +prompt("veuillez donnez la force pour le mage");
        console.log(`le mage a ${mage.force} de force`);
        archer.force= +prompt("veuillez donnez la force pour le archer");  
        console.log(`l'archer a ${archer.force} de force`); 
    }
    
    console.log("parfait");
    console.log("LE JEUX VA COMMENCER DANS :");
    timeout()
    let timeout5;
    timeout5 = setTimeout(alertFunc5, 5000);
    function alertFunc5() {
        while ((guerrier.pv+mage.pv+archer.pv>=1)||(bosschoice.pv>=1)){  //je ne comprend pas pourquoi mon || ne fonctionne pas ...
            ataqueguerrier(bosschoice,guerrier)
            console.log(" ");
            ataquemage(bosschoice,mage)
            console.log(" ");
            ataquearcher(bosschoice,archer);
            console.log(" ");
            bossrandomchose();
            console.log(" ");
            bossattack(bosschoice);
            console.log(" ");
            guerrier.posture=prompt("entree une nouvel posture attaque ou defense pour le guerrier");
            console.log(" ");
            console.log(`guerrier ce trouve en ${guerrier.posture}`);
            
            mage.posture=prompt("entree une nouvel posture attaque ou defense pour le mage");
            
            console.log(`le mage ce trouve en ${mage.posture}`);
           
            archer.posture=prompt("entree une nouvel posture attaque ou defense pour l archer");
            
            console.log(`l'archer ce trouve en ${archer.posture}`);
            console.log(" ");
            
        }
        enigme()
        console.log("jeux finit !");
    }

}
