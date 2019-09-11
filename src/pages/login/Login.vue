<template>
    <div class="login q-pa-sm q-md-sm q-lg-sm">
        <div  id="firebaseui-auth-container"  class="login__container">
         <div class="login__logo">
             <!--img src="assets/q-avatar.jpg" class="avatar"-->
            <h3 class="text-white">Acesso Fácil</h3>
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
            <br/>
            <router-link to="/login/cadastro" class="login__subtext login__criar mt-2">
                Não possui uma conta? <strong> Criar Conta </strong>
            </router-link>
        </div>
       </div> 
    </div>
</template>

<script>

import { Quasar, QInput, QForm } from 'quasar';
import { mapActions } from 'vuex';

export default { 
    name   : 'Login',
    components: { QInput, QForm },
    data() {
        return {
            telefone: '',
            senha: '',
        }
    },
    methods: {
        ...mapActions([ 'getUsuarioDB' ]),
        login() {
           const usuario = {
                   telefone:this.telefone,
                   senha:this.senha
                }
            this.getUsuarioDB(usuario);

            setTimeout(() => {
                if(this.$store.getters.isUsuarioAuth) {
                    this.$router.replace({ path: "/" });
                }
            }, 800)
        },
    }
    /*
    data() {
        return {
            telefone: '',
            senha: ''
        }
    },
    methods: {
        ...mapActions([ 'getUsuarioDB' ]),
        login() {
           const usuario = {
                   telefone:this.telefone,
                   senha:this.senha
                }
            this.getUsuarioDB(usuario);
        },
    },
    */
}
</script>

<style scoped>

.login {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    background: #4b6cb7;  
    background: -webkit-linear-gradient(to right, #182848, #4b6cb7); 
    background: linear-gradient(to right, #182848, #4b6cb7); 
   
}

.login__container {
    display:flex;
    flex-direction: column;
    align-self: center;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
}

.login__logo {
    display: flex;
    justify-content: center;
    align-items: flex-start;
}

.login__subtext {
    text-align: center;
    color: #fff;
    margin: 14px auto;
}

.login__social {
    display: flex;
    justify-content: space-between;

}

.login__social > * {
    width: 100%;
    margin: 0 8px;
    min-width: 95px;
}

.login__criar {
    cursor: pointer;
    text-decoration: none;
}

.login__criar strong:hover {
    color: green;
}



</style>