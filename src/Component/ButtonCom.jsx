import React from 'react'

function ButtonCom(props) {
    return (
        <>
            <div>
                <button type='button' className="btncss fw-bold mt-2">{props.btn}</button>
            </div>
        </>
    )
}

export default ButtonCom