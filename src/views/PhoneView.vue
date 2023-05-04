<template>
    <div class="div-container">
      <TopBar />
      <div class="sidebar">
        <!-- Sidebar content -->
      </div>
      <div class="call-container">
        <p>This phone number is for road assistance.</p>
        <button class="call-button" @click="callNumber">Call +48321321321</button>
        <i><p>Please note that charges may apply depending on your mobile carrier.</p></i>
      </div>
    </div>
  </template>
  
  <script>
  import TopBar from '@/components/TopBar.vue'
  
  export default{
    name: 'Phone',
    components: {
      TopBar
    },
    methods: {
      callNumber() {
        window.location.href = 'tel:+48321321321'
      }
    }
  }
  </script>
  
  <style scoped>
  .call-container {
    text-align: center;
  }
  .call-button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 12px 24px;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
    margin: 24px 0;
  }
  .call-button:hover {
    background-color: #0069d9;
  }
  </style>