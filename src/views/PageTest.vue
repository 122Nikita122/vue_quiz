<template>
    <div>
        <Pomodoro/>
        <Test
          v-for="test in data"
          v-bind:key="test.id"
          v-bind:question="test.question"
          v-bind:option="test.option"
          v-bind:ansver="test.ansver"

        />
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import Pomodoro from '../components/Pomodoro'
import Test from '../components/Test'

export default {
    name: 'PageTest',
    components: {
        Pomodoro,
        Test
    },
    data() {
      return {
        data: []
      }
    },
    computed: mapGetters(["allTests"]),
    async mounted() {
      this.$store.dispatch('fetchTests');
      this.data = this.$store.state.test.tests          
    }    
}
</script>