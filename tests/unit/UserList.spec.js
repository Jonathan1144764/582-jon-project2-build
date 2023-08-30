import { shallowMount } from "@vue/test-utils";
import UserList from "@/components/UserList.vue";

describe("Userlist", () => {
  it("displays the props", () => {
    const wrapper = shallowMount(UserList);
    expect(wrapper.findAll("option")[1].text()).toBe("default");
  });
});
