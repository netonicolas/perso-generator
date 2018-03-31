import { Equipement } from '../equipement/equipement';
import {Sort } from '../sort/sort';
export class Personnage{
	
	public  nom:string;
	public prenom:string;
	public age:number;
	public genre:string;
	public classe:any;
	public race:any;
	public niveau:number;
	public force:number;
	public dex:number;
	public const:number;
	public int:number;
	public sag:number;
	public cha:number;
	public ca:number;
	public vitesse:number;
	public pv:number;
	public langue:any[];
	public pp:number;
	public pc:number;
	public pa:number;
	public po:number;
	public weapon:any;
	public armor:any;
	
	  constructor(){
		  	this.age=this.getRandomInt(12,60);
		    this.niveau=this.getRandomInt(1,20);
		    this.force=this.getRandomInt(1,20);
		    this.dex=this.getRandomInt(1,20);
		    this.const=this.getRandomInt(1,20);
		    this.sag=this.getRandomInt(1,20);
		    this.int=this.getRandomInt(1,20);
		    this.cha=this.getRandomInt(1,20);
		    this.pv=this.getRandomInt(1,30);
		    this.ca=this.getRandomInt(1,30);
		    this.pa=this.getRandomInt(0,500);
    		this.pp=this.getRandomInt(0,1);
    		this.pc=this.getRandomInt(0,999);
    		this.po=this.getRandomInt(0,300);
    		
	  }
	  
		  getNom(){
		  	return this.nom;
		  }
		  
		  getPrenom(){
		  	return this.prenom;
		  }
		  
		  getAge(){
		  	return this.age;
		  }
		  
		  getGenre(){
		  	return this.genre;
		  }
		  
		  getClasse(){
		  	return this.classe;
		  }
		  
		  getRace(){
		  	return this.race;
		  }
		  
		  getNiveau(){
		  	return this.niveau;
		  }
		  
		  getForce(){
		  	return this.force;
		  }
		  
		  getDex(){
		  	return this.dex;
		  }
		  
		  getConst(){
		  	return this.const;
		  }
		  
		  getInt(){
		  	return this.int;
		  }
		  
		  getSag(){
		  	return this.sag;
		  }
		  
			getCha(){
		  	return this.cha;
		  }
		  
		  getCa(){
		  	return this.ca;
		  }
		  
		  getVitesse(){
		  	return this.vitesse;	
		  }
		  
		  getPv(){
		  	return this.pv;	
		  }
		  
		  getLangue(){
		  	return this.langue;	
		  }
		  
			getPP(){
				return this.pp;	
			}
			
			getPC(){
				return this.pc;	
			}
			
			getPA(){
				return this.pa;	
			}
			
			getPo(){
				return this.po;	
			}
			
			getWeapon(){
				return this.weapon;	
			}
			
			getArmor(){
				return this.armor;	
			}
			
			 setNom(n){
       this.nom=n;
    }
    
    setPrenom(p){
      this.prenom=p;
    }
    
    setAge(a){
       this.age=a;
    }
    
    setGenre(g){
      this.genre=g;
    }
    
    setClasse(c){
      this.classe=c;
    }
    
    setRace(r){
       this.race=r;
    }
    
    setNiveau(n){
      this.niveau=n;
    }
    
    setForce(f){
       this.force=f;
    }
    
    setDex(d){
       this.dex=d;
    }
    
    setConst(c){
      this.const=c;
    }
    
    setInt(i){
      this.int=i;
    }
    
    setSag(s){
       this.sag=s;
    }
    
    setCha(c){
       this.cha=c;
    }
    
    setCa(c){
      this.ca=c;
    }
    
    setVitesse(v){
      this.vitesse=v;  
    }
    
    setPv(p){
      this.pv=p; 
    }
    
    setLangue(l){
      this.langue=l; 
    }
    
    setPP(p){
      this.pp=p; 
    }
    
    setPC(p){
      this.pc=p; 
    }
    
    setPA(p){
       this.pa=p; 
    }
    
    setPo(p){
      this.po=p; 
    }
    
    setWeapon(w){
      this.weapon=w; 
    }
    
    setArmor(a){
      this.armor=a; 
    }
	
	  getRandomInt(min, max) {
       return Math.floor(Math.random() * (max - min + 1)) + min;
    }
	  
	  
}