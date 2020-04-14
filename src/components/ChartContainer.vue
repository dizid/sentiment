<template>
   <div><h3>This component gets the Firestore data</h3>
      <p> avgScores.avgPdHappy:  {{ avgScores.avgPdHappy }}</p>
      <p v-if="dataLoaded"> [if loaded] avgScores:  {{ avgScores }}</p> 
       <!-- <p> tweetdata:  {{ tweetdata }}</p> -->
 </div>
</template>
<script>
import { db } from '../db.js'
export default {
   data: () => ({ 
   tweetdata: [],  // These are returned from Firestore
   twitter_screen_name: 'dizid',
   avgScores: {avgPdHappy:'',avgPdSad:'',avgPdAngry:'',avgPdFear:'',avgPdExcited:'',avgPdBored:'' }, 
   dataLoaded: false
   }),
 

// I want to rewrite this:
firestore() {
   this.dataLoaded = true
   return {tweetdata: db.collection('tweets').where('screen_name', '==', this.twitter_screen_name), }
   }, 

// .. to this:

/* methods: {
getData: function() {
   return {tweetdata: db.collection('tweets').where('screen_name', '==', this.twitter_screen_name), }
      },
},

 created () {
    this.getData
    this.dataLoaded = true
     }, */

computed: {
calculateAvgScores() {
 if(! this.dataLoaded) {
            return null; }
            else {
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
console.log("dataLoaded: ", this.dataLoaded)
    return this.avgScores 
    }
    }
}, // end computed
}
</script>