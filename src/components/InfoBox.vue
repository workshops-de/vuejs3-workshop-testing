<template>
  <button @click="isVisible = !isVisible">
    <span v-if="isVisible">Hide</span>
    <span v-else>Show</span>
  </button>
  <div class="container" v-show="isVisible">
    <div :class="['box', blueClass]"></div>
    <div :class="{ box: true, red: isRed }"></div>
    <div class="box" :class="borderedBox" @click="update"></div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'InfoBox',
  data() {
    return {
      isVisible: true,
      blueClass: 'blue',
      isRed: true,
      clicked: false
    };
  },
  methods: {
    update() {
      this.clicked = true;
    }
  },
  computed: {
    borderedBox() {
      return {
        green: !this.clicked,
        border: !this.clicked,
        blue: this.clicked
      };
    }
  }
});
</script>

<style lang="scss" scoped>
.container {
  border: 1px solid;
  background-color: lightgrey;
}

.box {
  width: 50px;
  height: 50px;
  display: inline-block;
  background-color: gray;
  border: 3px solid transparent;
}
.red {
  background-color: red;
}
.blue {
  background-color: blue;
}
.green {
  background-color: green;
}
.border {
  border: 3px solid black;
}
</style>
