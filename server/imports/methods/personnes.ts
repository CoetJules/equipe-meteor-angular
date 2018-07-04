import { Meteor } from 'meteor/meteor';

import { Personnes } from '../../../imports/collections/personnes';

Meteor.methods({
  addPersonne(prenom: string, nomDeFamille: string) {
    Meteor.call('isLoggedIn');

    const personne = {
      prenom,
      nomDeFamille,
    }

    return Personnes.insert(personne);
  },
  removePersonne(_id: string) {
    Meteor.call('isLoggedIn');

    const personne = Personnes.findOne({  _id });
    Meteor.call('isMine', personne);

    Personnes.remove({
      _id
    })
  }
})
