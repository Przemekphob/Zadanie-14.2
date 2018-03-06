var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'film o czarodzieju',
		src: "http://via.placeholder.com/350x150?text=1"
	},
	{
		id: 2,
		title: 'Król Lew',
		desc: 'Film o królu sawanny',
		src: "http://via.placeholder.com/350x150?text=2"
	},
	{
		id: 3,
		title: 'Rocky',
		desc: 'film o bokserze',
		src: "http://via.placeholder.com/350x150?text=3"
	},
	{
		id: 4,
		title: 'Shrek',
		desc: 'Film o ogrze',
		src: "http://via.placeholder.com/350x150?text=4"
	}
];


var moviesElements = movies.map(function(movie) {
  	return React.createElement('li', {key: movie.id},
    	React.createElement('h2', {}, movie.title),
    	React.createElement('p', {}, movie.desc),
    	React.createElement('img', {src: movie.src})
    );
});

var element =
  	React.createElement('div', {},
    	React.createElement('h1', {}, 'Lista filmów'),
    	React.createElement('ul', {}, moviesElements)
  );

ReactDOM.render(element, document.getElementById('app'));