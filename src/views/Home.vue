<template>
    <div>
    <section class="hero is-bold is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            English
          </h1>
          <h2 class="subtitle">
            Testing
          </h2>
        </div>
      </div>
    </section>
    <TestTitle/>
    </div>
</template>

<script>
import TestTitle from '../components/TestTitle'
export default {
    name: 'Home',
    components: {
        TestTitle
    }
}
</script>