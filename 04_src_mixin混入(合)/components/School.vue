<template>
  <div>
    <h2 @click="showName">学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
// 引入一个mixin
// import { mixin1, mixin2 } from "../mixin";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "School",
  data() {
    return {
      name: "尚硅谷",
      address: "北京",
      x: 666,
    };
  },
  //   mixins: [mixin1, mixin2],
  //   mounted() {
  //     console.log("Hello!!!");
  //   },
};
</script>
