<template>
  <input type="radio" name="status" value="open" id="park-status-open" />
  <label for="park-status-open">Open</label>
  <input type="radio" name="status" value="closed" id="park-status-closed" />
  <label for="park-status-closed">Closed</label>
  <input
    type="radio"
    name="status"
    value="maintenance"
    id="park-status-maintenance"
  />
  <label for="park-status-maintenance">Closed for maintenance</label>
  <input
    type="radio"
    name="status"
    value="construction"
    id="park-status-construction"
  />
  <label for="park-status-construction">Under construction</label>
</template>

<script>
export default {
  name: "ParkStatusInput",
};
</script>
