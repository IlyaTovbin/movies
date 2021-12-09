import './css/Image.css'

const Image = props => {
    return (
        <img className="card-img-top" src={props.src} alt="Card cap" />
    )
}

export default Image;