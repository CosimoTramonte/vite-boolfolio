
<script>
export default {
    name:"Header"
}
</script>

<template>
  <header>

    <ul>
      <li>
        <router-link :to="{ name:'home' }">Home</router-link>
      </li>
      <li>
        <router-link :to="{ name:'Projects' }">Projects</router-link>
      </li>
      <li>
        <router-link :to="{ name:'contatcs' }">Contacts</router-link>
      </li>
      <li>
        <router-link :to="{ name:'About' }">About</router-link>
      </li>
    </ul>

  </header>
</template>

<style lang="scss" scoped>
  ul{
    list-style: none;
    display: flex;
    justify-content: center;

    li{
      margin: 0 15px;
      
      a{
        text-decoration: uppercase;
        color: black;
        text-decoration: none;

        &:hover{
          color: #FFC928;
        }

        &.active{
          color: #FFC928;
        }
      }
    }
  }
</style>