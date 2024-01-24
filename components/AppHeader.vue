<script setup>
const user = useSupabaseUser();
</script>
<template>
  <header>
    <div> <img src="https://images.dog.ceo/breeds/schipperke/n02104365_9369.jpg" alt="Adorable Puppy" style="width: 100px; height: 100px;"></div>
    <nav>
    <NuxtLink to="login">Log In</NuxtLink>
      <NuxtLink to="signup">Sign Up</NuxtLink>
      <NuxtLink to="admin">Admin</NuxtLink>
      <NuxtLink to="attempt">Attempt</NuxtLink>
    </nav>
    <div class="buttons">
      <p v-if="user">{{ user.email }}</p>
      <Logout />
    </div>
  </header>
</template>

<style scoped>
header {
  background-color: #e463dd;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
}
nav {
  display: flex;
  justify-content: space-around;
  gap: 2rem;
}
a,
div {
  color: white;
  text-decoration: none;
}
a:hover {
  color: lightblue;
}
.buttons {
  display: flex;
  gap: 8px;
}
.link {
  color: #f10a89;
  text-decoration: none;
  font-size: 1.5rem;
}
</style>