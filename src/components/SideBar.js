import React from 'react'
import { Link } from 'react-router-dom'
import { ListGroup } from 'reactstrap'
function SideBar() {
    return (
        <div className="mt-4 my-3">
            <ListGroup>
                <Link className="inputName list-group-item list-group-item-action"tag="a" to="/">
                        Home
                </Link>
                <Link className="inputName list-group-item list-group-item-action"tag="a" to="/create-bill">
                        Generate Bill
                </Link>
                <Link className="inputName list-group-item list-group-item-action"tag="a" to="/view-bills">
                        View Bill
                </Link>
                <Link className="inputName list-group-item list-group-item-action"tag="a" to="/view-bill-byid">
                        View Bill by ID
                </Link>
                <Link className="inputName list-group-item list-group-item-action"tag="a" to="/view-bill-bycustid">
                        View Bill by Customer ID
                </Link>
                <Link className="inputName list-group-item list-group-item-action"tag="a" to="/view-bill-bystatus">
                        View Bill by Status
                </Link>
                <Link className="inputName list-group-item list-group-item-action"tag="a" to="/view-bill-bydate">
                        View Bill by Date
                </Link>
            </ListGroup>
        </div>
    )
}

export default SideBar
