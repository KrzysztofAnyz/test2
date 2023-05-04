<template>
  <div class="div-container">
    <TopBar />
    <div class="authors-container">
      <div v-for="(author, index) in authors" :key="index" class="author-info">
        <h2>{{ author.Name }} {{ author.Surname }}</h2>
        <p>Student ID: {{ author.student_id }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import TopBar from '@/components/TopBar.vue'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'

export default {
  name: 'AuthorsView',
  components: {
    TopBar
  },
  data() {
    return {
      authors: []
    }
  },
  async created() {
    const authorsCollection = collection(db, 'authors')
    const authorsSnapshot = await getDocs(authorsCollection)
    authorsSnapshot.forEach((doc) => {
      this.authors.push(doc.data())
    })
  }
}
</script>

<style scoped>
.authors-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
}

.author-info {
  text-align: center;
  margin-bottom: 20px;
}

.author-info h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.author-info p {
  font-size: 18px;
  color: #666;
}
</style>