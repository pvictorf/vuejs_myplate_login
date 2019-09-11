<template>
    <div style="display: flex; align-itens: flex-start; justify-content:center; padding: 20px;">
    <br/>    
     <q-btn color="blue" push style="margin-right: 20px;">
      <div class="row items-center no-wrap">
        <q-icon left name="map" />
        <div class="text-center">
          Buscar<br>Vagas
        </div>
      </div>
     </q-btn>
     <q-btn color="deep-orange" push>
      <div class="row items-center no-wrap">
        <q-icon left name="share" />
        <div class="text-center">
          Compartilhar<br>Vaga
        </div>
      </div>
     </q-btn>
    </div>
</template>

<script>
import {  Quasar, QBtn } from 'quasar'
export default {
  components: { QBtn },
}
</script>

<style scoped>

</style>