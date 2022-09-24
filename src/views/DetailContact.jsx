import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

// action
import detailContact from "../redux/action/getDetailContact";

// component
import CardContact from "../components/CardContact";

export default function DetailContact() {

    const dispacth = useDispatch();
    const params = useParams();

    const contactData = useSelector(state=>state.contactReducer.detailContact);

    useEffect(()=>{
        dispacth(detailContact(params.id))
    },[])

    return (
        <div className="container">
            <div className="row">
                <div className="d-flex justify-content-center">
                    <div className="w-50">
                        <CardContact contactData={contactData} fromDetail={true} />
                    </div>
                </div>
            </div>
        </div>
    )
}