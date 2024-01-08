class Boss {
    constructor(nom,force,pv){
        this.nom=nom;
        this.force=force;
        this.pv=pv;
    }
}
class Heros {
    constructor(nom,force,pv,posture){
        this.nom=nom;
        this.force=force;
        this.pv=pv;
        this.posture=posture;
        this.posture = (x) => {
            this.posture=prompt("choissisez attaque ou defense");
            switch (this.posture) {
            
                case "attaque":
                    console.log("vous etes en attaque vous infligez 20% plus de dégât");   
                    this.force=(this.force/100)*20;
                    console.log(this.force);
                    
                    break;
                case "defense":
                    console.log("vous etes en defense vous prenez moitier moin de degats");
                    x.force=x.force/2
                    console.log(x.force);   
                    break;
                default:
                    console.log("merci de rentrer attaque ou defense");
                    break;
            }
            }
        }
    }



let sauron = new Boss ("Sauron",1,0);
let chronos = new Boss ("Chronos",0,0);
let lilith = new Boss ("Lilith",0,0);

let artus = new Heros ("artus",100,0,"")
let ariel = new Heros ("ariel",0,0,"")
let eric = new Heros ("eric",0,0,"")

artus.posture(sauron)
console.log(artus.posture);

