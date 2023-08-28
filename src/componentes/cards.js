import './style/card.css'

function Card(props){
    const clases = 'card'
    return(
        <div className={clases}>{props.children}</div>
    )
}   

function Card2(props){
    const info = 'info'
    return(
        <div className={info}>{props.children}</div>
    )
}

export{
    Card,
    Card2
}