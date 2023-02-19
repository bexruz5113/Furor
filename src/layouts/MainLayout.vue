<template>
  <div>
    <q-layout>
      <q-header elevated>
        <q-toolbar class="q-px-md ">
          <q-toolbar-title>
            Furor Progress
          </q-toolbar-title>
          <q-btn flat dense round icon="search" class="q-mr-md" aria-label="Menu"/>
          <q-btn flat dense round icon="menu" aria-label="Menu"/>
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
