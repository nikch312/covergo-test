import { Vue, Component } from 'vue-property-decorator'
import Button from '@/components/atoms/Button/Button.vue'
import { namespace } from 'vuex-class'

const Form = namespace('form')

@Component({
  components: {
    Button
  }
})

export class PageMixin extends Vue {
  @Form.Action goNextPage!: () => void;
  @Form.Action goPrevPage!: () => void;
  @Form.Action goFailPage!: () => void;
  @Form.Action initialize!: () => void;
}
