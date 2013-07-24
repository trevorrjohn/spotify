Spotify.IndexRoute = Ember.Route.extend({
  setupController: function(controller) {
    controller.set('person', {firstName: 'Sam', lastName: 'Joe'})
  }
});
