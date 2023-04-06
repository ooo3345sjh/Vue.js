<template>
  <h4>Accessing Props</h4>
  <p>
    name : {{ props.name }}<br />
    age : {{ props.age }}<br />
    addr : {{ props.addr }}<br />
  </p>
</template>
<script>
export default {
  name: "Component2",
  props: {
    name: String,
    age: Number,
    addr: String,
  },
  setup(props) {
    let name = "김춘추";

    return {
      props,
      name,
    };
  },
};
</script>
<style scoped></style>
