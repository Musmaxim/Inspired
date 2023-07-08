import { useParams } from "react-router-dom";
import { Container } from "../Layout/Container/Container";

export const MainPage = ({ gender = "woman" }) => {
  const { category } = useParams();

  return (
    <Container>
    <div>
      MainPage {gender}
      {category && <p>Категория: {category}</p>}
    </div>
    </Container>
  );
};
