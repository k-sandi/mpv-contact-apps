import axios from "axios";
import Swal from "sweetalert2";
import getAllContact from './getAllContact';

const addContact = (({user})=>{
    return function(dispacth) {
        axios({
            url: "http://localhost:3001/contacts",
            method: "POST",
            data: {
                name: user.name,
                email: user.email,
                phone: user.phone,
                category: user.category
            }
        })
        .then(({data}) => {
            Swal.fire({
                position: "top-end",
                icon: "success",
                timer: 2000, // 2 detik
                showCancelButton: false,
                title: `Success add contact ${data.name}`
            })
            dispacth(getAllContact()) //memanggil aksi getContact lagi untuk memanggil view dengan data yg berhasil ditambahkan
        })
        .catch((err)=>{
            Swal.fire({
                position: "top-end",
                icon: "error",
                timer: 2000,
                showConfirmButton: false,
                title: `${err.messge} - ${err.status}`
            })
        })
    }
});

export default addContact;
