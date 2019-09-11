<template>
  <div>
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>
        <q-toolbar-title>
          Acesso Fácil 
        </q-toolbar-title>
        <div><a @click.prevent="sair()" style="cursor:pointer">SAIR</a></div>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Bem Vindo</q-item-label>
        <q-item clickable tag="a" target="_blank" href="https://quasar.dev">
          <q-item-section avatar>
            <q-icon name="map" />
          </q-item-section>
          <q-item-section>
            <q-item-label> {{usuario.nome}} </q-item-label>
            <q-item-label caption>{{usuario.telefone}}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
  </div>
</template>
<script>
import { Quasar, QHeader, QFooter } from 'quasar'
export default {
  props: ['usuario'],
  data () {
    return {
      leftDrawerOpen: false
    }
  },
  methods: {
    sair(){
      localStorage.removeItem('_auth');
      this.$router.replace("/login");
    }
  },
    components: {
    QHeader,
    QFooter
  }
}
</script>
