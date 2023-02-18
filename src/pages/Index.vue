<template>
  <div class="q-pa-md">
    <div style="overflow-x:auto;">
      <div class="row justify-end">
        <q-btn @click="addDialog = true" color="primary" label="+Add"/>

      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">N_</th>
            <th scope="col">Product Name</th>
            <th scope="col">Cost</th>
            <th scope="col">Address</th>
            <th scope="col">Product Type</th>
            <th scope="col">Created Date</th>
            <th scope="col">Edit/Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="stuff in product" :key="stuff.id">
            <th scope="row">{{ stuff.id }}</th>
            <td>{{ stuff.name_uz }}</td>
            <td>{{ stuff.product_type_id }}</td>
            <td>{{ stuff.cost }}</td>
            <td>{{ stuff.address }}</td>
            <td>{{ stuff.created_date }}</td>
            <td>
              <q-btn flat round color="primary" icon="edit" @click="editStaff(stuff.id)" />
              <q-btn flat round color="red" icon="delete_outline"  @click="deleting(stuff.id)"/>

            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <br>
    <div>{{product}}</div>

    <div>
      <!-- <q-dialog v-model="deleted">
        <q-card>
          <q-card-section>
            <div class="text-h6">Delete</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
           Are you sure ? {{note}}
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="cancel" color="gray" v-close-popup @click="trash = false" />
            <q-btn flat label="OK" color="red" v-close-popup @click="trash = true" />
          </q-card-actions>
        </q-card>
      </q-dialog> -->

       <q-dialog v-model="addDialog" persistent>
        <q-card style="width: 100%; max-width:400px;">
          <q-card-section>
            <div class="text-h6">Create new product</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <q-input dense label="Name" v-model="form.name_uz" autofocus />
            <q-input dense label="Cost" v-model="form.cost" />
            <q-input dense label="Product Type id" v-model="form.product_type_id" />
            <q-input dense label="Address" v-model="form.address" />
            <q-input type="date" dense v-model="form.created_date" />
          </q-card-section>

          <q-card-actions align="right" class="text-primary">
            <q-btn flat label="cancel" color="gray" v-close-popup />
            <q-btn flat label="Create Product" color="primary" v-close-popup @click="createProduct()" />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      deleted: false,
      addDialog:false,
      edit:false,
      form:{
        name_uz:'',
        cost:null,
        product_type_id:null,
        address:'',
        created_date:null,

      }
    }
  },
  computed:{
    ...mapGetters("product", ["product"]),

  },
  mounted() {
    this.getProduct();
  },
  methods:{
  ...mapActions("product", ["getProduct", "deleteProduct", "addProduct"]),
    deleting(id){
      this.deleteProduct(id);
    },
    createProduct(){
      this.addProduct(this.form)
      this.form={
        name_uz:'',
        cost:null,
        product_type_id:null,
        address:'',
        created_date:'',
      }
      this.addDialog = false;
    }
  }
}
</script>

<style lang="css" scoped>
table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

table td, table th {
  border: 1px solid #ddd;
  padding: 8px;
}

table tr:nth-child(even){background-color: #f2f2f2;}

table tr:hover {background-color: #ddd;}

table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color:#1976D2;
  color: white;
}
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.bgPrimary{
  background-color: #21bbd3;
}
button {
  outline: none;
  border: none;
  background-color: transparent;
}
.modal {
  display: block;
}
.delete-button {
  padding: 10px 20px;
  margin: 0 15px;
  background-color: rgb(182, 12, 12);
  color: white;
  border: 1px solid black;
  border-radius: 5px;
}
.delete-cancel {
  padding: 10px 20px;
  margin: 0 15px;
  background-color: rgb(54, 53, 53);
  color: white;
  border: 1px solid black;
  border-radius: 5px;
}
input {
  outline: none;
  border: 0;
}
.input-outline {
  outline: auto;
  border: 1px solid rgba(0, 0, 0, 0.226);
}
.borderBottom {
  width: 100%;
  margin: 0 auto;
  padding: 10px 0;
  border-bottom: 2px solid #21bbdd;
}
.button {
  width: 200px;
  padding: 15px 20px;
  background-color: #21bbd3;
  border: 1px solid white;
  outline: none;
  color: white;
  border-radius: 25px;
  transition: all 0.5s ease;
}
.button:hover {
  background-color: gold;
}
</style>
