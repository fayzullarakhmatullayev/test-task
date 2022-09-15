<template>
  <nav class="nav">
    <ul class="nav-menu">
      <li class="nav-menu__list">
        <router-link :to="{ name: 'favorites' }" class="nav-menu__link">
          <img src="@/assets/icons/heart.svg" alt="heart" />
          <p>Избранное</p>
        </router-link>
      </li>
      <li class="nav-menu__list">
        <router-link :to="{ name: 'stock' }" exact class="nav-menu__link">
          <img src="@/assets/icons/box.svg" alt="box" />
          <p>Склад</p>
        </router-link>
      </li>
      <li class="nav-menu__list">
        <router-link :to="{ name: 'deals' }" class="nav-menu__link">
          <img src="@/assets/icons/bag.svg" alt="bag" />
          <p>Сделки</p>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>
