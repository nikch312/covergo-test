import { shallowMount } from '@vue/test-utils'
import Step1 from '@/components/molecules/Step1/Step1.vue'

describe('Step1.vue', () => {
  it('renders Step1 page', () => {
    const wrapper = shallowMount(Step1);
    expect(wrapper.element.getElementsByTagName("h2")[0].innerHTML).toEqual("Hello There!");
  })
})
