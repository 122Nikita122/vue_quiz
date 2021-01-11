<template>
  <section v-bind:class="setCheck" >
    <div class="hero-body" >
      <h2>{{question}}</h2>
      <div class="is-flex-direction-column" v-bind:class="{ active: isActive }" @click="setCheck">
        <label class="input_option checkbox" for="1">
            <input type="radio" name="x" id="1" value="1 первый вариант">
            {{option[0]}}
        </label>
        <label class="input_option checkbox" for="2">
            <input type="radio" name="x" id="2">
            {{option[1]}}
        </label>
        <label class="input_option checkbox" for="3">
            <input type="radio" name="x" id="3">
            {{option[2]}}
        </label>
      </div> 
    </div> 
    
  </section> 
</template>

<script>
export default {
    name: 'Test',
    props: { 
      question: String,
      option: Array,
      ansver: Number,      
    },
}
</script>
<style>
.input_option {
  display: block !important;
  margin-bottom: 1rem;
}

</style>