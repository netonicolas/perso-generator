import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import {Personnage} from './personnage/personnage';



import {HttpClient} from '@angular/common/http';


import 'rxjs/add/operator/map';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

@Injectable()
export class AppComponent  {
  name = 'Angular 5';
  
  private apiUrlRace = 'http://www.dnd5eapi.co/api/races';
  private apiUrlClasse = 'http://www.dnd5eapi.co/api/classes';
  private apiUrlFeatures = 'http://www.dnd5eapi.co/api/features';
  private apiUrlSkills = 'http://www.dnd5eapi.co/api/skills';
  private apiUrlLanguage = 'http://www.dnd5eapi.co/api/languages';
  private apiUrlSpell = 'http://www.dnd5eapi.co/api/spells';
  private apiUrlEquipement = 'http://www.dnd5eapi.co/api/equipment';
  private apiUrlName='https://randomuser.me/api/?nat=NL';
  
  
  private indexRace:number;
  private indexClasse:number;
  
  
  firstName:string;
  lastName:string;
  race:string;
  races:any[]=[];
  classes:any[]=[];
  speed:number;
  classe:string;
  age:number;
  langues:string[]=[];
  equipement:any={};
  level:number;
  data : any = {};
  results : any={};
  count : number;
  pc : number;
  pa : number ;
  po :number;
  pp : number;
  weapon:any;
  indexWeapon:number;
  proficiencies:any[]=[];
  force:number;
  dex:number;
  const:number;
  sag:number;
  int:number;
  cha:number;
  pv:number;
  ca:number;
  size:number;
  armor:any;
  tab_weapon:any = [];
  tab_armor :any= [];
  perso:Personnage;
  affiche:boolean=false;
  load:boolean=false;
  url_perso:string;
  
  
  constructor(private http: HttpClient){
   
    
    this.getEquipement();
    this.getRaces();
    this.getClasses();
    console.log(this.races);
    console.log(this.classes);
    this.perso=new Personnage();
    
    
  }  
  
   delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  
  generate(){
    console.log(this.load);
    this.load=true;
     setTimeout(()=>{
          this.getName();
    this.getRace();
    this.getClasse();
    this.perso.setWeapon(this.getWeapon());
    this.perso.setArmor(this.getArmor());
 
    this.perso.setCa(this.getRandomInt(1,30));
    this.perso.setPv(this.getRandomInt(1,30));
    
    this.perso.setAge(this.getRandomInt(12,60));
    this.perso.setNiveau(this.getRandomInt(1,20));
    this.perso.setForce(this.getRandomInt(1,20));
    this.perso.setDex(this.getRandomInt(1,20));
    this.perso.setConst(this.getRandomInt(1,20));
    this.perso.setSag(this.getRandomInt(1,20));
    this.perso.setInt(this.getRandomInt(1,20));
    this.perso.setCha(this.getRandomInt(1,20));
    this.perso.setPA(this.getRandomInt(1,20));
    this.perso.setPo(this.getRandomInt(1,20));
    this.perso.setPP(this.getRandomInt(1,20));
    this.perso.setPC(this.getRandomInt(1,20));
    console.log(this.perso.getWeapon());
    console.log(this.perso.getArmor());
    //this.getArgent();
    this.load=false;
    
    this.affiche=true;}, 5000);
 
  }
  
