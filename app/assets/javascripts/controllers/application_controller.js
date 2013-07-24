Spotify.ApplicationController = Ember.Controller.extend({
  displaySearch: false,

  showSearch: function () {
    this.set('displaySearch', !this.get('displaySearch'));
  },

  person: function () {
    var person = Spotify.Person.createRecord({
      firstName: 'TJ',
      lastName: 'Smith'
    });
    window.person = person;
    return person;
  }.property()
});
