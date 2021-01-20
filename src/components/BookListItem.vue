<template>
  <tr>
    <td>
      {{ title }} <small>{{ subtitle }}</small>
    </td>
    <td>
      <router-link :to="{ name: 'BookDetail', params: { isbn: isbn } }">
        {{ isbn }}
      </router-link>
    </td>
    <td>
      <button :disabled="read" @click="$emit('read')">
        <span v-if="read">✔️</span>
        <span v-else>Read</span>
      </button>
    </td>
  </tr>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BookListItem',
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      default: ''
    },
    isbn: {
      type: String,
      required: true
    },
    numPages: {
      type: Number,
      validator: val => val < 1000
    },
    read: {
      type: Boolean,
      default: false
    }
  },
  emits: ['read']
});
</script>
