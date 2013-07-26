Spotify.Store = DS.Store.extend({
  revision: 13,
  // adapter: 'DS.RESTAdapter'
  adapter: DS.FixtureAdapter.create()
});
