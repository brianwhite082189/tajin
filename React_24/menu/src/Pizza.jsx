



function Pizza(props){
    return(
        <div className='pizza'>
            <img src={props.img}/>
            <div>
            <h3>{props.title}</h3> 
            <p>{props.ingredients}</p>
            <span>{props.price}</span>
            </div>
            
        
        </div>
    )
}

export default Pizza;