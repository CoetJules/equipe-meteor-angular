import { Meteor } from 'meteor/meteor';

import { Equipes } from '../../../imports/collections/equipes';

Meteor.publish('equipes', function() {
  return Equipes.find({ userId: Meteor.userId() });
});

Equipes.deny({
  insert() { return true },
  update() { return true },
  remove() { return true },
});