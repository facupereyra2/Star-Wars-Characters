import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import starwars from '../assets/starwars.jpg';
import { ListGroup } from 'react-bootstrap';
import './styles/Character.css'

// eslint-disable-next-line react/prop-types
const Character = ({ characterInfo, onDelete }) => {

    if (!characterInfo) return;
    // eslint-disable-next-line react/prop-types
    const { name, gender, skin_color } = characterInfo;

    return (
        <>
            <div className="character-container">
                <Card bg="light" style={{ width: "250px", border: 0, marginTop: "10px" }}>
                    <Card.Img variant="top" src={starwars} width="20px" />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <ListGroup>
                            <ListGroup.Item> <b>Gender: </b> {gender} </ListGroup.Item>
                            <ListGroup.Item> <b>Skin color: </b> {skin_color}</ListGroup.Item>
                        </ListGroup>
                        <Button variant="outline-danger" onClick={() => onDelete(name)}  >Delete</Button>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default Character