import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { LayerRendererComponent } from './layer-renderer.component';

export default {
  title: 'LayerRendererComponent',
  component: LayerRendererComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<LayerRendererComponent>;

const Template: Story<LayerRendererComponent> = (args: LayerRendererComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
    index:  0,
    layerSize:  {x: 255, y: 255},
}