<template>
  <div class="btn-test">
      <button v-if="show" v-on:click="funcTest()">{{btnContent}}</button>    
  </div>
</template>

<script>
export default {
  name: 'Timer',
  props: {
    btnContent: String,
    show: Boolean
  },
  methods:{
    funcTest: function(){
        alert('test');
    }
  }

}


</script>
