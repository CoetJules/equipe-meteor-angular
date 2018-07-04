import SimpleSchema from 'simpl-schema';

export const Personne = new SimpleSchema({
  prenom: {
    type: String,
  },
  nomDeFamille: {
    type: String,
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

