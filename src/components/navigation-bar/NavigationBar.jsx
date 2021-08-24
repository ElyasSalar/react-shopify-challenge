import {Navbar, Dropdown, Form, FormControl} from 'react-bootstrap';

function NavigationBar({keyword, dispatch}){
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
              onChange={(event) => dispatch({type: 'keyword', newKeyword: event.target.value})} 
            />
            <Dropdown className="d-inline mx-2" variant='dark'>
              <Dropdown.Toggle id="dropdown-autoclose-true">Movies</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Movies</Dropdown.Item>
                <Dropdown.Item>Series</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default NavigationBar;