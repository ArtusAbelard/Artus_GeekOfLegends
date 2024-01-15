export class Boss {
    constructor(nom,force,pv){
        this.nom=nom;
        this.force=force;
        this.pv=pv;
    }
}
export class Heros {
    constructor(nom,force,pv,posture,particularite,type){
        this.nom=nom;
        this.force=force;
        this.pv=pv;
        this.posture=posture;
        this.particularite=particularite;
        this.type=type
        this.posture = () => {
            this.posture=prompt("choissisez attaque ou defense");
            switch (this.posture) {
            
                case "attaque":
                    console.log(`${this.nom} est en attaque vous infligez 20% plus de dégât`);  
                     
                    // this.force=(this.force/100)*20;
                    // console.log(this.force);
                    
                    
                    break;
                case "defense":
                    console.log(`${this.nom} est en defense vous prenez moitier moin de degats`);
                    
                    // x.force=x.force/2
                    // console.log(x.force);   
                    break;
                default:
                    console.log("merci de rentrer attaque ou defense");
                    break;
            }
            }
        this.guerrier = () => {
            if (this.particularite>=4) {
                console.log("vous etes guerrier et vous avez 4 point de rage vous infligez 25% de dégât en plus");   
                this.force=(this.force/100)*25;
                console.log(this.force);                
            }
        }
        this.mage = () => {
            if (this.particularite<=1) {
                console.log("vous etes mage et vous avez plus de point de mana vous passez votre tours et recuperer 7 de mana");  
                this.particularite=7
                
            }
        }
        this.archer = () => {
            if (this.particularite<=0) {
                console.log("vous etes archer et vous avez plus de fleches vous passez votre tours et recuperer 6 fleches");  
                this.particularite=6 
            }
        }
        };
        
    }