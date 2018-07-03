import { Meteor } from 'meteor/meteor';

import { Equipes } from '../../../imports/collections/equipes';

Meteor.publish('equipes', function() {
  return Equipes.find({});
});
