import { Component, Prop, Vue } from 'vue-property-decorator'

enum ButtonVariant {
  SOLID = 'solid',
  OUTLINE = 'outline',
}

type ButtonClass<T extends string> = `cg-${T}`

@Component({})
export default class Button extends Vue {
  @Prop({ default: ButtonVariant.SOLID }) variant!: ButtonVariant
  @Prop({ default: null }) customClassName!: string | null

  get variantClassName (): ButtonClass<ButtonVariant> {
    return `cg-${this.variant}` as ButtonClass<ButtonVariant>
  }

  get classNames (): Array<string | null> {
    return [this.variantClassName, this.customClassName]
  }

  click (): void {
    this.$emit('click')
  }
}
