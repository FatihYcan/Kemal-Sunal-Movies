import { Col, Container, Form, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import { categories, years } from "../helper/data";
import { movies } from "../helper/data";
import MoviesCard from "./MoviesCard";

const MoviesList = () => {
  const [value, setValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [allMovies, setAllMovies] = useState([]);

  const handleCategoryChange = (e) => {
    const selectedCategoryValue = e.target.value.toLowerCase();

    setSelectedCategory(
      selectedCategoryValue === "film türünü seçiniz"
        ? null
        : selectedCategoryValue
    );
  };

  const handleYearChange = (e) => {
    const selectedYearValue = e.target.value;

    setSelectedYear(
      selectedYearValue.toLowerCase() === "film yılını seçiniz"
        ? null
        : selectedYearValue
    );

    if (selectedYearValue.toLowerCase() === "film yılını seçiniz") {
      setSelectedCategory(selectedCategory);
    }
  };

  useEffect(() => {
    setAllMovies(movies);
  }, []);

  return (
    <Container className="mt-3">
      <Form.Control
        placeholder="Search Movie..."
        type="search"
        className="form-input m-auto"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />

      {/* d-flex justify-content-around */}

      <Form.Group className="mt-3 form-group">
        <Form.Select
          aria-label="Film Türünü Seçiniz"
          className="form-input"
          onChange={handleCategoryChange}
          value={selectedCategory || ""}
        >
          <option>Film Türünü Seçiniz</option>
          {categories.map((category) => (
            <option key={category} value={category.toLowerCase()}>
              {category.toUpperCase()}
            </option>
          ))}
        </Form.Select>
        <Form.Select
          aria-label="Film Yılını Seçiniz"
          className="form-input"
          onChange={handleYearChange}
          value={selectedYear || ""}
        >
          <option>Film Yılını Seçiniz</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      <Container className="mt-3 mb-3">
        <Row className="gap-3">
          {movies
            .filter(
              (item) =>
                item.name.toLowerCase().includes(value.toLowerCase().trim()) &&
                (!selectedCategory ||
                  (Array.isArray(item.category)
                    ? item.category
                        .map((c) => c.toLowerCase())
                        .includes(selectedCategory)
                    : item.category.toLowerCase() === selectedCategory)) &&
                (!selectedYear || item.year.toString() === selectedYear)
            )
            .map((item) => (
              <Col key={item.id} className="d-flex justify-content-center">
                <MoviesCard key={item.id} item={item} />
              </Col>
            ))}
        </Row>
      </Container>
    </Container>
  );
};

export default MoviesList;
