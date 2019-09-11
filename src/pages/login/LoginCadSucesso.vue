<template>
    <div>
        <h4>Olá {{$route.query.nome}}, seu cadastro foi efetuado com sucesso</h4>
        <br/>
        <button @click="$router.replace('/')">Fazer login</button>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>