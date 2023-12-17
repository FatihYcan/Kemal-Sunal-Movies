import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const MoviesCard = ({ item }) => {
  const { id, name, date, image } = item;
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate(`./details/${id}`);
  };

  return (
    <Card
      className="border border-dark text-center"
      style={{ width: "14rem", height: "100%" }}
      key={id}
    >
      <Card.Img variant="top" src={image} height={"400px"} />
      <Card.Body>
        <Card.Title className="text-center titles">
          <h6>{name}</h6>
          <p className="fs-6">{date}</p>
        </Card.Title>
        <Button variant="primary" onClick={handleDetailsClick}>
          Details
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MoviesCard;
