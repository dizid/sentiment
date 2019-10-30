<template>
   <div><h3>This component gets the Firestore data</h3>
      <p> avgScores.avgPdHappy:  {{ avgScores.avgPdHappy }}</p>
      <p v-if="loaded"> avgScores:  {{ avgScores}}</p> 
 </div>
</template>
<script>
import { db } from '../db.js'
export default {
   name: 'BarChartContainer',
   
   data: () => ({ 
   tweetdata: [],  // These come from Firestore
   screen_name: 'dizid',
   avgScores: {avgPdHappy:'',avgPdSad:'',avgPdAngry:'',avgPdFear:'',avgPdExcited:'',avgPdBored:'' }, 
   loaded: false
 }),
// firestore:  {tweetdata: db.collection('tweets').where('screen_name', '==', screen_name)},

computed: {
calculateAvgScores() {
 //  if( this.tweetdata ) {
      this.avgScores.avgPdHappy = (this.tweetdata.map(tweetdata => tweetdata.pdHappy ).
         reduce((total, amount) => total + amount,0)/ +this.tweetdata.length * 100).toPrecision(2)
      this.avgScores.avgPdSad = (this.tweetdata.map(tweetdata => tweetdata.pdSad ).
         reduce((total, amount) => total + amount,0)/ +this.tweetdata.length * 100).toPrecision(2)
      this.avgScores.avgPdAngry = (this.tweetdata.map(tweetdata => tweetdata.pdAngry ).
         reduce((total, amount) => total + amount,0)/ +this.tweetdata.length * 100).toPrecision(2)
      this.avgScores.avgPdFear = (this.tweetdata.map(tweetdata => tweetdata.pdFear ).
         reduce((total, amount) => total + amount,0)/ +this.tweetdata.length * 100).toPrecision(2)
      this.avgScores.avgPdExcited = (this.tweetdata.map(tweetdata => tweetdata.pdExcited ).
         reduce((total, amount) => total + amount,0)/ +this.tweetdata.length * 100).toPrecision(2)
      this.avgScores.avgPdBored = (this.tweetdata.map(tweetdata => tweetdata.pdBored ).
         reduce((total, amount) => total + amount,0)/ +this.tweetdata.length * 100).toPrecision(2)
      this.loaded = true 
  //   }
console.log("loaded: ", this.loaded)
console.log("this.avgScores.avgPdExcited: 2", this.avgScores.avgPdExcited)
    return this.avgScores 
    }
}, // end computed
watch: {
   tweetdata() {
      // $bind automatically unbinds the previously bound property
      this.$bind('tweetdata', db.collection('tweets').where('screen_name', '==', screen_name))
    },
  },



}
</script>