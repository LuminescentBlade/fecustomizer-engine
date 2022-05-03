import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ColorOptionsPaletteComponent } from './color-options-palette.component';

export default {
  title: 'ColorOptionsPaletteComponent',
  component: ColorOptionsPaletteComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<ColorOptionsPaletteComponent>;

const Template: Story<ColorOptionsPaletteComponent> = (args: ColorOptionsPaletteComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
    disabled:  false,
    index:  0,
    title:  'colors',
    colors: [
      "#F1EFE6", "#C35654", "#D1876A", "#E9D7C1", "#A6D1A2", "#7AB6C0",
      "#90A6CF", "#C9A0D1", "#F9D7DB", "#C1A798", "#9FA0A1", "#9B3F42",
      "#996049", "#CABFA2", "#698059", "#377781", "#4A5877", "#81608A",
      "#EAAFB2", "#817062", "#5A5850", "#E75860", "#F1976E", "#E9D699",
      "#89CE84", "#7FE0DB", "#4881B3", "#AB7ED3", "#F28FA9", "#69473D"
    ]
}