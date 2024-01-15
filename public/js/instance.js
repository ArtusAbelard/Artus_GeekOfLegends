// boss
import * as CLASS from "./class.js"

export let sauron = new CLASS.Boss ("Sauron",50,500);
export let chronos = new CLASS.Boss ("Chronos",40,500);
export let lilith = new CLASS.Boss ("Lilith",30,500);

// heros

export let guerrier = new CLASS.Heros ("artus",50,0,"",0,"guerrier")
export let mage = new CLASS.Heros ("ariel",60,0,"",7,"mage")
export let archer = new CLASS.Heros ("eric",70,0,"",6,"archer")

export let heros = [guerrier,mage,archer]

