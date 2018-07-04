import SimpleSchema from 'simpl-schema';

export const Equipe = new SimpleSchema({
  nom: {
    type: String,
  },
  personnesIds: {
    type: Array,
  },
  "personnesIds.$": {
    type: String,
    min: 17,
  },
  createdAt: {
    type: Date,
    autoValue: function () {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return { $setOnInsert: new Date() };
      } else {
        this.unset();  // Prevent user from supplying their own value
      }
    },
    denyUpdate: true,
  },
  userId: {
    type: String,
    autoValue: function () {
      if (this.isInsert) {
        return Meteor.userId();
      } else if (this.isUpsert) {
        return { $setOnInsert: Meteor.userId() };
      } else {
        this.unset();  // Prevent user from supplying their own value
      }
    },
    denyUpdate: true,
  },
});
