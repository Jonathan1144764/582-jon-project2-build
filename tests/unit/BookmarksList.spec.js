import { shallowMount } from "@vue/test-utils";
import BookmarksList from "@/components/BookmarksList.vue";

describe("BookmarksList", () => {
  it("listens for an event to close the window and emits an event in turn", async () => {
    const wrapper = shallowMount(BookmarksList);
    await wrapper.vm.closeWindow();
    expect(wrapper.emitted().closeWindow[0][0]).toBeTruthy;
    expect(wrapper.emitted().closeWindow[0][0]).toBe(true);
  });
  it("shows the window when isSown is true", () => {
    const isShown = true;
    const wrapper = shallowMount(BookmarksList, {
      props: { isShown },
    });
    expect(wrapper.find(".bookmark-window")).toBeTruthy;
  });
  it("hides the window isShown is false", () => {
    const wrapper = shallowMount(BookmarksList);
    expect(wrapper.find(".bookmark-window")).toBeFalsy;
  });
});
