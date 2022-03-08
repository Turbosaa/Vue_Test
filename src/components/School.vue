<template>
  <div class="demo">
    <h2>学校地址：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="showName">点击提示学校名</button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "School",
  data() {
    return {
      name: "尚硅谷",
      address: "北京",
    };
  },
  methods: {
    showName() {
      alert(this.name);
    },
  },
};
</script>

<style>
.demo {
  background-color: orange;
}
</style>
