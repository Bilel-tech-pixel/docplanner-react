import React from 'react'

function ListSvg(props){

    return(<div className = "svg-list">
        <h1>We are a global <br/> company <br/> with local culture</h1>
        {props.tabsvg.map(el=><div className="img-svg">
            <a  href={el.link}>
                <svg className="logo" width="150px" height="32" viewBox="0 0 200 32" xmlns={el.svglink}><path d={el.path}></path></svg>
            </a>    
        </div>)}
        
    </div>)

}
export default ListSvg