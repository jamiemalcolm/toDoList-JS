import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      items :[
        {name:'Buy milk' , priority:'High Priority', completed: false},
        {name:'Buy cheese' , priority:'Low Priority', completed: false},
        {name: 'Clean Room', priority:'High Priority', completed: false},
      
      ],
      newItem:"",
    },
    methods: {
      saveNewItem: function (){
        this.items.push({name: this.newItem, priority: this.priority, completed: false});
        this.newItem = '';
      },
      markComplete: function (index) {
        this.items[index].completed = true;
      }
    },
    }
  );
});
