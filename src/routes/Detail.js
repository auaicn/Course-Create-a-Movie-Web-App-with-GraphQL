import { gql, useQuery } from "@apollo/client";
import Movie from "../components/Movie.js";

const GET_MOVIE = gql`
  {
    movie(id: $id) {
      id
    }
  }
`;

const Detail = (id) => {
  const { loading, error, data } = useQuery(GET_MOVIE, {
    variables: {
      id: id,
    },
  });

  if (loading) {
    return "loading...";
  }

  if (data && data.movie) {
    return <h1>movie.id</h1>;
  }

  console.log(error);

  return <h3>error</h3>;

  return <Movie id={id} />;
};

export default Detail;
