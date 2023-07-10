import { IoClose } from "react-icons/io5"

import "./Modal.scss"

export default function Modal({ children }) {
    return (
        <div className="modal">
            <div className="modal-background"></div>
            <div className="modal-content">
                <button className="close-btn">
                    <IoClose />
                </button>
                {
                    children
                }
            </div>
        </div>
    )
}