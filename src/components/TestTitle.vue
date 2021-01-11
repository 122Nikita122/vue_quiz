<template>
    <router-link to="/test" class="p-4">
        <div class="box mb-2">
            <article class="media">
                <p class="subtitle is-3">Выберите личные местоимения, заменяющие следующие существительные</p>                     
            </article>
            <progress class="progress is-warning" value="0" max="100"></progress>   
        </div>
    </router-link>
</template>

<script>
export default {
    name: 'TestTitle'
}
</script>