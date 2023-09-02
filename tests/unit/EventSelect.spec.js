import { shallowMount } from "@vue/test-utils";
import EventSelect from "@/components/EventSelect.vue";

describe("EventSelect", () => {
  it("displays the props", () => {
    const wrapper = shallowMount(EventSelect);
    expect(wrapper.findAll("option")[1].text()).toBe("default");
  });
});
