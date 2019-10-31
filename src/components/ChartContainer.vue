<template>
   <div><h3>This component gets the Firestore data</h3>
      <p> avgScores.avgPdHappy:  {{ avgScores.avgPdHappy }}</p>
      <p v-if="loaded"> avgScores:  {{ avgScores}}</p> 
 </div>
</template>
<script>
import { db } from '../db.js'
export default {
  // props: {twitter_screen_name: {type: String,required: false, default: 'dizid' }},
   data: () => ({ 
   tweetdata: [],  // These come from Firestore
   twitter_screen_name: 'dizid',
   avgScores: {avgPdHappy:'',avgPdSad:'',avgPdAngry:'',avgPdFear:'',avgPdExcited:'',avgPdBored:'' }, 
   componentLoaded: false
 }),

// This works, but is loaded after the computed values are computed
// firestore:  {tweetdata: db.collection('tweets').where('screen_name', '==', 'dizid')},

 firestore() {
    return {
      tweetdata: db.collection('tweets').where('screen_name', '==', this.twitter_screen_name),
    }
  }, 

computed: {
calculateAvgScores() {
 if(! this.componentLoaded) {
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
      this.loaded = true 
  //   }
console.log("loaded: ", this.loaded)
console.log("this.avgScores.avgPdExcited: ", this.avgScores.avgPdExcited)
    return this.avgScores 
    }
    }
}, // end computed

/* watch: {
    // Whenever the movie prop changes, fetch new data
    twitter_screen_name(twitter_screen_name) {
      // Fetch data about the tweets
      this.$bind('tweetdata', db.collection('tweets').where('screen_name', '==', 'dizid')).then(tweetdata => {
      this.tweetdata === tweetdata
      });
    }
  } */

/* created() {
this.$bind('tweetdata', db.collection('tweets').where('screen_name', '==', 'dizid')).then(data => {
  this.tweetdata === data
})
} */

mounted() {
   
    this.componentLoaded = true;
  },

  }
</script>