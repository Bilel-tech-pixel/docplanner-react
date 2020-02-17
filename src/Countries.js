import React from 'react'

function Countries(props){
    return(<div className="sec-images">

        {props.country.map(el=><div className="ctn-img">
            <img src={el.link}/>
            <div className="flx-btn">
               <p>{el.name}</p>
               <button className="blue-btn">{el.value}</button>
            </div>
        </div>)}

    </div>)
}
export default Countries