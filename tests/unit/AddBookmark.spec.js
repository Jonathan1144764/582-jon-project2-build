import { shallowMount } from "@vue/test-utils";
import AddBookmark from "@/components/AddBookmark.vue";

describe("AddBookmark", () => {
  it("emits a bookmarkEvent event when button is clicked", async () => {
    const wrapper = shallowMount(AddBookmark);
    await wrapper.find("button").trigger("click");
    expect(wrapper.emitted().bookmarkEvent[0][0]).toBeTruthy;
    expect(wrapper.emitted().bookmarkEvent[0][0]).toBe(true);
  });
});
