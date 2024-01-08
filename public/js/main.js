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
        this.posture = () => {
            this.posture=console.log(prompt("choissisez attaque ou defense"));
            if (this.posture="attaque") {
                console.log("vous etes en attaque vous infligez 20% plus de dégât");   
                this.force=(this.force/100)*20;
                console.log(this.force);
            }
        }
    }
}


let sauron = new Boss ("Sauron",0,0);
let chronos = new Boss ("Chronos",0,0);
let lilith = new Boss ("Lilith",0,0);

let artus = new Heros ("artus",100,0,["attaque","defence"])
let ariel = new Heros ("ariel",0,0,"")
let eric = new Heros ("eric",0,0,"")

artus.posture()
