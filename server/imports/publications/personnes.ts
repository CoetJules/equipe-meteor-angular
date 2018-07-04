import { Meteor } from 'meteor/meteor';

import { Personnes } from '../../../imports/collections/personnes';

Meteor.publish('personnes', function() {
  return Personnes.find({ userId: Meteor.userId() });
});

Personnes.deny({
  insert() { return true },
  update() { return true },
  remove() { return true },
});