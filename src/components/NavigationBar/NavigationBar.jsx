import React, { useContext } from "react";
import moviesContext, { ACTIONS } from "../../store/moviesContext";
import { Navbar, Container, Form, FloatingLabel, Col } from "react-bootstrap";

function NavigationBar() {
  const { dispatchMovies, moviesState } = useContext(moviesContext);
  const { searchValue, movies } = moviesState;
  function handleSearch(e) {
    if (e.target.value === "")
      dispatchMovies({
        type: ACTIONS.MOVIES,
        payload: [],
      });
    dispatchMovies({
      type: ACTIONS.SEARCH,
      payload: e.target.value,
    });
  }
  const moviesOptions = movies.slice(0, 4).filter((movie) => {
    return movie.Title.toLowerCase()
      .trim()
      .includes(searchValue.toLowerCase().trim());
  });
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Col>
          <Navbar.Brand>Cinemovie</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        </Col>
        <Col>0/5</Col>
        <Col>
          <Form>
            <FloatingLabel label="Search...">
              <Form.Control
                list="search"
                type="search"
                placeholder="name@example.com"
                value={searchValue}
                onChange={handleSearch}
              />
              <datalist id="search">
                {moviesOptions.map((mov) => {
                  return (
                    <option key={mov.imdbID} value={mov.Title}>
                      {mov.Title}
                    </option>
                  );
                })}
              </datalist>
            </FloatingLabel>
          </Form>
        </Col>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
