import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      year
      genres
      rating
      description_full
      medium_cover_image
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(#5f8ae0, #345698);
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Loading = styled.h1`
  font-weight: 300;
  font-size: 40px;
  color: white;
`;

const Poster = styled.div`
  display: flex;
  width: 60%;
  justify-contents: space-evenly;
  align-items: start;
`;

const Column = styled.div`
  display: flex;
  color: white;
  flex-direction: column;
  margin-left: 44px;
  position: relative;
  top: 20px;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: bolder;
  margin-bottom: 20px;
`;

const Information = styled.div`
  margin-top: 10px;
`;

const Genre = styled.span`
  font-weight: 200;
`;

const Summary = styled.h3`
  font-weight: 400;
`;

const Detail = () => {
  const { id } = useParams();

  const { loading, data } = useQuery(GET_MOVIE, {
    variables: {
      id: Number(id),
    },
  });

  return (
    <Container>
      {loading && <Loading>Loading...</Loading>}
      {!loading && data && data.movie && (
        <Poster>
          <img src={data.movie.medium_cover_image} alt={data.movie.title + " image"} />
          <Column>
            <Title>
              {data.movie.title} ({data.movie.year})
            </Title>
            <Information>
              <span> Score </span> {data.movie.rating} / 10
            </Information>
            <Information>
              <span> Genres </span>
              <Genre> {data.movie.genres.join(", ")}</Genre>
            </Information>
            <Information>
              <h1> Summary </h1>
              <Summary>{data.movie.description_full}</Summary>
            </Information>
          </Column>
        </Poster>
      )}
    </Container>
  );
};

export default Detail;
