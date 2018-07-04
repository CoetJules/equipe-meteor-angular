import { Meteor } from 'meteor/meteor';

import { Equipes } from '../../../imports/collections/equipes';
import { Personnes } from '../../../imports/collections/personnes';

Meteor.methods({
  addEquipe(nom: string) {
    Meteor.call('isLoggedIn');

    Equipes.insert({
      nom,
      personnesIds: [],
    });
  },
  removeEquipe(_id: string) {
    Meteor.call('isLoggedIn');

    const equipe = Equipes.findOne({ _id });
    Meteor.call('isMine', equipe);

    Equipes.remove({
      _id,
    })
  },
  addPersonneToEquipe(_id: string, personneId: string) {
    Meteor.call('isLoggedIn');

    const equipe = Equipes.findOne({ _id });
    Meteor.call('isMine', equipe);

    const personne = Personnes.findOne({ _id: personneId });
    Meteor.call('isMine', personne);
    
    Equipes.update({
      _id,
    },
    {
      $push: {
        personnesIds: personneId,
      },
    });
  },
  removePersonneFromEquipe(_id: string, personneId: string) {
    Meteor.call('isLoggedIn');

    const equipe = Equipes.findOne({ _id });
    Meteor.call('isMine', equipe);

    const personne = Personnes.findOne({ _id: personneId });
    Meteor.call('isMine', personne);

    Equipes.update({
      _id,
    },
      {
        $pull: {
          personnesIds: personneId,
        },
      });
  },
});
