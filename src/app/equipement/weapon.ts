import { Equipement } from './equipement';

export class Weapon extends Equipement{
	categorie:string;
	porte:string;
	categorie_porte:string;
	quantite_cout:string;
	quantite_unit:string;
	nb_de:number;
	value_de:number;
	tye_dmg:string;
	poid:number;
}