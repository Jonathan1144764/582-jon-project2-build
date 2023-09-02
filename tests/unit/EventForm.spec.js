import { shallowMount } from "@vue/test-utils";
import EventForm from "@/components/EventForm.vue";

describe("EventForm", () => {
  it("listens for refetchEvents event and emits refetchEvents in turn", async () => {
    const wrapper = shallowMount(EventForm);
    await wrapper.vm.refetchEvents(1);
    expect(wrapper.emitted().refetchEvents[0][0]).toBe(1);
  });
});
