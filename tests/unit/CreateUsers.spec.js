import { shallowMount } from "@vue/test-utils";
import CreateUsers from "@/components/CreateUsers.vue";

describe("CreateUsers.vue", () => {
  it("creates a new user when clicked", async () => {
    const wrapper = shallowMount(CreateUsers);
    await wrapper.find("button").trigger("click");
    expect(wrapper.emitted().refetchUsers[0][0]).toBe(1);
  });
});
