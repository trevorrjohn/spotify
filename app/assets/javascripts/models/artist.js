Spotify.Artist = DS.Model.extend({
  name: DS.attr('string'),
  image: DS.attr('string')
});

Spotify.Artist.FIXTURES = [
  { id: 1, name: 'Kings of Leon', image: 'http://m1ndthegap.files.wordpress.com/2011/10/509854-kings-of-leon2.jpg' },
  { id: 2, name: 'Fun.', image: 'http://assets.rollingstone.com/assets/images/story/fun-lend-sight-of-the-sun-to-girls-soundtrack-song-premiere-20130107/1000x600/20130103-fun-x600-1357229641.jpg' },
  { id: 3, name: 'Imagine Dragons', image: 'http://backbeatseattle.com/wp-content/uploads/2013/06/Imagine-Dragons-Demons.jpg' }
]
