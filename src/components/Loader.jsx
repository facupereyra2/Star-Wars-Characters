import { Spinner } from 'react-bootstrap'
import logo from "../assets/starwarsLoader.png"
import './styles/Loader.css'

const Loader = () => {
  return (
    <>
      <div className="loader-container">
        <img src={logo} />
        <Spinner animation="grow" role="status" variant='light' />
      </div>
    </>
  )
}

export default Loader