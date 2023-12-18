import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import NotFound from "./NotFound";
import { movies } from "../helper/data";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const MoviesDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const selectedMovie = movies.find((movie) => movie.id === parseInt(id));

    if (selectedMovie) {
      setMovie(selectedMovie);
    } else {
      setError(true);
    }
  }, [id]);

  if (error) {
    return <NotFound />;
  } else {
    return (
      <Container className=" mt-3 mb-3 ">
        <Row>
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src={movie?.image} />
              <ListGroup className="list-group-flush">
                <ListGroup.Item className="d-flex ">
                  <p className="w-50">Yönetmen: </p>{" "}
                  <span>{movie?.director}</span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex ">
                  <p className="w-50">Oyuncular: </p>
                  <div className="d-inline-block">
                    {movie?.players.map((player, index) => (
                      <div key={index}>{player}</div>
                    ))}
                  </div>
                </ListGroup.Item>

                <ListGroup.Item className="d-flex">
                  <p className="w-50">Türü: </p>
                  <div className="d-inline-block">
                    {Array.isArray(movie?.category) ? (
                      movie.category.map((category, index) => (
                        <div key={index}>{category}</div>
                      ))
                    ) : (
                      <div>{movie?.category}</div>
                    )}
                  </div>
                </ListGroup.Item>

                <ListGroup.Item className="d-flex ">
                  <p className="w-50">Süresi: </p>
                  <span>{movie?.duration}</span>
                </ListGroup.Item>

                <ListGroup.Item className="d-flex ">
                  <p className="w-50">Çıkış Tarihi: </p>
                  <span>{movie?.date}</span>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col md={{ span: 8, offset: 1 }}>
            <Container className="bg-white">
              <Row className="text-center">
                <h1>{movie?.name}</h1>
              </Row>
              <Row>
                <h4>Konusu</h4>
                <h5>{movie?.subject}</h5>
              </Row>
              <Container className="text-center mt-2">
                <h2>Filmin Bazı Sahneleri </h2>
                <iframe
                  width="560"
                  height="315"
                  src={movie?.src}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </Container>
              <Container className="text-center mt-2">
                <Button
                  className="mb-2"
                  variant="warning"
                  onClick={() => navigate("/")}
                >
                  Home
                </Button>
              </Container>
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default MoviesDetails;
