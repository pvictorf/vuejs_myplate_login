<template>
  <q-layout view="lHh Lpr lFf">
   <app-header :usuario="usuario"></app-header>
    <q-page-container>

   <app-home-buttons></app-home-buttons>


    <div class="q-ma-md q-gutter-y-md column login__container" v-if="false">
        USUÁRIO LOGADO
        <p> {{ usuario.nome }}</p>
        <p> {{ usuario.email }}</p>
        <p> {{ usuario.telefone }}</p>

         <button @click="$router.push('/login')">SAIR</button>

        <button @click="logout">EXCLUIR CONTA</button>

      
        <div class="q-pa-md row items-start q-gutter-md">
          <q-list> 
          <q-item style="padding: 0px;">
            <q-item-section>
              <q-item-label class="text-green text-bold">Single line item</q-item-label>
              <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
            </q-item-section>
            <q-item-section side top>
              <div class="text-orange">
                <q-icon name="star" />
                <q-icon name="star" />
                <q-icon name="star" />
              </div>
            </q-item-section>
          </q-item>
          </q-list>
        </div>
    </div>
   </q-page-container>
  </q-layout>
</template>

<script>
import appHomeButtons from 'components/menu/HomeButtons.vue'
import appHeader from 'components/menu/Header.vue'
import { 
  QInput, 
  QForm, 
  QList,
  QItem,
  QItemSection,
  QItemLabel,
  QAvatar } from 'quasar';

export default { 
   data() {
       return {
          usuario: {},
       }
   }, 
   methods: {
       logout() {
        localStorage.clear();
        this.$router.push('/');
       }
   },
   components: {
    QInput,
    QForm,
    appHeader,
    appHomeButtons,
  }
}
</script>

<style scoped>

.login {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    background: #fc4a1a; 
    background: -webkit-linear-gradient(to left, #f7b733, #fc4a1a); 
    background: linear-gradient(to left, #f7b733, #fc4a1a); 
}
</style>