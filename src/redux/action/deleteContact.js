import axios from "axios";
import Swal from "sweetalert2";
import getAllContact from "./getAllContact";

const deletContact = (id) => {
    return function(dispacth) {
        axios({
            url: `http://localhost:3001/contacts/${id}`,
            method: 'delete'
        })
        .then(() => {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                showConfirmButton: false,
                timer: 2000,
                title: "Your contact has been deleted"
            });
            dispacth(getAllContact());
        })
        .catch((err)=>{
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                showConfirmButton: false,
                timer: 2000,
                title: `${err.message} - ${err.status}`
            });
        })
    }
}

export default deletContact;