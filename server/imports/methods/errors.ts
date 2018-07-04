Meteor.methods({
  isLoggedIn() {
    if (!Meteor.userId()) {
      throw new Meteor.Error('not-connected', 'A user needs to be connected');
    }
  },
  isMine(item) {
    if (Meteor.userId() !== item.userId) {
      throw new Meteor.Error('not-yours');
    }
  }
});