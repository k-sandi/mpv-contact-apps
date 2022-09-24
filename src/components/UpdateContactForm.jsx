import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

// action
import getDetailContact from "../redux/action/getDetailContact";
import updateContact from "../redux/action/updateContact";

export default function UpdateContactForm(props) {
    const dispacth = useDispatch();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [category, setCategory] = useState("family");

    const contactData = useSelector(state=>state.contactReducer.detailContact);

    const detailContact = (id) => {
        dispacth(getDetailContact(id))
    }

    const resetForm = () => {
        setName("")
        setEmail("")
        setPhone("")
        setCategory("family")
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name === "" || email === "" || phone === "") {
            Swal.fire({
                position: "top-end",
                icon: "error",
                timer: 3000,
                showConfirmButton: false,
                title: "Please fill the form!"
            })
        } else {
            dispacth(updateContact({
                user: {
                    name,
                    email,
                    phone,
                    category
                }
            }, contactData.id));
        }
        resetForm();
    }

    useEffect(()=>{
        setName(contactData.name)
        setEmail(contactData.email)
        setPhone(contactData.phone)
        setCategory(contactData.category)
    },[contactData])

    return(
        <>
            <button onClick={()=>detailContact(props.idContact)} className="btn btn-dark" type="button" data-bs-toggle="modal" data-bs-target="#formUpdateContact">Edit</button>
            <div className="modal fade" id="formUpdateContact" tabIndex="-1" aria-labelledby="formUpdateContactLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Form Update Contact</h5>
                            <button onClick={()=>resetForm()} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="modal-body">
                                <div className="form-group mt-1">
                                    <label htmlFor="name">Name</label>
                                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" />
                                </div>
                                <div className="form-group mt-1">
                                    <label htmlFor="email">Email</label>
                                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" />
                                </div>
                                <div className="form-group mt-1">
                                    <label htmlFor="phone">Phone</label>
                                    <input value={phone} onChange={(e) => setPhone(e.target.value)} type="number" className="form-control" />
                                </div>
                                <div className="form-group mt-1">
                                    <label htmlFor="category">Category</label>
                                    <select onChange={(e) => setCategory(e.target.value)} name="category" className="form-control">
                                        <option value="family">Family</option>
                                        <option value="friend">Friend</option>
                                        <option value="work">Work</option>
                                    </select>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button data-bs-dismiss="modal" onClick={()=>resetForm()} type="button" className="btn btn-danger">Cancel</button>
                                <button data-bs-dismiss="modal" type="submit" className="btn btn-warning">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}