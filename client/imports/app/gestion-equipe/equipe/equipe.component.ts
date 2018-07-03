import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.scss']
})
export class EquipeComponent {
	@Input() equipe;
  @Input() personnes;
  
  onEnleverEquipe(){
    Meteor.call('removeEquipe', this.equipe._id);
  }

  onPersonneDelete(personneId:string){
    Meteor.call('removePersonneFromEquipe', this.equipe._id, personneId);
  }
  
  onAjouterPersonne(f:NgForm){
    let idPersonne = f.value["personne"];
    Meteor.call('addPersonneToEquipe', this.equipe._id, idPersonne);
  }
  
  getPersonnes() {
    if(this.personnes != undefined) {
      return this.equipe.personnesIds.map(personneId => (
        this.personnes._data.find(personne => personne._id === personneId)
      ));
    }
  }

  getAllPersonnes() {
    if (this.personnes != undefined) {
      return this.personnes._data.filter(personne => (
        personne._id !== this.equipe.personnesIds.find(personneId => (
          personne._id === personneId
        ))
      ));
    }
  }
  
}
