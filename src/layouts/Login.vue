<template>
  <div class="login ">

     <div class="q-ma-md q-gutter-y-md column login__container">

         <div class="login__logo">
             <!--img src="assets/q-avatar.jpg" class="avatar"-->
            <h1 class="text-h2 text-white" style="margin:18px 0;">[LOGO]</h1>
         </div>

        <!-- Login -->
        <q-input  
            v-model="telefone" type="text" mask="(##) #####-####" placeholder="Telefone" inputmode="numeric"
             bgColor="white" color="grey-2" outlined :dense="true"   
            :rules="[val => !!val || 'Digite seu telefone']">
            <template v-slot:prepend><q-icon name="phone" /></template>
        </q-input>

        <!-- Senha -->
        <q-input  
            v-model="senha" type="password" placeholder="Senha"
             bgColor="white" color="grey-2" outlined :dense="true" 
            :rules="[val => !!val || 'Digite sua senha']">
            <template v-slot:prepend color="blue"><q-icon name="lock" /></template>
        </q-input>

        <q-btn @click="login()"  color="green" text-color="white" label="Entrar" />

        <p class="login__subtext">Ou se prefirir, entrar com:</p>

        <div class="login__social">
            <q-btn @click="$q.notify('Em desenvolvimento')" outlined color="blue" text-color="white" label="Facebook" />
            <q-btn @click="$q.notify('Em desenvolvimento')" outlined color="red" text-color="white" label="Google" />
        </div>

        <div class="footer text-center"> 
            <router-link to="/cadastro" class="login__subtext login__criar">
                Não possui uma conta? <strong> Criar Conta </strong>
            </router-link>
        </div>

     </div>
  </div>
</template>

<script>
import { Quasar, QInput, QForm } from 'quasar';


export default { 
    data() {
        return {
            telefone: '',
            senha: ''
        }
    },
    methods: {
        login() {
            try {
            let db = JSON.parse(localStorage.getItem('_auth'));
                if(this.telefone == db.telefone) {
                    this.$router.replace('/');
                } else {
                   this.$q.notify('Telefone incorreto'); 
                }
            } catch (err) {
                this.$q.notify('Usuário não identificado');
            }
        },
    },
   components: {
    QInput,
    QForm
  }
}
</script>

<style scoped>

.login {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    background-position: center;
    background-size: cover;
}

@media screen and (min-width: 481px) {
    .login { background: url('../assets/images/login_bg1200.jpg') no-repeat; }
}

@media screen and (max-width: 480px) {
    .login { background: url('../assets/images/login_bg480.jpg') no-repeat; }
}


.login__container {
    display:flex;
    align-self: center;
    padding: 18px;
    width: 100%;
    max-width: 500px;
}

.login__logo {
    display: flex;
    justify-content: center;
    align-items: flex-start;
}

.login__subtext {
    text-align: center;
    color: #fff;
    margin: 14px 0 0 0;
}

.login__social {
    display: flex;
    justify-content: space-between;

}

.login__social > * {
    width: auto;
    margin: 0 10px;
    min-width: 140px;
}

.login__criar {
    cursor: pointer;
    text-decoration: none;
}

.login__criar strong:hover {
    color: green;
}



</style>