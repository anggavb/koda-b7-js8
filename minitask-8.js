const movie = {
  id: 1,
  title: "Titanic",
  image: 'image_url',
  genre: ["Drama", "Romance"],
  cast: [
    { name: "Leonardo DiCaprio", role: "Jack Dawson" },
    { name: "Kate Winslet", role: "Rose DeWitt Bukater" }
  ],
  getDetails() {
    let genres = "";
    for (let i = 0; i < this.genre.length; i++) {
      genres += `${this.genre[i]}, `;
    }

    return `
    Title: ${this.title}
    Image: ${this.image}
    Genre: ${genres}
    `;
  },
  getCast: function() {
    let members = "";
    for (let i = 0; i < this.cast.length; i++) {
      const member = this.cast[i];
      members += `${member.name} as ${member.role}\n`;
    }
    return members;
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