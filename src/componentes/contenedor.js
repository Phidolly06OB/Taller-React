import './style/contenedor.css'

function Contenedor(props){
    const claseCon = 'padre'
    return(
        <div className={claseCon}>{props.children}</div>
    )
}

export default Contenedor