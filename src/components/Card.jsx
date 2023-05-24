/* eslint-disable react/prop-types */
import locationImg from '../assets/Fill219.svg'

export default function Card(props) {
    const item = props.item
    return (
        <div className="card">
            <img src={item.img} alt="" className="card-img" />
            <div className="card-body">
                <div className="location">
                    <img src={locationImg} alt="" />
                    <span>
                        {item.location} 
                        <a href={item.img} className='google-maps-link'>
                            View on Google Maps
                        </a>
                    </span>
                    
                </div>
                <h2 className='card-header'>{item.name}</h2>
                <span className='card-duration'>{item.duration}</span>
                <p className='card-text'>
                    {item.description}
                </p>
            </div>
        </div>
        
    )
}



// Photos from Unsplash
// (can use these URLs as your img src)

// Japan
// https://source.unsplash.com/WLxQvbMyfas

// Australia
// https://source.unsplash.com/JmuyB_LibRo

// Norway
// https://source.unsplash.com/3PeSjpLVtLg