import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { RendererComponent } from './renderer.component';

export default {
  title: 'RendererComponent',
  component: RendererComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<RendererComponent>;

const Template: Story<RendererComponent> = (args: RendererComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
    complete:  0,
    config:  {
      menuOrder: [],
      layerOrder: [],
      dimensions: {x: 255, y:255},
      options:[]
    },
}