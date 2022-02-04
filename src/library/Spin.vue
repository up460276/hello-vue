<template>
  <div class="spin" v-if="showSpinner">
  </div>
</template>

<script>
export default {
  name: 'Spin',
  props: {
      showSpinner: Boolean
  },
  methods:{
    show: function(){
        this.style.visible = true;
    },
    hide: function(){
        this.style.visible = false;
    }
  }
}
</script>

<style scoped>
    .spin {
        display: inline-block;
        width: 50px;
        height: 50px;
        border: 3px solid rgba(248, 0, 0, 0.856);
        border-radius: 50%;
        border-top-color: #000;
        animation: spin 0.8s ease-in-out infinite;
        -webkit-animation: spin 1s ease-in-out infinite;
    }
    @keyframes spin {
        to {
          -webkit-transform: rotate(360deg);
        }
      }
    @-webkit-keyframes spin {
        to {
          -webkit-transform: rotate(360deg);
        }
    }
</style>