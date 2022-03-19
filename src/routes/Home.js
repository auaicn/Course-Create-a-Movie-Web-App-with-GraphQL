import { gql, useQuery } from "@apollo/client";
import Movie from "../components/Movie.js";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Header = styled.header`
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  height: 45vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Subtitle = styled.h3`
  font-size: 22px;
`;

const Loading = styled.div`
  font-size: 18px;
  opacity: 0.5;
  font-weight: 500;
  margin-top: 10px;
`;

const Movies = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  gap: 25px;
  width: 60%;
  justify-items: center;
  position: relative;
  top: -50px;
`;

const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
      title
      year
      rating
      genres
      runtime
      description_full
    }
  }
`;

const Home = () => {
  const { loading, data } = useQuery(GET_MOVIES);

  return (
    <Container>
      <Header>
        <Title>yts movies</Title>
        <Subtitle>Developed using graphQL & React </Subtitle>
      </Header>
      {loading && <Loading>Loading...</Loading>}
      {!loading && data.movies && (
        <Movies>
          {data.movies.map((m) => (
            <Movie
              key={m.id}
              id={m.id}
              title={m.title}
              year={m.year}
              rating={m.rating}
              runtime={m.runtime}
              genres={m.genres}
              medium_cover_image={m.medium_cover_image}
            />
          ))}
        </Movies>
      )}
    </Container>
  );
};

export default Home;
