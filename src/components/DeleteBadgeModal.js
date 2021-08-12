import React from 'react'
import Modal from './Modal'

function DeleteBadgeModal (props){
    return <Modal isOpen={props.isOpen} onClose ={props.onClose}>
        <div className="DeleteBadgeModal">
            <h2>Are you sure?</h2>
            <p>You are about to delete this badge</p>
            <div>
                <button onClick={props.onDeleteBadge} className="mr-2 btn btn-danger">Delete</button>
                <button onClick={props.onClose} className="btn btn-primary ml-4">Cancel</button>
            </div>
        </div>
    </Modal>
}
export default DeleteBadgeModal