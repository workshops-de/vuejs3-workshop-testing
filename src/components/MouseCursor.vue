<template>
  <div v-bind:id="id" @mousemove="updatePosition">
    <span>x: {{ x }}, y: {{ y }}</span>
    <div class="dead-spot" @mousemove.stop>DEAD SPOT</div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      id: 'my-id',
      x: 12,
      y: 4
    };
  },
  methods: {
    updatePosition(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    }
  },
  watch: {
    x(val) {
      if (val > 150) {
        alert('X is greater than 150');
      }
    },
    y(newValue, oldValue) {
      if (oldValue > 300 && newValue < oldValue) {
        alert('Y ftw!');
        this.y = 0;
      }
    }
  }
});
</script>

<style>
#my-id {
  height: 400px;
  width: 400px;
  border: 1px solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.dead-spot {
  height: 100px;
  width: 100px;
  border: 1px solid;
  background-color: red;
}
</style>
