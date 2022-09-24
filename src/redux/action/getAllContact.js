import axios from "axios";
import Swal from "sweetalert2";

const allContact = () => {
    return function(dispacth) {
        //dispacth digunakan untuk memanggil sebuah aksi atau merubah state yang sebelumnya dibuat di reducer.
        dispacth({type: "LOADING", payload:true}) 
        axios({
            url: "http://localhost:3001/contacts",
            method: "get"
        })
        .then(({data}) => {
            dispacth({type: "LOADING", payload:false})
            dispacth({type: "ALL_CONTACT", payload:data})
        }).catch((err) => {
            dispacth({type: "LOADING", payload:false})
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: `${err.mesage} ${err.status}`,
                showConfirmButton: false,
                timer: 2000
            })
        })
    }
}

export default allContact