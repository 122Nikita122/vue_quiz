export default {
    state: {
        tests: []
    },
    actions: {
        async fetchTests(ctx){    
            const response = await fetch('https://my-json-server.typicode.com/122Nikita122/db.json/tests');    
            const arr = await response.json();
            ctx.commit('GET_TESTS', arr)                 
          },
    },
    mutations: {
        GET_TESTS(state, tests){
           state.tests = tests
        }
    },

    getters: {
        allTests(state) {
            return state.tests
        }
    },
}