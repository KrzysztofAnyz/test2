<template>
      <div class="div-container">
        <TopBar />
    </div>
    <div class="container my-4">
      <h1 class="text-center mb-4">Fuel Consumption Calculator</h1>
      <form>
        <div class="mb-3">
          <label for="currentMileage" class="form-label">Current Mileage (km)</label>
          <input type="number" class="form-control" id="currentMileage" v-model.number="currentMileage" required>
        </div>
        <div class="mb-3">
          <label for="fuelBought" class="form-label">Amount of Fuel Bought (litres)</label>
          <input type="number" class="form-control" id="fuelBought" v-model.number="fuelBought" required>
        </div>
        <div class="mb-3">
          <label for="fuelPrice" class="form-label">Price of Fuel (PLN/litre)</label>
          <input type="number" class="form-control" id="fuelPrice" v-model.number="fuelPrice" required>
        </div>
        <button type="submit" class="btn btn-primary" @click.prevent="calculateFuelConsumption">Calculate</button>
      </form>
      <div v-if="previousRefuel">
        <hr>
        <h3>Previous Refuel:</h3>
        <p>Mileage: {{ previousRefuel.mileage }} km</p>
        <p>Fuel Bought: {{ previousRefuel.fuelBought }} litres</p>
        <p>Price of Fuel: {{ previousRefuel.fuelPrice }} PLN/litre</p>
        <hr>
        <h3>Fuel Consumption:</h3>
        <p>{{ fuelConsumption }} litres/100km</p>
      </div>
    </div>
  </template>
  
  <script>
      import TopBar from '@/components/TopBar.vue'
  export default {
    name: 'FuelConsumptionCalculator',
    components: {
            TopBar
        },
    
    data() {
      return {
        currentMileage: null,
        fuelBought: null,
        fuelPrice: null,
        previousRefuel: null,
        fuelConsumption: null
      };
    },
    methods: {
      calculateFuelConsumption() {
        // Check if we have a previous refuel to base calculations on
        if (this.previousRefuel) {
          // Check if the current mileage is lower than the previous mileage
          if (this.currentMileage <= this.previousRefuel.mileage) {
            alert('Current mileage must be greater than the previous mileage.');
            return;
          }
          // Calculate the amount of fuel consumed since the last refuel
          const fuelConsumed = this.fuelBought - this.previousRefuel.fuelBought;
          // Calculate the distance driven since the last refuel
          const distanceDriven = this.currentMileage - this.previousRefuel.mileage;
          // Calculate the fuel consumption in litres per 100 km
          this.fuelConsumption = (fuelConsumed / distanceDriven) * 100;
        }
        // Update previous refuel data
        this.previousRefuel = {
          mileage: this.currentMileage,
          fuelBought: this.fuelBought,
          fuelPrice: this.fuelPrice
        };
        // Clear input fields
        this.currentMileage = null;
        this.fuelBought = null;
        this.fuelPrice = null;
      }
    }
  };
  </script>
  
  <style scoped>
  </style>