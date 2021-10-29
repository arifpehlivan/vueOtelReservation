<template>
  <div>
      <b-navbar fixed="top" toggleable="lg" type="dark" variant="dark">
          <b-navbar-brand href="#">
              <i class="fas fa-hotel"></i>Otel App
          </b-navbar-brand>
      </b-navbar>
      <b-navbar-toggle id="nav-collapse">
          
      </b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-button>
                
              </b-button>
            </b-nav-form>

          </b-navbar-nav>

        

      </b-collapse>
  </div>
</template>

<script>
// import {db} from '@/firebase';
import Swal from 'sweetalert2'
export default {
  data(){
    return {
      form:{
        reservationid: "",
        message: "",
        room: null,
        email: ''
      },
      rooms:[
        {text:"Select One", value: null},
        "Single",
        "Double",
        "Family",
        "Deluxe"
      ],
      color: "",
      title: "",
      show: false,
      reservation: {
        id: "",
        name: "",
        email: "",
        day: "",
        price: ""
      },
      admin:{
        user:"arif",
        pass: '1234'
      },
      admininput:{
        user: '',
        pass: ''
      }
    }
  },
  methods: {
    onSubmit2(evt){
      this.show=false;
      evt.preventDefault();
      switch(this.title){
          case 'Cancel Reservation' :
            db.collection(this.form.room)
              .doc(this.form.reservationid)
              .delete()
              .then(()=>{
                this.$bvModal.hide('my-modal2')
                Swal.fire({
                  icon: 'success',
                  title: 'Reservation Canceled'
                });
              })
              .catch(()=>{
                console.log('Error - Reservation Canceled')
              });
              break;
          case 'Contact':
            db.collection("messages")
                .add({message: this.from.message, email:this.form.email})
                .then(()=>{
                    this.$bvModal.hide("my-modal2");
                    swal.fire({
                      icon: 'success',
                      title: 'Message Sent'
                    });
                })
                .catch(()=>{
                  console.log('Error - Messages')
                })
                break;
          case 'Administrator':
            if(this.admin.user == this.admininput.user && this.admin.pass == this.admininput.pass){
              this.$router.push('/admin')
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Incorrect'
              })
            }

      }
    }
  },
}
</script>

<style>
i{
  color: orange;
}
button:hover{
  background-color: orange;
}
button:hover > i{
  color: white;
}
</style>