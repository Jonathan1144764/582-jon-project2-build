<template>
  <button @click="submitNewPark">Submit</button>
</template>

<script>
export default {
  name: "SubmitParkButton",
  methods: {
    submitNewPark() {
      console.log("submitted");
    },
  },
};
</script>
