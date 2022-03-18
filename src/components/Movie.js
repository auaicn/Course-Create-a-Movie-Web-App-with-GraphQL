const Movie = ({ id }) => {
  console.log(id);

  return <h3>{id} </h3>;

  // id: Int!
  // title: String!
  // year: Int!
  // rating: Float!
  // runtime: Int!
  // genres: [String]!
  // summary: String!
  // medium_cover_image: String!
};

export default Movie;
