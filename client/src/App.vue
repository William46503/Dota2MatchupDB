<template>
  <div id="app">
    <header>
      <h1><strong>DOTA2</strong>Database</h1>
      <form class="search-box">
        <input
          type="search"
          class="search-field"
          v-model="searchInput"
          placeholder="Search Dota2 Hero"
          required
        />
      </form>
    </header>

    <main>
      <div class="cards">
        <hero-card v-for="hero in filterList" :key="hero.id" :hero="hero" />
      </div>
    </main>
  </div>
</template>

// --------------------------------------
<script>
import HeroCard from "./components/HeroCard";
import axios from "axios";
// import ref from "vue";

export default {
  components: { HeroCard },
  data() {
    return {
      heroList: [],
      searchInput: "",
    };
  },
  setup() {
    // const error = ref(null);

    return {};
  },
  methods: {
    async getHeroData() {
      try {
        // JSON responses are automatically parsed.

        const url = "http://localhost:5000/hero-index";
        await axios
          .get(url)
          .then((response) => {
            if (response.status === 200) {
              console.log(`response status is: ${response.status}`);
            }

            var unsortedList = response.data;
            this.heroList = unsortedList.sort(function (a, b) {
              return a.name.localeCompare(b.name);
            });
          })
          .catch((error) => {
            console.log(error);
          });

        console.log(`"hero data:" ${this.heroList}`);
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.getHeroData();
  },
  computed: {
    filterList() {
      return this.heroList.filter((hero) => {
        return hero.name.toLowerCase().includes(this.searchInput.toLowerCase());
      });
    },
  },

  //URL: https://api.opendota.com/api/heroes
  //https://www.section.io/engineering-education/how-to-interact-with-an-api-from-a-vuejs-application/
};
</script>

// --------------------------------------

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&display=swap");

#app {
  font-family: "Rubik", sans-serif;
  body,
  ul,
  ol,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  header {
    padding: 50px 0px;
    h1 {
      font-size: 42px;
      color: rgb(117, 0, 0);
      text-transform: uppercase;
      font-weight: bold;
      text-align: center;
      cursor: default;

      strong {
        color: #313131;
      }
    }
  }

  .search-box {
    display: flex;
    justify-content: center;
    font-family: "Rubik", sans-serif;

    .search-field {
      border: none;
      outline: none;
      width: 25%;
      font-size: 18px;
      background: #f1f1f1;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
      border-radius: 8px;
      padding: 10px;
      margin: 40px;
      transition: all 0.4s;

      &:focus,
      &:valid {
        background: #313131;
        color: #fff;
        width: 50%;
      }
    }
  }

  main {
    // margin: 0 auto;
    padding: 0px 30px;
    display: flex;
    justify-content: center;
    .cards {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      max-width: 90%;
    }
  }
}
</style>
