class Cinema{

  constructor(films) {
    this.films = films;
  };

  listTitles() {
    return this.films.map( function(film) {
      return film.title;
    });
  };

  findFilmByTitle(title) {
    return this.films.find(function(film){
      return film.title === title;
    });
  };

  findFilmsByYear(year){
    return this.films.some(function(film){
      return film.year === year;
    });
  };
  allFilmsLength(minutes){
    return this.films.every(function(film){
      return film.length > minutes;
    });
  };
  totalRunTime() {
    return this.films.reduce(function(total, number){
      return total + number.length;
    }, 0);
  };

  filmsByPropery(property, value){
    return this.films.filter(function(film){
      return film[property] === value;
    });
  };


}

module.exports = Cinema;
