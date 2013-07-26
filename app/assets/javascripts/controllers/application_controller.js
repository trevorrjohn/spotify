Spotify.ApplicationController = Ember.Controller.extend({
  displaySearch: false,

  showSearch: function () {
    this.set('displaySearch', !this.get('displaySearch'));
  },

  person: function () {
    return Spotify.Person.find(1);
  }.property()
});
