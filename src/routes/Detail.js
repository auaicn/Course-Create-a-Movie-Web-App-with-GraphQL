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
      summary
      medium_cover_image
    }
  }
`;

const Loading = styled.div``;
const Container = styled.div``;
const Subtitle = styled.div``;
const Header = styled.div``;

const Detail = () => {
  const { id } = useParams();

  // console.log(typeof id);
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: {
      id: Number(id),
    },
  });

  if (loading) {
    console.log("loading");
  } else {
    console.log(id);
    console.log(data);
  }

  return (
    <div>
      <Container>
        <Header>header</Header>
        <Subtitle>subtitle</Subtitle>
      </Container>

      {loading && <Loading>loading...</Loading>}
      {!loading && data && data.movie && <h1>movie</h1>}
    </div>
  );
};

export default Detail;
