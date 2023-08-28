import {Card, Card2} from "./cards"

function Item(props){
    return(
        <Card>
            <img src={props.imagen} alt=""></img>
            <Card2>
            <h2>{props.titulo}</h2>
            <p>{props.descripcion}</p>
            <h3>${props.precio}</h3>
            <button>Add to Cart</button>
            </Card2>
        </Card>
    )
}

export default Item