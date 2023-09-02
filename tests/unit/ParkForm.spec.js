import { shallowMount } from "@vue/test-utils";
import ParkForm from "@/components/ParkForm.vue";

describe("ParkForm", () => {
  it("listens for refetchParks event and emits refetchPark in turn", async () => {
    const wrapper = shallowMount(ParkForm);
    await wrapper.vm.refetchParks(1);
    expect(wrapper.emitted().refetchParks[0][0]).toBe(1);
  });
});
