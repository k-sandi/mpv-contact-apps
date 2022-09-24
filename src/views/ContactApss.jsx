import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';

// action
import getAllContact from  '../redux/action/getAllContact';

// component
import CardContact from "../components/CardContact";
import Loading from "../components/loading";

export default function ContactApps() {

    const dispatch = useDispatch()
    const loading = useSelector(state=>state.loadingReducer.loading);
    const contactData = useSelector(state=>state.contactReducer.allContact);
    console.log("contactData: ", contactData);

    useEffect(() => {
        dispatch(getAllContact())
    }, [])

    return(
        <>
            <div className="container mt-2">
                {/* <div className="row"> */}
                    {
                        loading ?
                        // <p>Loading...</p>
                        <Loading/>
                        :
                        contactData.length < 1 ?
                            <div className="text-center m-2 p-4 border border-white rounded">
                                <span className="text-white">Data Not Found </span>
                            </div>
                        :
                        contactData.map(contactData=>{
                            return(
                                // <div className="text-center m-2 p-4">Data Found</div>
                                <div key={contactData.id} className="col-md-3 p-1">
                                    <CardContact contactData={contactData}/>
                                </div>
                            )
                        })
                    }
                {/* </div> */}
            </div>
        </>
        // <h2>Contact</h2>
    )
}