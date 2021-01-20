<template>
  <h1>
    {{ book.title }}
    (<router-link :to="{ name: 'BookEdit', params: { isbn: isbn } }">Edit</router-link>)
  </h1>
  <ol>
    <li v-for="(value, key) in book" :key="key">{{ key }}: {{ value }}</li>
  </ol>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BookDetail',
  data() {
    return {
      book: {},
      isbn: null
    };
  },
  methods: {
    async getBook() {
      const response = await fetch(`http://localhost:4730/books/${this.isbn}`);
      this.book = await response.json();
    },
    init(isbn) {
      this.isbn = isbn;
      this.getBook();
    }
  },
  created() {
    this.init(this.$route.params.isbn);
  },
  beforeRouteUpdate(to) {
    this.init(to.params.isbn);
  },
  beforeRouteLeave() {
    const answer = window.confirm('Do you really want to leave? you have unsaved changes!');
    return answer;
  }
});
</script>

<style scoped>
ol {
  list-style: none;
  text-align: left;
}
</style>
