const ChristmasMovies = require("./02. Christmas Movies_Resources");
const { expect } = require("chai");

describe("Christmas Movies Unit Tests", () => {
    let instance;
    beforeEach(() => {
        instance = new ChristmasMovies();
    });

    describe("Instantiation Unit Tests", () => {
        it("Instantiation", () => {
            expect(instance.movieCollection).to.deep.equal([]);
            expect(instance.watched).to.deep.equal({});
            expect(instance.actors).to.deep.equal([]);
        });
    });

    describe("buyMovie() method Unit Tests", () => {
        it("Passing valid params should add the movie to the collection", () => {
            expect(instance.buyMovie('Movie', ['Actor1', 'Actor2', 'Actor1'])).to.equal("You just got Movie to your collection in which Actor1, Actor2 are taking part!");
            
            expect(instance.movieCollection[0]).to.deep.equal({name : "Movie", actors: ['Actor1', 'Actor2']});
            expect(instance.movieCollection.length).to.equal(1);
            
            expect(instance.movieCollection[0].actors).to.deep.equal(['Actor1', 'Actor2']);
            expect(instance.movieCollection[0].actors.length).to.equal(2);
        });
        it("If the movie exists, an error should be thrown", () => {
            instance.buyMovie('Movie', ['Actor1']);
            expect(() => instance.buyMovie('Movie', 'Actor1')).to.throw(Error, "You already own Movie in your collection!");
        });
    });

    describe("discardMovie() method Unit Tests", () => {
        it("Passing a valid param should remove the movie from the collection and watched list", () => {
            instance.buyMovie('Movie', ['Actor1', 'Actor2']);
            
            instance.watchMovie("Movie");
            
            expect(instance.discardMovie("Movie")).to.equal('You just threw away Movie!');
            
            expect(instance.movieCollection.length).to.equal(0);
            expect(instance.movieCollection[0]).not.deep.equal({
                name: "Movie",
                actors: ['Actor1', 'Actor2']
            });
        });
        it("If the movie is not part of the watched list, an error should be thrown", () => {
            instance.buyMovie('Movie', ['Actor1', 'Actor2']);
            expect(() => instance.discardMovie('Movie')).to.throw(Error, "Movie is not watched!");
        });
        it("If the movie is not part of the movie collection, an error should be thrown", () => {
            expect(() => instance.discardMovie('Movie')).to.throw(Error, "Movie is not at your collection!");
        });
    });

    describe("watchMovie() method Unit Tests", () => {
        it("Passing a valid param should add the movie to the watched list", () => {
            instance.buyMovie('Movie', ['Actor1', 'Actor2']);
            
            instance.watchMovie("Movie");
            
            expect(instance.watched.Movie).to.equal(1);
        });
        it("If the movie already exists in the watched list, its value should be increased by 1", () => {
            instance.buyMovie('Movie', ['Actor1', 'Actor2']);
            
            instance.watchMovie('Movie');
            instance.watchMovie('Movie');
            
            expect(instance.watched.Movie).to.equal(2);
        });
        it("If the movie doesn't exist in the collection, an error should be thrown", () => {
            expect(() => instance.watchMovie("Movie")).to.throw(Error, 'No such movie in your collection!');
        });
    });

    describe("favouriteMovie() method Unit Tests", () => {
        it("If there is more than one movies, the method will return the most watched one", () => {
            instance.buyMovie('Movie', ['Actor1', 'Actor2']);
            instance.buyMovie('Movie2', ['Actor1', 'Actor2']);
            
            instance.watchMovie('Movie');
            instance.watchMovie('Movie2');
            instance.watchMovie('Movie2');
            
            expect(instance.favouriteMovie()).to.equal(`Your favourite movie is Movie2 and you have watched it 2 times!`);
        });
        it("If there are no movies, an error should be thrown", () => {
            expect(() => instance.favouriteMovie()).to.throw(Error, 'You have not watched a movie yet this year!');
        });
    });

    describe("mostStarredActor() method Unit Tests", () => {
        it("If there are any movies, the method will return the most starred actor", () => {
            instance.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            instance.buyMovie('Home Alone 2', ['Macaulay Culkin']);
            instance.buyMovie('Last Christmas', ['Emilia Clarke', 'Henry Golding']);
            
            expect(instance.mostStarredActor()).to.equal("The most starred actor is Macaulay Culkin and starred in 2 movies!");
        });
        it("If there are no movies, an error should be thrown", () => {
            expect(() => instance.mostStarredActor()).to.throw(Error, 'You have not watched a movie yet this year!');
        });
    });
});