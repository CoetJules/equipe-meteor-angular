import { Meteor } from 'meteor/meteor';

import { Personnes } from '../../../imports/collections/personnes';

Meteor.publish('personnes', function() {
  return Personnes.find({});
});
