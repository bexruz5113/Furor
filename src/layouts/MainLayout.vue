<template>
  <div>
    <q-layout view="lHh Lpr lFf">
      <q-header elevated>
        <q-toolbar>


          <q-toolbar-title>
            Furor Progress
          </q-toolbar-title>

          <q-btn flat dense round icon="menu" aria-label="Menu" @click="leftDrawerOpen = !leftDrawerOpen" />
        </q-toolbar>
      </q-header>
      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>



export default {
  name: 'MainLayout',
  components: {
  },
  data() {
    return {
    }
  }
}
</script>
