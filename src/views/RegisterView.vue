<template>
    <div class="marginttop">
        <h1>AutoMate</h1>
        <form @submit.prevent="register">
            <label>Email:</label>
            <input type="email" required v-model="email">

            <label>Password:</label>
            <input type="password" required v-model="password">
            <div v-if="passwordNotLongEnough" class="error">{{ passwordNotLongEnough }}</div>

            <label>Confirm Password:</label>
            <input type="password" required v-model="confirmPassword">
            <div v-if="passwordsDoNotMatch" class="error">{{ passwordsDoNotMatch }}</div>

            <div class="terms">
                <input type="checkbox" required>
                <label>I agree to the terms and conditions</label>
            </div>

            <div class="submit">
                <button type="submit">Register</button>
                <button @click = "goToLogin">Cancel</button>
            </div>
        </form>
    </div>
</template>

<script>
    import { createUserWithEmailAndPassword } from "firebase/auth"
    import { auth } from '../firebase/index.js'

    export default {
        name: 'RegisterView',
        data() {
            return {
                email: '',
                password: '',
                confirmPassword: '',
                passwordNotLongEnough: '',
                passwordsDoNotMatch: ''
            }
        },
        methods: {
            goToLogin() {
                this.$router.push({ name: 'login' })
            },
            register() {
                // validate password
                this.passwordNotLongEnough = this.password.length > 5 ? '' : 'Password must be at least 6 characters long'
                this.passwordsDoNotMatch = this.password === this.confirmPassword ? '' : 'Passwords do not match'

                // create user
                if (!this.passwordNotLongEnough && !this.passwordsDoNotMatch) {
                    createUserWithEmailAndPassword(auth, this.email, this.password)
                    .then((userCredential) => {
                        // Signed in 
                        const user = userCredential.user;
                        console.log('user: ', user)
                        // ...
                        this.$router.push({ name: 'home' })
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log('error: ', error)
                        // ..
                    })
                }
            }
        }
    }
</script>

<style scoped>
.marginttop{
  margin-top: 60px;
}
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  display: inline-block;
  margin: 20px 0 15px;
  font-size: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
button {
  background: #0b6dff;
  border: 0;
  padding: 10px 20px;
  margin: 20px 20px 0px 20px;
  color: white;
  border-radius: 20px;
}
.submit {
  text-align: center;
}
.error {
  color: #ff0062;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
input[type="checkbox"] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
}
</style>