<template>
  <label for="soccer">Soccer fields: </label>
  <input type="number" name="soccer" id="soccer" value="0" min="0" />
  <label for="baseball">Baseball diamonds: </label>
  <input type="number" name="baseball" id="baseball" value="0" min="0" />
  <label for="bathrooms">Bathrooms: </label>
  <input type="number" name="bathrooms" id="bathrooms" value="0" min="0" />
  <label for="playground">Playgrounds: </label>
  <input type="number" name="playground" id="playground" value="0" min="0" />
</template>

<script>
export default {
  name: "ParkFacilitiesInput",
};
</script>
