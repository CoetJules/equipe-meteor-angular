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
});

