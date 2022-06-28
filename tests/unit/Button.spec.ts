import { shallowMount } from '@vue/test-utils'
import Button from '@/components/atoms/Button/Button.vue'

describe('Button.vue', () => {
  it('renders children when passed', () => {
    const msg = 'button label'
    const wrapper = shallowMount(Button, {
      slots: {
        default: [msg]
      }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
