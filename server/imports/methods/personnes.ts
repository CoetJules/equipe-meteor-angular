import { Meteor } from 'meteor/meteor';

import { Personnes } from '../../../imports/collections/personnes';

Meteor.methods({
  addPersonne(prenom: string, nomDeFamille: string) {
    const personne = {
      prenom,
      nomDeFamille,
    }

    return Personnes.insert(personne);
  },
  removePersonne(_id: string) {
    Personnes.remove({
      _id
    })
  }
})
