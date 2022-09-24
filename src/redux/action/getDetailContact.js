import axios from "axios";
import Swal from "sweetalert2";

const detailContact = (id) => {
    return function(dispacth) {
        axios({
            url: `http://localhost:3001/contacts/${id}`,
            method: 'get'
        })
        .then(({data}) => {
            dispacth({type:"DETAIL_CONTACT", payload:data})
        })
        .catch((err)=>{
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                showCancelButton: false,
                timer: 2000,
                title: `${err.message} - ${err.status}`
            })
        });
    }
}

export default detailContact;