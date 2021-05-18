import React from 'react'

const Toast = ({ msg, bgColor, handleShow }) => {
    return (
        <div role="alert" className={`toast show position-fixed text-light ${bgColor}`}
        style={{top: '5px', right: '5px', minWidth: '200px', zIndex: 50}}>
            <div className={`toast-header text-light ${bgColor}`}>
                <strong className="me-auto text-light">{msg.title}</strong>
                <button className="ml-2 mb-1 btn-close text-light" type="button"
                data-bs-dismiss="toast" style={{outline: 'none'}}
                onClick={handleShow} aria-label="Close"></button>
            </div>
            <div className="toast-body">
                {msg.body}
            </div>
        </div>
    )
}

export default Toast
