import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      items :[
      'Buy milk',
      'Buy cheese',
      'Clean Room',],
      newItem: '',
    },
    methods: {
      saveNewItem: function (){
        this.items.push(this.newItem);
        this.newItem = '';
      }
    },
    }
  );
});
