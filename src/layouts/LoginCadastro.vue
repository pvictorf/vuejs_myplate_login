<template>
  <div class="login">
     <div class="login__container q-ma-md q-gutter-y-md column" v-if="!registrado">

         <div class="login__logo">
             <!--img src="assets/q-avatar.jpg" class="avatar"-->
            <h1 class="text-h2 text-white" style="margin:18px 0;">[LOGO]</h1>
         </div>

        <!-- Nome -->
         <q-input  
            v-model="usuario.nome" type="text" placeholder="Nome" inputmode="text"
            bgColor="white" color="grey-2" outlined :dense="true"
            :rules="[val => !!val || 'Digite seu nome']">
            <template v-slot:prepend><q-icon name="person" /></template>
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

        <!-- Telefone -->
        <q-input  
            v-model="usuario.telefone" type="text" mask="(##) #####-####" placeholder="Telefone" inputmode="numeric"
            bgColor="white" color="grey-2"  outlined :dense="true"    
            :rules="[val => !!val || 'Digite seu telefone']">
            <template v-slot:prepend><q-icon name="phone" /></template>
        </q-input>
        
        <q-btn @click="registrado=true"  color="green" text-color="white" label="Cadastrar" />

     </div>

     <div class="q-ma-md q-gutter-y-md column login__container" v-else>
        <p>Nome: <strong> {{usuario.nome}} </strong></p>
        <p>Email: <strong> {{usuario.email}} </strong></p>
        <p>Telefone: <strong> {{usuario.telefone}} </strong></p>

        <q-btn @click="SET_USUARIO_LOCAL()"   color="green" text-color="white"  label="Confirma seus dados?" />

        
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
                genero: '',
            }
           
        }
    },
    methods: {
        SET_USUARIO_LOCAL() {
            let auth  = {};
            if(this.usuario) {
                auth.nome  = this.tratar_nome(this.usuario.nome);
                auth.email = this.usuario.email;
                auth.telefone = this.usuario.telefone;

                localStorage.setItem("_auth", JSON.stringify(auth));
                this.$router.push('/');
            }

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