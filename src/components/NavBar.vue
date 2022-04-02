<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <ul class="navbar-nav m-auto">
          <li class="nav-item">
            <router-link
              class="nav-link active"
              aria-current="page"
              :to="{ name: 'users' }"
              >Users</router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'recipe' }" class="nav-link"
              >Recipes</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
