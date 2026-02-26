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
    return `
    Title: ${this.title}
    Image: ${this.image}
    Genre: ${this.genre.join(", ")}
    `;
  },
  getCast: function() {
    let members = [];
    for (let member of this.cast) {
      members.push(`${member.name} as ${member.role}`);
    }
    return members.join("\n");
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