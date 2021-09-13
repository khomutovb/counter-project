import React from 'react'

const NavBar = ({totalItems}) => {
    return (
        <ul className="nav">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Active</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
                <button type="button" className="btn btn-primary position-relative">
                    Корзина
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {totalItems}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </button>
            </li>
        </ul>
    )
}
export default NavBar