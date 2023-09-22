<template>
  <div class="input-wrapper">
    <label for="soccer">Soccer fields: </label>
    <input type="number" name="soccer" id="soccer" value="0" min="0" />
  </div>
  <div class="input-wrapper">
    <label for="baseball">Baseball diamonds: </label>
    <input type="number" name="baseball" id="baseball" value="0" min="0" />
  </div>
  <div class="input-wrapper">
    <label for="chalet">Chalets: </label>
    <input type="number" name="chalet" id="chalet" value="0" min="0" />
  </div>
  <div class="input-wrapper">
    <label for="playground">Playgrounds: </label>
    <input type="number" name="playground" id="playground" value="0" min="0" />
  </div>
</template>

<script>
export default {
  name: "ParkFacilitiesInput",
};
</script>
