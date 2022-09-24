import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { useParams } from "react-router-dom";
import getAllContact from '../redux/action/getAllContact';
import CardContact from "../components/CardContact";
import Loading from "../components/loading";


export default function CategoryContact() {
    const dispatch = useDispatch();
    const params = useParams();

    const loading = useSelector(state=>state.loadingReducer.loading)
    // const contactData = useSelector(state=>state.contactReducer.allContact)
    const contactData = useSelector(state=>state.contactReducer.allContact);
    const categoryContact = useSelector(state=>state.contactReducer.categoryContact)

    // useEffect(()=>{
    //     dispatch({type:"LOADING", payload:true})
    //     setTimeout(() => {
    //         dispatch({type:"LOADING", payload:false})
    //     }, 2000)
    // },[]);

    useEffect(()=>{
        dispatch(getAllContact());
    },[]);

    useEffect(()=>{
        const regex = new RegExp(params.category, "i"); // Regex (Regular Expression) adalah sebuah text yang mendefinisikan pola pencarian dengan pencocokan
        const myContact = contactData.filter(contact=>{
            return regex.test(contact.category)
        })
        dispatch({type:'CATEGORY_CONTACT', payload:myContact});
    },[params, contactData])

    return (
        <>
            <div className="container mt-2">
                {/* <div className="row"> */}
                    {
                        loading ?
                            <Loading/>
                        :
                        categoryContact.length === 0 ?
                            <div className="text-center m-2 p-4 border border-white rounded">
                                <span className="text-white">Data Not Found </span>
                            </div>
                        :
                        // <div className="text-center m-2 p-4">Data is Found Guys</div>    
                        categoryContact.map((contactData)=>{
                            return(
                                <div key={contactData.id} className="col-md-3 p-1">
                                    <CardContact contactData={contactData}/>
                                </div>
                            )
                        })
                    }
                {/* </div> */}
            </div>
        </>
    )
}