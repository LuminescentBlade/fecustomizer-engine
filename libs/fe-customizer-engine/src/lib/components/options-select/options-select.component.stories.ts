import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { OptionsSelectComponent } from './options-select.component';

export default {
  title: 'OptionsSelectComponent',
  component: OptionsSelectComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<OptionsSelectComponent>;

const Template: Story<OptionsSelectComponent> = (args: OptionsSelectComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
    disabled:  false,
    value:  0,
    min:  0,
    max:  0,
    enableMenu:  false,
}