//Login e Cadastro
import axios from 'axios'
import { db } from '../../../db'
import { Loading, Notify } from 'quasar'

const state = {
    usuario: {},
    isAuth: null, 
    isCad: null,
};  

const getters = {
    getUsuario: state => {
        return state.usuario;
    },
    isUsuarioAuth : state => {
        return state.isAuth;
    },
};

const mutations = {
    setUsuario(state, usuario) {
        localStorage.setItem("_auth", JSON.stringify(usuario))
        state.usuario = usuario; 
        console.log(state.usuario);
    },
    setAuthUsuario(state, auth) {
        state.isAuth = auth; 
        console.warn(auth);
    },
    
};

const actions = {
    criarUsuarioDB: ({commit, dispatch}, usuario) => {
        Loading.show()
            db.collection("usuarios")
                .where("telefone", "==", usuario.telefone)
                .where("email", "==", usuario.email).limit(1).get()
                .then((query) => { 
                    (query.size > 0) ? dispatch('Notify', 'Usuário Existente!') : dispatch('salvarUsuarioDB', usuario);
                })
                .catch((e)=> console.warn(e))  
        Loading.hide();    
 
    },
    salvarUsuarioDB:  ({commit}, usuario) => {
        db.collection('usuarios').add(usuario)
            .then((auth) => { 
                auth.id ? commit('setAuthUsuario', true) : commit('setAuthUsuario', false);
            }).catch(function(error) {
                console.log("Error getting saved usuario: ", error);
            });
    }, 
    getUsuarioDB: ({commit, dispatch}, usuario) => {
        Loading.show();
        db.collection("usuarios")
            .where("telefone", "==", usuario.telefone)
            .limit(1).get()
            .then((query) => { 
                if(query.size > 0) {
                    commit('setUsuario', usuario),
                    commit('setAuthUsuario', true);
                } else {
                    dispatch('Notify', 'Usuário não encontrado'); 
                    commit('setAuthUsuario', false);
                }
            })
        .catch(function(error) {
            console.log("Error getting usuario: ", error);
        });
        Loading.hide();
    },
    Notify: ({commit}, message) => {
        Notify.create({ message: message, position: 'top'})
        localStorage.clear();
    },
    
    //Repositório
//     Loading.show()
//     db.collection("usuarios")
//         .where("telefone", "==", usuario.telefone)
//         .where("email", "==", usuario.email)
//         .get()
//         .then((query) => {
//             query.forEach((doc) => {
//                 console.log(doc.id, " => ", doc.data());
//                 const usu = doc.data();
//                 console.log(usu.nome);
//             });
//         })

//        db.collection('usuarios').add(usuario);

// Loading.hide();    


};

export default { state, getters, mutations, actions }