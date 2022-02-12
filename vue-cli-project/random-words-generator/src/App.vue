<template>
  <main class="main-container">
    <div>
      <div class="text-center">
        <h1 class="text-center header-text">Word Limit is: {{ wordLimit }}</h1>
      </div>

      <input
        type="range"
        :value="wordLimit"
        @change="handleSlideChange"
        class="range-control"
        min="1"
        max="50"
      />

      <div class="btn-container">
        <button class="btn generate-word-btn" @click="generateWords">
          Generate Words
        </button>
        <button class="btn reset-btn" @click="resetWords">Reset</button>
      </div>

      <div v-if="words" class="card">
        {{ words }}
      </div>
    </div>
  </main>
</template>

<script>
import wordLists from "./utils/wordLists";

export default {
  name: "App",
  data() {
    return {
      wordLimit: 0,
      words: null,
    };
  },
  methods: {
    handleSlideChange(e) {
      this.wordLimit = e.target.value;
    },

    generateWords() {
      if (this.wordLimit <= 0) {
        alert("Please choose how many words you want to generate");
      } else {
        this.words = wordLists
          .slice(0, this.wordLimit)
          .sort(() => Math.random() - 0.5)
          .join(" ");
      }
    },

    resetWords() {
      this.words = null;
      this.wordLimit = 0;
    },
  },
};
</script>

<style>
body {
  background-color: #ececec;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.main-container {
  margin: 10rem auto;
  padding: 0.5rem;
  border: 1px solid #5f4b90;
  border-radius: 0.3rem;
  width: 80%;
}

.header-text {
  background-color: tomato;
  color: white;
  display: inline-block;
  padding: 0.85rem;
  border-radius: 0.3rem;
}

.text-center {
  text-align: center;
}

.btn-container {
  display: flex;
  justify-content: center;
}

.btn {
  color: white;
  padding-top: 0.85rem;
  padding-bottom: 0.85rem;
  margin-right: 0.3rem;
  width: 10rem;
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;
  font-size: 1rem;
}

.generate-word-btn {
  background-color: rgba(0, 128, 0, 0.781);
}

.reset-btn {
  background-color: rgba(255, 0, 0, 0.623);
}

.range-control {
  display: block;
  margin: 0 auto;
  padding: 1.2rem;
}

.card {
  background-color: #5f4b90;
  color: white;
  font-size: 1.2rem;
  padding: 1rem;
  width: 90%;
  margin: 1rem auto;
  border-radius: 0.3rem;
}

@media screen and (min-width: 768px) {
  .card {
    width: 60%;
  }
}

@media screen and (min-width: 1440px) {
  .card {
    width: 50%;
  }
}
</style>