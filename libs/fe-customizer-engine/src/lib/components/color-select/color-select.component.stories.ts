import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ColorSelectComponent } from './color-select.component';

export default {
  title: 'ColorSelectComponent',
  component: ColorSelectComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<ColorSelectComponent>;

const Template: Story<ColorSelectComponent> = (args: ColorSelectComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
  colorSettings: { options: ['#ffccff'] },
  baseTitle: 'Test',
  renderItem: function () {
    const a = new Image();
    a.src = 'https://luminescentblade.github.io/fecustomizer-engine/assets/corn/female2/hair/1.png';
    return a;
  }(),
  canvasSize: {x: 255, y: 255}
}