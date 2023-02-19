<template>
  <div class="q-pa-md">
    <div style="overflow-x:auto;">
      <div class="row justify-end">
        <q-pagination
      v-model="current"
      :max="5"
      direction-links
    />
        <q-btn @click="addDialog = true" class="q-px-lg q-mb-xs" color="primary" label="+Add" />

      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">N_</th>
            <th scope="col">Product Name</th>
            <th scope="col">Cost</th>
            <th scope="col">Address</th>
            <th scope="col">Product Type Id</th>
            <th scope="col">Created Date</th>
            <th scope="col">Edit/Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="stuff,index in product" :key="stuff.id">
            <th scope="row">{{index+1}}</th>
            <td>{{ stuff.name_uz }}</td>
            <td>{{ stuff.cost }}</td>
            <td>{{ stuff.address }}</td>
            <td>{{ stuff.product_type_id }}</td>
            <td>{{ stuff.created_date }}</td>
            <td>
              <q-btn flat round color="primary" icon="edit" @click="editProduct(stuff.id, true)" />
              <q-btn flat round color="red" icon="delete_outline" @click="deleting(stuff.id)" />

            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <q-dialog v-model="editShow">
        <q-card style="width: 100%; max-width:400px;">
          <q-card-section>
            <div class="text-h6">Edit Product</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <q-input dense label="Name" v-model="editForm.name_uz" autofocus />
            <q-input dense label="Cost" v-model="editForm.cost" />
            <q-input dense label="Product Type id" v-model="editForm.product_type_id" />
            <q-input dense label="Address" v-model="editForm.address" />
            <q-input dense type="date" label="Created Data" v-model="editForm.created_date" />
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="cancel" color="gray" v-close-popup @click="editShow = false" />
            <q-btn flat label="Edit" color="primary" v-close-popup @click="editItem(editForm.id)" />
          </q-card-actions>
        </q-card>
      </q-dialog>
      <q-dialog v-model="addDialog">
        <q-card style="width: 100%; max-width:400px;">
          <q-card-section>
            <div class="text-h6">Create new product</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <q-input dense label="Name" v-model="form.name_uz" autofocus />
            <q-input dense label="Cost" v-model="form.cost" />
            <q-input dense label="Product Type id" v-model="form.product_type_id" />
            <q-input dense label="Address" v-model="form.address" />
          </q-card-section>

          <q-card-actions align="right" class="text-primary">
            <q-btn flat label="cancel" color="dark" v-close-popup />
            <q-btn flat label="Create Product" color="primary" v-close-popup @click="createProduct()" />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      deleted: false,
      addDialog: false,
      editShow: false,
      editForm: {},
      form: {
        name_uz: '',
        cost: null,
        product_type_id: null,
        address: '',
      }
    }
  },
  computed: {
    ...mapGetters("product", ["product"]),
  },
  mounted() {
    this.getProduct();
  },
  methods: {
    ...mapActions("product", ["getProduct", "deleteProduct", "addProduct", "updateProduct"]),
    deleting(id) {
      this.deleteProduct(id);
    },
    createProduct() {
      this.form["created_date"] = new Date();
      if(this.form){
        this.addProduct(this.form);
      }
      window.location.reload();
    },
    editProduct(id, bool) {
      axios.get(`http://94.158.54.194:9092/api/product?id=${id}`)
        .then((response) => {
          this.editForm = response.data[0];
        })
        .catch(error => {
          console.log(error)
        });
      this.editShow = bool;

    },
    editItem(id) {
      this.updateProduct({ id, data: this.editForm });
      this.getProduct();
      window.location.reload();

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

table td,
table th {
  padding: 8px;
}

table tr:nth-child(even) {
  background-color: #f2f2f2;
}

table tr:hover {
  background-color: #ddd;
}

table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #1976D2;
  color: white;
}
</style>
