import React, { useState } from "react";
import { useDispatch } from "react-redux";
import addContact from "../redux/action/addContact";
import Swal from "sweetalert2";

export default function AddContact(params) {

    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [category, setCategory] = useState("family");

    const handleSubmit = (e) => {
        e.preventDefault()
        if (name === "" || email === "" || phone === "") {
            Swal.fire({
                position: "top-end",
                icon: "error",
                timer: 3000,
                showConfirmButton: false,
                title: "Please Fill Form!"
            });
        } else {
            dispatch(addContact({
                user: {
                    name,
                    email,
                    phone,
                    category
                }
            }));
        }
        resetForm()
        // window.location.reload();
    }

    const resetForm = () => {
        setName("")
        setEmail("")
        setPhone("")
        setCategory("family")
    }

    // const handleClose = () => window.location.reload();

    return(
        <>
            <button className="btn btn-dark" type="button" data-bs-toggle="modal" data-bs-target="#formAddContact">Add Contact</button>

            <div className="modal fade" id="formAddContact" tabindex="-1" aria-labelledby="formAddContact" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Form Add Contact</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="modal-body">
                                <div className="form-group mt-1">
                                    <label htmlFor="name">Name</label>
                                    <input value={name} onChange={(e)=>setName(e.target.value)} type="text" className="form-control" />
                                </div>
                                <div className="form-group mt-1">
                                    <label htmlFor="email">Email</label>
                                    <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" />
                                </div>
                                <div className="form-group mt-1">
                                    <label htmlFor="phone">Phone</label>
                                    <input value={phone} onChange={(e)=>setPhone(e.target.value)} type="number" className="form-control" />
                                </div>
                                <div className="form-group mt-1">
                                    <label htmlFor="category">Category</label>
                                    <select onChange={(e)=>setCategory(e.target.value)} name="category" className="form-control">
                                        <option value="family">Family</option>
                                        <option value="friend">Friend</option>
                                        <option value="work">Work</option>
                                    </select>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button data-bs-dismiss="modal" onClick={()=>resetForm()} type="button" className="btn btn-danger">Cancel</button>
                                <button data-bs-dismiss="modal" type="submit" className="btn btn-secondary">Sumbit</button>
                            </div>
                        </form>         
                    </div>
                </div>
            </div>
        </>
    )
}