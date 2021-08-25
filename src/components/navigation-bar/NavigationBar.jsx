import {Navbar, Dropdown, Form, FormControl} from 'react-bootstrap';

function NavigationBar({keyword, dispatch, typeOfCinema}){
  console.log(typeOfCinema)
  return(
    <>
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand href="#">Nominoview</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex" align='end'>
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
              value={keyword}
              onChange={(event) => dispatch({type: 'keyword', newValue: event.target.value})} 
            />
            <Dropdown
            className="d-inline mx-2"
            value={typeOfCinema}
            onChange={(event) => dispatch({type: 'typeOfCinema', newValue: event.target.value})} // Error
            >
              <Dropdown.Toggle id="dropdown-autoclose-true">{typeOfCinema}</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item value='movies'>Movies</Dropdown.Item>
                <Dropdown.Item value='series'>Series</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default NavigationBar;