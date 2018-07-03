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

