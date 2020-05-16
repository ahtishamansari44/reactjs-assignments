import React from 'react'

const InputData = (props) => {
    return (
        <div className="row">
            <div className="col-12 col-sm-2 col-md-3 col-lg-4"></div>
            <div className="col-12 col-sm-8 col-md-6 col-lg-4">
            <form onSubmit={props.addItem}>
            <input className="input" placeholder={props.handle} onChange={props.inputHandle} value={props.inputValue}/>
            <button>+</button>
        </form>
            </div>
            <div className="col-12 col-sm-2 col-md-3 col-lg-4"></div>
        </div>
    )
}


export default InputData;