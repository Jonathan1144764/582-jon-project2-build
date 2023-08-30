import { shallowMount } from "@vue/test-utils";
import ParkSelect from "@/components/ParkSelect.vue";

describe("ParkSelect", () => {
  it("displays the props", () => {
    const wrapper = shallowMount(ParkSelect);
    expect(wrapper.findAll("option")[1].text()).toBe("default");
  });
});
