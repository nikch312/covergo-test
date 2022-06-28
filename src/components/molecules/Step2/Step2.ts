import { Component, Mixins } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { PageMixin } from '@/mixins';
import { SelectItem, Location, Package } from "@/types";
import { FormData } from "@/store/form/types";
import { FormUtil } from "@/utils/form";

const Form = namespace('form');

@Component({})
export default class Step2 extends Mixins(PageMixin) {
  @Form.Action setFormData!: (payload: FormData) => void;
  @Form.State("form") form!: FormData;

  name = '';
  age = 0;
  location: Location = Location.HONG_KONG;
  plan: Package = Package.STANDARD;
  errorMsg = '';

  get plans (): Array<SelectItem> {
    return FormUtil.plans(this.age, this.location);
  }

  get locations (): Array<SelectItem> {
    return FormUtil.locations();
  }

  get premiumPrice(): string {
    return FormUtil.premiumPrice(this.age, this.location, this.plan);
  }

  get selectedCurrency(): string {
    return FormUtil.selectedCurrency(this.location);
  }

  goNextPageExtended (): void {
    if (!this.age || !this.name) {
      this.errorMsg = "Please input all fields";
      return;
    }

    if (this.age > 100) {
      this.goFailPage();
      return;
    }

    this.setFormData({
      name: this.name,
      age: this.age,
      location: this.location,
      plan: this.plan,
    });

    this.goNextPage();
  }

  mounted (): void {
    this.name = this.form.name;
    this.age = this.form.age;
    this.location = this.form.location;
    this.plan = this.form.plan;
  }
}
