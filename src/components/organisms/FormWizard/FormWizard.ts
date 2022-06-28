import { Component, Vue } from "vue-property-decorator";
import { namespace } from 'vuex-class';
import Step1 from "@/components/molecules/Step1/Step1.vue";
import Step2 from "@/components/molecules/Step2/Step2.vue";
import Step3 from "@/components/molecules/Step3/Step3.vue";
import Fail from "@/components/molecules/Fail/Fail.vue";

const Form = namespace('form');

@Component({
  components: {
    Step1,
    Step2,
    Step3,
    Fail,
  },
})
export default class FormWizard extends Vue {
  @Form.Getter("currentStep") currentStep!: number;
}
