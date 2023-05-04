<template>
  <div>
    <nav class="navbar navbar-light bg-light m-3">
      <button
        class="navbar-toggler ms-4 m-2"
        type="button"
        @click="showSidebar = !showSidebar"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <router-link to="/Home" class="navbar-brand mx-auto title-adjust">
        <i class="bi bi-house-door-fill me-2"></i>Home
      </router-link>
      <router-link to="/newcar">
        <i type="button" class="bi bi-plus-lg mx-4 size-adjust"></i>
      </router-link>
    </nav>
    <div class="sidebar" :class="{ 'sidebar--visible': showSidebar }">
      <div class="sidebar-header">
        <button class="close-button" @click="showSidebar = false">&times;</button>
      </div>
      <button class="sidebar__button" @click="redirectToMaintenancePage">
        <i class="bi bi-tools me-2"></i>
        Maintenance
      </button>
      <button class="sidebar__button" @click="redirectToMechanicsPage('fuel')">
        <i class="bi bi-fuel-pump-fill me-2"></i>
        Calculate fuel
      </button>
      <button class="sidebar__button" @click="redirectToMechanicsPage('maps')">
        <i class="bi bi-geo-alt-fill me-2"></i>
        Mechanics near me
      </button>
      <button class="sidebar__button" @click="redirectToPhonePage">
        <i class="bi bi-telephone-fill me-2"></i>
        Call for road help
      </button>
      <button class="sidebar__button" @click="redirectToAuthorsPage">
        <i class="bi bi-person-fill me-2"></i>
        Authors
      </button>
      
    </div>
    <div class="overlay" v-if="showSidebar" @click="showSidebar = false"></div>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
  data() {
    return {
      showSidebar: false,
    };
  },
  methods: {
    redirectToMechanicsPage(page) {
      // Redirect to the mechanics page here
      if (page === 'maps') {
        // Redirect to the Maps page
        this.$router.push('/maps');
      } else if (page === 'fuel') {
        // Redirect to the Fuel page
        this.$router.push('/fuel');
      }
    },
    redirectToMaintenancePage() {
      // Redirect to the Maintenance page here
      this.$router.push('/maintenance');
    },
    redirectToAuthorsPage() {
      // Redirect to the Authors page here
      this.$router.push('/authors');
    },
    redirectToMaintenancePage() {
      // Redirect to the Maintenance page here
      this.$router.push('/home');
    },
    redirectToPhonePage() {
      // Redirect to the Maintenance page here
      this.$router.push('/phone');
    },
    redirectToAddNewCar() {
      // Redirect to the AddNewCar page here
      this.$router.push('/newcar');
    },
  },
};
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 0px;
  left: 0;
  height: calc(100%);
  width: 250px;
  background-color: #fff;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
  transform: translateX(-250px);
  transition: transform 0.3s ease-in-out;
  z-index: 9999;
}

.sidebar--visible {
  transform: translateX(0);
}

.sidebar__button {
  display: block;
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  text-align: left;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

  
  .sidebar__button:hover {
    background-color: #f2f2f2;
  }
  
  .sidebar-header {
    background-color: #f5f5f5;
    color: #333;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .close-button {
    font-size: 20px;
    border: none;
    background: transparent;
    cursor: pointer;
  }
  
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.5);
  }
  </style>