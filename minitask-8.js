const movie = {
  id: 1,
  title: "Titanic",
  image: 'image_url',
  genre: ["Drama", "Romance"],
  cast: {
    lead: "Leonardo DiCaprio",
    supporting: "Kate Winslet"
  },
  getDetails() {
    return `
    Title: ${this.title}
    Image: ${this.image}
    Genre: ${this.genre.join(", ")}
    `;
  },
  getCast: function() {
    const { lead, supporting } = this.cast;
    return `
    Lead Actor: ${lead}
    Supporting Actor: ${supporting}
    `;
  },
  setTitle(newTitle) {
    this.title = newTitle;
  },
  setImage(newImage) {
    this.image = newImage;
  }
}

console.log(movie.getDetails());
movie.setTitle("Avatar");
console.log(movie.getDetails());
console.log(movie.getCast());
movie.setImage('new_image_url');
console.log(movie.getDetails());