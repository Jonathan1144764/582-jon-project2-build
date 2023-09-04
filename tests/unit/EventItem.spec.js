import { shallowMount } from "@vue/test-utils";
import EventItem from "@/components/EventItem.vue";

describe("EventItem", () => {
  it("displays the props", () => {
    const wrapper = shallowMount(EventItem);
    expect(wrapper.find("h3").text()).toBe("default");
  });
});
