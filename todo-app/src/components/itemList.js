import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move'

const ListItem = (props) => {
    const items = props.items;

    const listItems = items.map(item => {
        return (
        <li key={item.key}>
            {/* {item.text} */}
            <input id={item.key} value={item.text} onChange={(e)=>props.updateItem(e.target.value, item.key)}/>
            <span><FontAwesomeIcon icon="trash" onClick={()=>props.deleteItem(item.key)} /></span>
        </li>
        
        )
    })

    return (
        <div className="row list" >
             <div className="col-12 col-sm-2 col-md-3 col-lg-4"></div>
             <div className="col-12 col-sm-8 col-md-6 col-lg-4">
             <ul>
            <FlipMove duration={500} easing="ease-in-out">
            {listItems}
            </FlipMove>
        </ul>
             </div>
             <div className="col-12 col-sm-2 col-md-3 col-lg-4"></div> 
        </div>
    )

}

export default ListItem;