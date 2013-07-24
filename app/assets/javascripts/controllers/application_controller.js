Spotify.ApplicationController = Ember.Controller.extend({
  search: function () {
    this.set('isSearchOpen', !this.get('isSearchOpen'));
  },

  person: function () {
    return Spotify.Person.createRecord({
      firstName: 'TJ',
      lastName: 'Smith'
    });
  }.property()
});
