import './style/padre.css'

function Padre(props){
    const texto = 'texto'
    return(
        <div className={texto}>{props.children}</div>
    )
}

export default Padre