Spotify.Person = DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string')
});

Spotify.Person.FIXTURES = [
  { id: 1, firstName: 'Joey', lastName: 'Roo' },
  { id: 2, firstName: 'Foo', lastName: 'Bar' }
]
