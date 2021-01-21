<template>
  <div>
    <p v-if="success" data-test="book-form--success">
      Successfully created new book.
    </p>
    <form novalidate @submit.prevent="submit">
      <p>
        <label for="title">Title</label>
        <input
          type="text"
          v-model="book.title"
          name="title"
          id="title"
          @change="validateTitle"
          :class="{ 'is-invalid': errors.title }"
        />
        <span v-if="errors.title" data-test="book-title--error">
          {{ errors.title }}
        </span>
      </p>
      <p>
        <label for="abstract">Abstract</label>
        <textarea
          cols="50"
          rows="10"
          v-model="book.abstract"
          name="abstract"
          id="abstract"
          @change="validateAbstract"
          :class="{ 'is-invalid': errors.abstract }"
        ></textarea>
        <span v-if="errors.abstract">{{ errors.abstract }}</span>
      </p>
      <p>
        <label for="author">Author</label>
        <input
          type="text"
          v-model="book.author"
          name="author"
          id="author"
          @change="validateAuthor"
          :class="{ 'is-invalid': errors.author }"
        />
        <span v-if="errors.author">{{ errors.author }}</span>
      </p>
      <p>
        <button type="submit" :disabled="isInvalid">Submit</button>
      </p>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { createBook } from '@/services/book.api';

const required = (val: string | any[]) => val.length > 0;
const minLength = (val: string | any[], length: number) => val.length >= length;

export default defineComponent({
  name: 'BookNew',
  data() {
    return {
      book: {
        title: '',
        abstract: '',
        author: ''
      },
      errors: {
        title: '',
        abstract: '',
        author: ''
      },
      success: false
    };
  },
  computed: {
    isInvalid(): boolean {
      return Object.keys(this.errors).some(
        val => (this.errors as any)[val] !== ''
      );
    }
  },
  methods: {
    async submit() {
      await createBook(this.book);

      this.book = {
        title: '',
        abstract: '',
        author: ''
      };

      this.success = true;
    },
    validateTitle() {
      if (!required(this.book.title)) {
        this.errors.title = 'Title is required.';
      } else if (!minLength(this.book.title, 5)) {
        this.errors.title = 'The title must be at least 5 characters long.';
      } else {
        this.errors.title = '';
      }
    },
    validateAbstract() {
      if (!required(this.book.abstract)) {
        this.errors.abstract = 'Abstract is required.';
      } else if (!minLength(this.book.abstract, 12)) {
        this.errors.abstract = 'The abstract must be at least 12 characters long.';
      } else {
        this.errors.abstract = '';
      }
    },
    validateAuthor() {
      if (!required(this.book.author)) {
        this.errors.author = 'Author is required.';
      } else {
        this.errors.author = '';
      }
    }
  }
});
</script>

<style lang="scss" scoped>
label {
  margin-right: 5px;
}

span {
  display: block;
}

.is-invalid {
  border: 1px solid red;
  color: red;
}
</style>
