const Cinema = require('../cinema.js');
const Film = require('../film.js');

describe('Cinema', () => {

  let moonlight;
  let bladeRunner;
  let dunkirk;
  let blackPanther;
  let trainspotting;
  let films;
  let cinema;

  beforeEach( () => {
    moonlight = new Film('Moonlight', 'drama', 2016, 111);
    bladeRunner = new Film('Blade Runner 2049', 'sci-fi', 2017, 164);
    dunkirk = new Film('Dunkirk', 'history', 2017, 96);
    blackPanther = new Film('Black Panther', 'action', 2018, 134);
    trainspotting = new Film('T2 Trainspotting', 'drama', 2017, 117);

    films = [moonlight, bladeRunner, dunkirk, blackPanther, trainspotting];
    cinema = new Cinema(films);
  });

  test('should have a collection of films', function () {
    expect(cinema.films).toEqual(films);
  });

  test('should be able to get a list of film titles', () => {
    expect(cinema.listTitles()).toEqual(['Moonlight', 'Blade Runner 2049', 'Dunkirk', 'Black Panther', 'T2 Trainspotting']);
  });
  test('should be able to find a film by title', () => {
    expect(cinema.findFilmByTitle('Dunkirk')).toBe(dunkirk);
  });
  test('should be able to filter films by genre', () => {
    expect(cinema.filmsByPropery('genre', 'action')).toEqual([blackPanther]);
  });
  test('should be able to check whether there are some films from a particular year', () => {
    expect(cinema.findFilmsByYear(2017)).toBe(true);
  });
  test('should be able to check whether there are no films from a particular year', () => {
    expect(cinema.findFilmsByYear(2019)).toBe(false);
  });
  test('should be able to check whether all films are over a particular length', () => {
    expect(cinema.allFilmsLength(120)).toBe(false);
  });
  test('should be able to calculate total running time of all films', () => {
    expect(cinema.totalRunTime()).toBe(622);
  });
  test('Cinema should be able to filter films by year', () => {
    expect(cinema.filmsByPropery('year', 2017)).toEqual([bladeRunner, dunkirk, trainspotting]);
  });


});
