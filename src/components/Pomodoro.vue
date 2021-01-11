<template>
  <section class="section has-background-danger is-flex is-justify-content-center">    
      <h1 class="title title_time">{{displayMinutes}} : {{displaySeconds}}</h1>
    <div class="buttons has-addons">
    <button class="button is-success is-selected" @click="getTime()" >Старт</button>
    <button class="button" @click="stopTime">Cтоп</button>  
    </div>    
  </section>
    
</template>

<script>

export default {
    name: 'Pomodoro',
    data() {
        return{
            displayMinutes: 20,
            displaySeconds: 0,
						stop: false,						
        }
    },
    methods: {
      getTime(){
				this.stop = true;                  
        const timer = setInterval(() => {					
					if(this.stop){
						if (this.displayMinutes === 0 && this.displaySeconds === 0) {
							clearInterval(timer)
							return							                
						}               
						if(this.displaySeconds === 0 && this.displayMinutes > 0 ) { 
							this.displayMinutes -= 1;                     
							this.displaySeconds = 59;                    
						}                
						else this.displaySeconds  -= 1;
					}
				}, 100)          
       },
        stopTime() {
						this.stop = false;
        } 
    }
}
</script>

<style >
.title_time {
    margin: 0 1rem 0 0 !important;
}
</style>