<template>
  <div class="empregos">
    <div class="q-pa-md row items-start q-gutter-md">
        <q-card class="my-card">
            <q-card-section>
                {{ lorem }}
            </q-card-section>
        </q-card>
    </div> 
  </div>
</template>

<script>
import { Quasar, QInput, QForm, QCard } from 'quasar';


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