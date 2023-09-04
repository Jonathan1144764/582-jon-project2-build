import { shallowMount } from "@vue/test-utils";
import ParkItem from "@/components/ParkItem.vue";

describe("ParkItem", () => {
  it("displays the props", () => {
    const wrapper = shallowMount(ParkItem);
    expect(wrapper.find("h3").text()).toBe("default");
  });
  it("listens for closeWindow event to change the value of isShown to false when true", async () => {
    const wrapper = shallowMount(ParkItem);
    await wrapper.setData({ isShown: true });
    await wrapper.vm.closeWindow();
    expect(wrapper.vm.closeWindow).toBeFalsy;
    expect(wrapper.vm.isShown).toBe(false);
  });
  it("changes the value of isShown to true when false and the button is clicked", async () => {
    const wrapper = shallowMount(ParkItem);
    await wrapper.vm.showEvents();
    expect(wrapper.vm.showEvents).toBeTruthy;
    expect(wrapper.vm.isShown).toBe(true);
  });
});
