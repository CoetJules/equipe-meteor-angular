import { Meteor } from 'meteor/meteor';

import { Equipes } from '../../../imports/collections/equipes';

Meteor.methods({
  addEquipe(nom: string) {
    Equipes.insert({
      nom,
      personnesIds: [],
    });
  },
  removeEquipe(_id: string) {
    Equipes.remove({
      _id,
    })
  },
  addPersonneToEquipe(_id: string, personneId: string) {
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
