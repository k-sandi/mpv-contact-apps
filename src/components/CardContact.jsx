import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

import UpdateContact from "./UpdateContactForm";
import DeleteContact from "../redux/action/deleteContact";

export default function CardContact(props) {
    const dispacth = useDispatch();

    const deleteContact = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085D6",
            cancelButtonColor: "#D33",
            confirmButtonText: "Yes, Delete it!"
        })
        .then((result) => {
            if (result.isConfirmed) {
                dispacth(DeleteContact(id))
            }
        })
    }

    return(
        <div className="card mt-5 shadow-sm">
            <div className="box">
                <div className="content">
                    <h2>{props.contactData.id}</h2>
                    <h3>{props.contactData.name}</h3>
                    <p>{props.contactData.email}</p>
                    <p>{props.contactData.phone}</p>
                    <p>category: {props.contactData.category}</p>
                </div>
            </div>
            {
                props.fromDetail ?
                ""
                :
                <div className="card-footer d-flex justify-content-around">
                    <Link to={`/detail/${props.contactData.id}`}><button className="btn btn-dark">Detail</button></Link>
                    <UpdateContact idContact={props.contactData.id} />
                    <button onClick={()=>deleteContact(props.contactData.id)} className="btn btn-dark">Delete</button>
                </div>
            }
        </div>
    )
}