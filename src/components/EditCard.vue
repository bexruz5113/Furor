<template>
  <div>
    <q-dialog v-model="edit">
      <q-card>
        <q-card-section>
          <div class="text-h6">Edit Product</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input dense label="Name" v-model="form.name_uz" autofocus />
          <q-input dense label="Cost" v-model="form.cost" />
          <q-input dense label="Product Type id" v-model="form.product_type_id" />
          <q-input dense label="Address" v-model="form.address" />
          <q-input type="date" dense v-model="form.created_date" />
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="cancel" color="gray" v-close-popup @click="edit = false" />
          <q-btn flat label="Edit" color="red" v-close-popup @click= "editItem(data)"/>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  name: 'EditCard',
  props: {
    title: {
      type: String,
      required: true
    },
  },
  data(){
    return {
      edit:false,
    }
  }
}
</script>
