import cardPic1 from '../images/kz.png'
import star from '../images/Star_1.png'


export default function Card(props){
    return(
              
                <div className='card'>
                    

                    <div>
                        <img className='card-image' src={`./src/images/${props.item.coverImg}`} />
                    </div>


                        <div className='card-stats'>
                            <i className='card-star'><img src={star} /></i><span>{props.item.stats.rating}</span>
                            <span  className='grey'>({props.item.stats.reviewCount})</span>
                            <span className='grey'>{props.item.location}</span>
                        </div>


                        <p>{props.item.title}</p>
                        <p><span className='bold'>From ${props.item.price}</span> / person</p>  

                </div>

           
    )
}