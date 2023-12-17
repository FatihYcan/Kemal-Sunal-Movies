import { useNavigate } from "react-router-dom";
import error from "../img/404.png";
import { Container, Image, Button } from "react-bootstrap";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Container className="text-center">
      <Image src={error} rounded className="w-50" />
      <Container className="mt-2 x">
        <Button variant="warning" onClick={() => navigate("/")}>
          Home
        </Button>
      </Container>
    </Container>
  );
};

export default NotFound;
