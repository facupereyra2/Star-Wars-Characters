import { useEffect, useState } from 'react';
import Character from '../components/Character';
import { Col, Container, Row } from 'react-bootstrap';
import Loader from '../components/Loader';
import NavBar from '../components/NavBar';
const Home = () => {

    const [characters, setCharacters] = useState();
    const [loading, setLoading] = useState(false);

    const getCharacters = async () => {
        try {
            const res = await fetch("https://swapi.dev/api/people/");
            const data = await res.json();
            setCharacters(data.results.slice(0, 10));
            console.log(data.results)
        }
        catch (error) {
            console.log(error)
        }
    }

    const handleDelete = (name) => {
        setCharacters(characters.filter((character) => character.name !== name));
    };

    const timer = setTimeout(() => {
        setLoading(true)
    }, 3000)

    useEffect(() => {
        () =>
            timer();
        getCharacters();
    }, []);

    return (
        <>
            {loading && (
                <>
                    <NavBar getCharacters={getCharacters} />
                    <Container>
                        <Row lg="5">
                            {characters && (<>
                                {characters.map((c, index) => (
                                    <>
                                        <Col >
                                            <Character
                                                key={index}
                                                characterInfo={c}
                                                onDelete={handleDelete}
                                            />
                                        </Col>
                                    </>
                                ))}

                            </>)}
                        </Row>
                    </Container>
                </>
            )
            }
            {!loading && <Loader />}
        </>
    )

}
export default Home;