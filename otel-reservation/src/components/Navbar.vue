<template>
  <div>
      <b-navbar fixed="top" toggleable="lg" type="dark" variant="dark">
          <b-navbar-brand href="#">
              <i class="fas fa-hotel"></i>Otel App
          </b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        
          <b-navbar-nav class="ml-auto">
            <b-nav-form>

              <b-button  
                @click="modaldata2('Check Reservation','success')"
                size="sm"
                class="my-2 mr-2 my-sm-0"
              >
               <i class="fas fa-door-open"></i> Check Reservation
              </b-button>

              <b-button  
                @click="modaldata2('Cancel Reservation','danger')"
                size="sm"
                class="my-2 mr-2 my-sm-0"
              >
               <i class="fas fa-door-closed"></i> Cancel Reservation
              </b-button>

              <b-button  
                @click="modaldata2('Contact','primary')"
                size="sm"
                class="my-2 mr-2 my-sm-0"
              >
               <i class="fas fa-phone"></i> Contact
              </b-button>

              <b-button  
                @click="modaldata2('Administrator','dark')"
                size="sm"
                class="my-2 mr-2 my-sm-0"
              >
               <i class="fas fa-user"></i> Administrator
              </b-button>
            </b-nav-form>
          </b-navbar-nav>
      </b-collapse>

      <b-modal hide-footer id="my-modal2" :title="title">
        <b-form @submit="onSubmit2">
          <b-form-group
            v-if="color !='primary' && color !='dark'"
            id="input-group-1"
            label="Reservation ID:"
            label-for="input-1"
          >

            <b-form-input
              v-if="color !='primary' && color !='dark'"
              id="input-group-1"
              v-model="form.reservationid"
              type="text"
              required
              placeholder="Enter Reservation ID">
            </b-form-input>
          </b-form-group>

          <b-form-group
            v-if="color !='primary' && color !='dark'"
            id="input-group-3"
            label="Room:"
            label-for="input-3"
          >

            <b-form-select id="input-3" v-model="form.room" :options="rooms" required></b-form-select>
          </b-form-group>

          <b-form-group
              v-if="color =='primary' "
              id="input-group-1"
              label="E-mail:"
              label-for="input-1"
              >

              <b-form-input
              v-if="color !='primary' "
              id="input-1"
              v-model="form.email"
              type="email"
              required
              placeholder="Enter E-mail">
              </b-form-input>
          </b-form-group>

          <b-form-group
              v-if="color =='primary' "
              id="input-group-1"
              label="Contact:"
              label-for="input-1"
              >

              <b-form-textarea
                id="textarea"
                v-model="form.message"
                placeholder="Enter Message..."
                rows="3"
                max-rows="6"
                >
              </b-form-textarea>
          </b-form-group>

          <b-form-group
              v-if="color =='dark' "
              id="input-group-1"
              label="User:"
              label-for="input-1"
              >

              <b-form-input
                v-if="color == 'dark'"
                id="input-1"
                v-model="admininput.user"
                type="text"
                required
                placeholder="Enter User"
                >
              </b-form-input>
          </b-form-group>

          <b-form-group
              v-if="color =='dark' "
              id="input-group-1"
              label="Password:"
              label-for="input-1"
              >

              <b-form-input
                id="input-1"
                v-model="admininput.pass"
                type="password"
                required
                placeholder="Enter Password"
                >
              </b-form-input>
          </b-form-group>

          <b-button class="text-white" block type="submit" :variant="color">{{title}}</b-button>
            
        </b-form>

        <b-card v-if="show && color=='success'" title="Reservation" class="mb-2 mt-4">
          <b-card-text>
            <h6>Reservation id: {{resrvation.id}}</h6>
            <h6>Name : {{reservation.name}}</h6>
            <h6>E-mail : {{reservation.email}}</h6>
            <h6>Day : {{reservation.day}}</h6>
            <h6>Price : {{reservation.price}}</h6>
          </b-card-text>
        </b-card>
      </b-modal>
      
      </b-navbar>

      
  </div>
</template>

<script>
import {db} from '@/firebase';
import Swal from 'sweetalert2';
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
            break;
          default:
            db.collection(this.form.room)
              .doc(this.form.reservationid)
              .get()
              .then(doc => {
                if (doc.exists) {
                  db.collection('clients')
                    .doc(doc.data().cllientID)
                    .get()
                    .then(doc2 =>{
                        this.showinfo(doc,doc2)
                    })
                } else {
                    console.log('error')
                }
              })
              .catch(()=>{
                console.log('error')
              })
          break;


      }
    },
    modaldata2(title,color){
      this.$bvModal.show("my-modal2");
      this.color = color;
      this.title = title;

      this.form.reservationid = "";
      this.form.room = null;
      this.form.message = "";
      this.form.email = "";
      
      this.reservation.id = "";
      this.reservation.name = "";
      this.reservation.email = "";
      this.reservation.day = "";
      this.reservation.price = "";

      this.admininput.user = "";
      this.admininput.pass = "";
      this.show = false;

    },
    showinfo(doc,doc2){
      this.show = true;

      this.reservation.id = doc.id;
      this.reservation.name = doc2.data().name;
      this.reservation.email = doc2.data().email;
      this.reservation.day = doc.data().day;
      this.reservation.price = doc.data().price;
    }
  }
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