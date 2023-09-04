import { shallowMount } from "@vue/test-utils";
import ExitWindow from "@/components/ExitWindow.vue";

describe("ExitWindow", () => {
  it("emits closeWindow event when the button is clicked", async () => {
    const wrapper = shallowMount(ExitWindow);
    await wrapper.find("button").trigger("click");
    expect(wrapper.emitted().closeWindow[0][0]).toBeTruthy;
    expect(wrapper.emitted().closeWindow[0][0]).toBe(true);
  });
});
