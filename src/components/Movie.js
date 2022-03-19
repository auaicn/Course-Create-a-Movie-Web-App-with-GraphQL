import { Link } from "react-router-dom";
import styled from "styled-components";

const Genre = styled.h3`
  margin-top: 5px;
  font-weight: 200;
`;

const Title = styled.h3`
  font-weight: 900;
  margin-top: 10px;
`;

const Information = styled.h3`
  margin-top: 10px;
`;

const Movie = ({ id, title, runtime, year, rating, genres, medium_cover_image }) => {
  return (
    <div>
      <Link to={`/${id}`}>
        <img src={medium_cover_image} alt="" />
      </Link>
      <Title>
        {title} ({year})
      </Title>
      <Information>
        {runtime} min, {rating}
      </Information>
      <Genre>{genres.join(", ")}</Genre>
    </div>
  );
};

export default Movie;
