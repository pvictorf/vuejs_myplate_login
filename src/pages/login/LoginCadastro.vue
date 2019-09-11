<template>
  <div class="login q-pa-sm q-md-sm q-lg-sm">
        <div class="login__container" v-if="!registrado">
        <div class="login__logo">
             <!--img src="assets/q-avatar.jpg" class="avatar"-->
            <h3 class="text-white">Acesso Fácil</h3>
         </div>

        <!-- Nome -->
         <q-input  
            v-model="usuario.nome" type="text" placeholder="Nome" inputmode="text"
            bgColor="white" color="grey-2" outlined :dense="true"
            :rules="[val => !!val || 'Digite seu nome']">
            <template v-slot:prepend><q-icon name="person" /></template>
        </q-input>

       <!-- Telefone -->
        <q-input  
            v-model="usuario.telefone" type="text" mask="(##) #####-####" placeholder="Telefone" inputmode="numeric"
            bgColor="white" color="grey-2"  outlined :dense="true"    
            :rules="[val => !!val || 'Digite seu telefone']">
            <template v-slot:prepend><q-icon name="phone" /></template>
        </q-input>

        <!-- E-mail -->
        <q-input  
            v-model="usuario.email" type="email"  placeholder="E-mail"
            bgColor="white" color="grey-2" outlined :dense="true"    
            :rules="[val => !!val || 'Digite seu email']">
            <template v-slot:prepend><q-icon name="mail" /></template>
        </q-input>

        <!-- Senha -->
        <q-input  
            v-model="usuario.senha" type="password" placeholder="Senha"
            bgColor="white" color="grey-2" outlined  :dense="true"  
            :rules="[val => !!val || 'Digite sua senha']">
            <template v-slot:prepend color="blue"><q-icon name="lock" /></template>
        </q-input>
        
        <q-btn @click="registrado=true"  color="green" text-color="white" label="Cadastrar" />

     </div>

     <div class="q-ma-md q-gutter-y-md column login__container text-white" v-else>
        <p>Nome: <strong> {{usuario.nome}} </strong></p>
        <p>Email: <strong> {{usuario.email}} </strong></p>
        <p>Telefone: <strong> {{usuario.telefone}} </strong></p>

        <q-btn @click="criarUsuario()"   color="green" text-color="white"  label="Confirma seus dados?" />
     </div>
    <br/>
  </div>

</template>

<script>
import { Quasar, QInput, QForm, QRadio } from 'quasar';

export default { 
    components: { QInput, QForm, QRadio },
    created() {
        if(localStorage.getItem("_auth")) {
           console.log("Usuário já está authenticado");
        }
    },
    data() {
        return {
            registrado: false,
            usuario: { 
                nome: '',
                telefone: '',
                email: '',
                senha: '',
            }
        }
    },
    methods: {
        criarUsuario() {
            this.$store.dispatch('criarUsuarioDB', this.usuario);
            setTimeout(() => {
                if(this.$store.getters.isUsuarioAuth) {
                    this.$router.replace({ path: "/login/cadsucesso", query: {nome: this.usuario.nome} });
                }
            }, 800)
        }, 

    
        tratar_nome(n) {
            console.log(n);
            let letras = n.trim().toLowerCase().split(' ');  
            let nome = letras.map( (n) => {  

                if(n.length > 2) {
                //Retira a primeira letra do vetor n e converte para maiuculo
                let letra = n.charAt(0).toUpperCase();
                //Troca a primeira letra pela letra maiuscula
                return n.replace(n.charAt(0), letra);
                } else {
                //Retorna sem alterar
                return n.length > 1 ? n : '';
                }
            //Join junta o vetor em uma string
            }).join(' ') 

            return nome;

        }
    },
 
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
    margin: 14px 0 0 0;
}

.login__social {
    display: flex;
    justify-content: space-between;

}

.login__social > * {
    width: 140px;
    margin: 0 10px;
    min-width: 140px;
}

.login__criar {
    cursor: pointer;
}

.login__criar strong:hover {
    color: black;
}



</style>