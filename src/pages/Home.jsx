import React from "react";
import MoviesList from "../components/MoviesList";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      <MoviesList />
    </Container>
  );
};

export default Home;
