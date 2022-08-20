<template>
  <div class="card">
    <router-link
      :to="{
        name: 'heroPage',
        params: { heroName: hero.name },
        query: { hero_id: hero.id, hero_roles: hero.roles },
      }"
      class="card-container"
      target="_blank"
    >
      <img v-bind:src="getImgUrl(hero.name)" alt="Hero Image" />
      <h3>{{ hero.name }}</h3>
      <ul>
        <li v-for="role in hero.roles" v-bind:key="role">{{ role }}</li>
      </ul>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["hero"],
  data() {
    return {};
  },
  methods: {
    getImgUrl(heroName) {
      //convert hero.name to lowercase to match name of the respective png
      var imageName = heroName.toLowerCase().replace(/[\s-]/g, "");
      var imageURL = `/img/HeroImages/${imageName}.png`;
      // console.log(imageURL);
      return imageURL;
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  // max-width: 40%;
  width: 120px;
  margin: 10px 5px;
  transition: all 0.5s;

  .card-container {
    position: relative;

    img {
      width: 100%;
      margin-bottom: 10px;

      object-fit: cover;
      object-position: center;
      border-radius: 16px;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);

      transition: all 0.3s ease-out;
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
      transition: all 0.2s ease-out;
    }
  }
  &:hover {
    width: 180px;

    img {
      transform: scale(1.1);
    }

    ul {
      opacity: 1;
    }
  }
}
</style>
