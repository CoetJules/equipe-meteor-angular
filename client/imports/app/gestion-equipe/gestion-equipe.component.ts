import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Observable, Subscription } from 'rxjs';
import { MeteorObservable } from 'meteor-rxjs';

import { EquipesObservable as Equipes } from '../../../../imports/collections/equipes';
import { PersonnesObservable as Personnes } from '../../../../imports/collections/personnes';


@Component({
  selector: 'gestion-equipe',
  templateUrl: './gestion-equipe.component.html',
  styleUrls: ['./gestion-equipe.component.scss']
})
export class GestionEquipeComponent implements OnInit {
  team: string;
  
  equipes: Observable<any[]>;
  equipeSubscription: Subscription;
  
  personnes: Observable<any[]>;
  personneSubscription: Subscription;

  
  ngOnInit(){
   
    this.equipeSubscription = MeteorObservable.subscribe('equipes').subscribe(() => {
      this.equipes = Equipes.find();
    });
    
    this.personneSubscription = MeteorObservable.subscribe('personnes').subscribe(() => {
      this.personnes = Personnes.find();
    });
    
  }
  
  onAjouterEquipe(){
    const nom = this.team;
    Meteor.call('addEquipe', nom, (err) => { console.log(err) });
    this.team='';
  }
  
  onAjouterPersonne(f:NgForm){    
    const prenom = f.value["prenom"];
    const nom =  f.value["nom"];
    const teamId =  f.value["team"];
    
    Meteor.call('addPersonne', prenom, nom, (err, res) => {
      if (teamId && res)
        Meteor.call('addPersonneToEquipe', teamId, res);
    });
    
    f.controls['nom'].reset();
    f.controls['prenom'].reset();
    f.controls['team'].setValue(0);
  }
  
  getEquipes(_id:string){
    const equipes = this.equipes._data.filter(equipe => 
      equipe.personnesIds.find(personneId => personneId === _id)
    );
    
    return equipes;
  }
  
  onPersonneDelete(_id:string){
    if (confirm("Voulez vous supprimer ?")) {
      const personneEquipes = this.getEquipes(_id);

      if (personneEquipes.length > 0) {
        personneEquipes.forEach(equipe => {
          Meteor.call('removePersonneFromEquipe', equipe._id, _id)
        });
      }

      Meteor.call('removePersonne', _id);
    }
  }
  
  
  
}