  getRandomInt(min, max) {
       return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
  getWeapon(){
          this.size=this.tab_weapon.length;
          var random=this.getRandomInt(0,this.size);
          return this.tab_weapon[random];
          
  }
  
  getArmor(){
          this.size=this.tab_armor.length;
          var random=this.getRandomInt(0,this.size);
          return this.tab_armor[random];
  }
  
  getEquipements(){
      this.getData(this.apiUrlEquipement).subscribe(data =>{
          data.results.forEach(element => this.equipements.push);
          console.log(data);
      });
  }
  
getData(url){
  return this.http.get(url);
}
   getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
  getArgent(){
    this.pc = this.getRandomInt(0, 100);
    this.pa = this.getRandomInt(0,100);
    this.po = this.getRandomInt(0,300);
    this.pp = 0;
  }
    
    
  getRaces(){
    this.getData(this.apiUrlRace).subscribe(data =>{    
        data.results.forEach(element => this.races.push(element));
    });
  }
  getClasses(){
    this.getData(this.apiUrlClasse).subscribe(data =>{    
        data.results.forEach(element => this.classes.push(element));
    });
  }
    
getRace(){  
    
      var count_parent=this.races.length;
      var a  = this.getRandomInt(1,count_parent);
      var url_Index=this.getUrlIndex(this.apiUrlRace,a);
      this.getData(url_Index).subscribe(data =>{
          this.perso.setVitesse(data.speed);
          this.perso.setRace(data.name);
          //this.indexRace=data.index;
          
          this.perso.setLangue(data.languages);
          console.log(this.perso.getLangue());
      });
    
}

getClasse(){
      var count_parent=this.races.length;
      var a  = this.getRandomInt(1,count_parent);
      var url_Index=this.getUrlIndex(this.apiUrlClasse,a);
      this.getData(url_Index).subscribe(data =>{    
      this.perso.setClasse(data.name);
      this.indexClasse=data.index;
      this.proficiencies=data.proficiencies;
      });
}

  getUrlIndex(url,index){
    return url+'/'+index;    
  }
  
  getEquipement(){
    
         this.getData(this.apiUrlEquipement).subscribe(data =>{  
           data.results.forEach(element=>{
              this.getData(element.url).subscribe(data2 =>{
                if(data2.equipment_category == "Weapon"){
                  this.tab_weapon.push(data2);
                }
                if(data2.equipment_category == "Armor"){
                  this.tab_armor.push(data2);
                }
              }
              );
           });
         });
    }
  
  getName(){
    this.getData(this.apiUrlName).subscribe(data =>{  
      this.perso.setNom(data.results[0].name.last);
      this.perso.setPrenom(data.results[0].name.first);
      this.perso.setGenre(data.results[0].gender);
      this.url_perso=this.getPersoUrl(); 
      console.log(this.url_perso);
    });
    
  }
 getPersoUrl(){
   console.log(this.perso.getClasse());
   console.log(this.perso.getRace());
   console.log(this.perso.getGenre());
   
    switch(this.perso.getRace()){
      case 'Dwarf':
        if(this.perso.getGenre()=="male"){
            return "https://i.pinimg.com/originals/1b/90/3e/1b903e834cb7e6f8c65520eb997725a3.png";
        }else{
            return "https://i.pinimg.com/originals/18/9b/5c/189b5cee03911e5aa7d5e5747d348cbe.png";
        }
        break;
      case 'Elf':
        if(this.perso.getGenre()=="male"){
            return "https://i.pinimg.com/564x/5a/55/c5/5a55c5e070c6805a92ae67d5097a62bd.jpg";
        }else{
            return "https://i.pinimg.com/564x/b1/fd/b3/b1fdb3455261348eff23b3d126343498.jpg";
        }
        break;
      case 'Halfling':
        if(this.perso.getGenre()=="male"){
            return "https://vignette.wikia.nocookie.net/forgottenrealms/images/f/fc/Sword_Coast_Legends_-_Companion_-_Belamy_Lightfingers.png/revision/latest?cb=20150523224149";
        }else{
            return "https://i.pinimg.com/564x/8a/af/51/8aaf5133b8ead159206906d2266d2ac8.jpg";
        }
        break;
      case 'Human':
        if(this.perso.getGenre()=="male"){
            return "https://i.pinimg.com/564x/08/69/71/086971ec519d01df20ae9cb4bf5e411d.jpg";
        }else{
            return "https://i.pinimg.com/564x/0e/ee/1e/0eee1e79033a0aabfeffaa29a383ca6c.jpg";
        }
        break;
      case 'Dragonborn':
        if(this.perso.getGenre()=="male"){
            return "https://i.pinimg.com/736x/f6/de/f5/f6def573b08208401b573dac6bcbc991.jpg";
        }else{
            return "https://i.pinimg.com/564x/27/a3/68/27a368cda4d9425b967863cadd7b523f.jpg";
        }
        break;
        
      case 'Gnome':
        if(this.perso.getGenre()=="male"){
            return "https://i.pinimg.com/564x/fc/08/52/fc0852c0923422f5c165539dc4fae36f.jpg";
        }else{
            return "https://i.pinimg.com/564x/cd/ac/5f/cdac5f5b0762f182a119ed466f266cb1.jpg";
        }
        break;
        
      case 'Half-Elf':
        if(this.perso.getGenre()=="male"){
            return "https://i.pinimg.com/564x/17/ee/d7/17eed74db59521c821394dd6e3d22f02.jpg";
        }else{
            return "https://i.pinimg.com/564x/f9/1a/7a/f91a7a9ee405219785a9bc5efa313675.jpg";
        }
        break;
        
      case 'Half-Orc':
        if(this.perso.getGenre()=="male"){
            return "https://i.pinimg.com/564x/96/ed/95/96ed95721bc29f4dfa0010e5e6d7b176.jpg";
        }else{
            return "https://i.pinimg.com/564x/2a/98/c8/2a98c8e2fd7076e085bed8b1e7519344.jpg";
        }
        break;  
      
      case 'Tiefling':
        if(this.perso.getGenre()=="male"){
            return "https://i.pinimg.com/564x/bd/b6/66/bdb6665f7b2b89f70591cea385be1b73.jpg";
        }else{
            return "https://i.pinimg.com/564x/7c/8a/11/7c8a11df78798c25f5f3027f651114c6.jpg";
        }
        break; 
        default:
        break;
    }
  }
  
}
