import { Component, Mixins } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { PageMixin } from '@/mixins/page';
import { FormData } from "@/store/form/types";
import { FormUtil } from "@/utils/form";

const Form = namespace('form');

@Component({})
export default class Step3 extends Mixins(PageMixin) {
  @Form.State("form") form!: FormData;

  get premiumPrice(): string {
    return FormUtil.premiumPrice(this.form.age, this.form.location, this.form.plan);
  }

  get selectedCurrency(): string {
    return FormUtil.selectedCurrency(this.form.location);
  }
}
