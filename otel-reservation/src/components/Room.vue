<template>
  <div>
      <b-container fluid class="bv-example-row mt-4">
          <b-row>

              <b-col>
                  <b-card no-body class="overflow-hidden">
                      <b-row no-gutters>
                          <b-col md="6">
                              <b-card-img :src="require('../assets/img1.jpg')" class="rounded-0">
                              </b-card-img>
                          </b-col>
                          <b-col md="6">
                              <b-card-body class="text-primary" title="Single">
                                  <b-card-text class="text-dark">
                                      <h2 class="mt-4">Room with wifi</h2>
                                      <h2 class="mt-4">1 Person</h2>
                                      <h2 class="mt-4">Individual space to rest.</h2>
                                  </b-card-text>
                                  <b-button
                                    @click="modaldata('Single', 500, 'primary')"
                                    size="lg"
                                    class="mt-4"
                                    block
                                    variant="primary"
                                  >Book</b-button>
                              </b-card-body>
                          </b-col>
                      </b-row>
                  </b-card>
              </b-col>

              <b-col>
                  <b-card no-body class="overflow-hidden">
                      <b-row no-gutters>
                          <b-col md="6">
                              <b-card-img :src="require('../assets/img2.jpg')" class="rounded-0">
                              </b-card-img>
                          </b-col>
                          <b-col md="6">
                              <b-card-body class="text-primary" title="Double">
                                  <b-card-text class="text-dark">
                                      <h2 class="mt-4">Double Room</h2>
                                      <h2 class="mt-4">2 Person</h2>
                                      <h2 class="mt-4">Popular Room</h2>
                                  </b-card-text>
                                  <b-button
                                    @click="modaldata('Double', 700, 'success')"
                                    size="lg"
                                    class="mt-4"
                                    block
                                    variant="success"
                                  >Book</b-button>
                              </b-card-body>
                          </b-col>
                      </b-row>
                  </b-card>
              </b-col>
              <b-row class="mt-4 mb-4">
                  <b-col>
                  <b-card no-body class="overflow-hidden">
                      <b-row no-gutters>
                          <b-col md="6">
                              <b-card-img :src="require('../assets/img3.jpg')" class="rounded-0">
                              </b-card-img>
                          </b-col>
                          <b-col md="6">
                              <b-card-body class="text-primary" title="Family">
                                  <b-card-text class="text-dark">
                                      <h2 class="mt-4">Family Room</h2>
                                      <h2 class="mt-4">4-5 Person</h2>
                                      <h2 class="mt-4">Excellent Family Room.</h2>
                                  </b-card-text>
                                  <b-button
                                    @click="modaldata('Single', 800, 'warning')"
                                    size="lg"
                                    class="mt-4 text-light"
                                    block
                                    variant="warning"
                                  >Book</b-button>
                              </b-card-body>
                          </b-col>
                      </b-row>
                  </b-card>
              </b-col>
              </b-row>

              

              <b-col>
                  <b-card no-body class="overflow-hidden">
                      <b-row no-gutters>
                          <b-col md="6">
                              <b-card-img :src="require('../assets/img4.jpg')" class="rounded-0">
                              </b-card-img>
                          </b-col>
                          <b-col md="6">
                              <b-card-body class="text-dark" title="Deluxe">
                                  <b-card-text class="text-dark">
                                      <h2 class="mt-4">Deluxe Room</h2>
                                      <h2 class="mt-4">1-7 Person</h2>
                                      <h2 class="mt-4">Deluxe Room</h2>
                                  </b-card-text>
                                  <b-button
                                    @click="modaldata('Deluxe', 1000, 'dark')"
                                    size="lg"
                                    class="mt-4"
                                    block
                                    variant="dark"
                                  >Book</b-button>
                              </b-card-body>
                          </b-col>
                      </b-row>
                  </b-card>
              </b-col>

          </b-row>
      </b-container>

      <b-modal hide-footer id="my-modal" :title="form.room">
          <b-form @submit="onSubmit">

              <b-form-group id="input-group-1" label="Name:" label-for="input-1">
                  <b-form-input
                    id="input-1"
                    v-model="form.name"
                    type="text"
                    required
                    placeholder="Enter Name">
                  </b-form-input>
              </b-form-group>

              <b-form-group id="input-group-2" label="E-mail" label-for="input-2">
                  <b-form-input
                    id="input-2"
                    v-model="form.email"
                    required
                    placeholder="Enter E-mail">
                  </b-form-input>
              </b-form-group>

              <b-form-group id="input-group-2" label="Day to Book" label-for="input-2">
                  <b-form-input
                    id="input-2q"
                    v-model="form.date"
                    required
                    type="date"
                    placeholder="Select Day">
                  </b-form-input>
              </b-form-group>

              <b-form-group id="input-group-2" label="Price per Night" label-for="input-2">
                  <b-form-input
                    id="input-2qa"
                    v-model="form.price"
                    required disabled>
                  </b-form-input>
              </b-form-group>

              <b-button class="text-white" block type="submit" :variant="color">Book</b-button>

          </b-form>
      </b-modal>
  </div>
</template>

<script>
import {db} from '@/firebase';
import Swal from 'sweetalert2';
export default {
    data() {
        return {
            form: {
                email: "",
                name: "",
                room: "",
                price: "",
                date: "",
            },
            color: ""
        };
    },
    methods: {
        onSubmit(evt) {
            evt.preventDefault();
            db.collection("clients")
                .add({
                    name: this.form.name,
                    email: this.form.email
                })
                .then(docRef =>{
                    db.collection(this.form.room)
                        .add({
                            clientID: docRef.id,
                            room: this.form.room,
                            price: this.form.price,
                            day: this.form.date
                        })
                        .then(d =>{
                            Swal.fire("Good job!", `Reservation id: ${d.id}`, "success");
                            this.$bvModal.hide("my-modal");
                            this.form.email = "";
                            this.form.name = "";
                        });
                });
        },
        modaldata(room, price, color){
            this.$bvModal.show("my-modal");
            this.form.room = room;
            this.color = color;
            this.form.price = price;
        }
        
    }
    
};
</script>

<style scoped>
img {
    height: 300px !important;
}
</style>