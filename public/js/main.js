class Boss {
    constructor(nom,force,pv){
        this.nom=nom;
        this.force=force;
        this.pv=pv;
    }
}
class Heros {
    constructor(nom,force,pv,posture,particularite){
        this.nom=nom;
        this.force=force;
        this.pv=pv;
        this.posture=posture;
        this.particularite=particularite;
        this.posture = (x) => {
            this.posture=prompt("choissisez attaque ou defense");
            switch (this.posture) {
            
                case "attaque":
                    console.log("vous etes en attaque vous infligez 20% plus de dégât");   
                    this.force=(this.force/100)*20;
                    console.log(this.force);
                    // x.force=x.force/2
                    
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
        this.guerrier = () => {
            if (this.particularite=4) {
                console.log("vous etes guerrier et vous avez 4 point de rage vous infligez 25% de dégât en plus");   
                this.force=(this.force/100)*25;
                console.log(this.force);                
            }
        }
        this.mage = () => {
            if (this.particularite=4) {
                
                
            }
        }
        };
        
    }



let sauron = new Boss ("Sauron",1,0);
let chronos = new Boss ("Chronos",0,0);
let lilith = new Boss ("Lilith",0,0);

let guerrier = new Heros ("artus",100,0,"",0)
let mage = new Heros ("ariel",0,0,"",7)
let archer = new Heros ("eric",0,0,"",0)

artus.posture(sauron)
console.log(artus.posture);

