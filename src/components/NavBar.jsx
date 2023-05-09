import { Button, Container, Navbar } from "react-bootstrap"
import sable from '../assets/sable.png'

// eslint-disable-next-line react/prop-types
const NavBar = ({ getCharacters }) => {
    return (
        <>
            <Navbar bg="dark" expand="lg"  >
                <Container>
                    <Navbar.Brand>
                        <img src={sable} alt="Sable de luz" />
                    </Navbar.Brand>
                    <Button variant="success" onClick={() => getCharacters()} >Reload Characters</Button>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar