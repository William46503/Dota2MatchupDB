<template>
  <div class="card">
    <a
      v-bind:href="'http://localhost:5000/hero-data/search?heroId=' + hero.id"
      target="_blank"
      class="card-container"
    >
      <img src="https://placehold.jp/250x250.png" alt="Hero Image" />
      <h3>{{ hero.name }}</h3>
      <ul>
        <li v-for="role in hero.roles" v-bind:key="role">{{ role }}</li>
      </ul>
    </a>
  </div>
</template>

<script>
export default {
  props: ["hero"],
};
</script>

<style lang="scss" scoped>
.card {
  // max-width: 40%;
  width: 180px;
  margin: 10px;

  .card-container {
    position: relative;

    img {
      width: 100%;
      height: 150px;
      margin-bottom: 10px;

      object-fit: cover;
      border-radius: 16px;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);

      transition: all 0.5s;
    }

    h3 {
      text-decoration: none;
      color: #313131;
      font-size: 14px;
      text-align: center;

      transition: all 0.5s;
    }

    ul {
      position: absolute;
      bottom: 100%;
      left: 10px;
      color: #fff;
      opacity: 0;
      font-size: 14px;
      transition: all 0.5s;
    }

    &:hover {
      img {
        transform: scale(1.05);
        height: 200px;
      }

      ul {
        opacity: 1;
      }
    }
  }
}
</style>
