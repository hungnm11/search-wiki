import type { Meta, StoryObj } from '@storybook/react';
import ListItem from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Component/ListItem',
  component: ListItem,
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof ListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    id: 'https://en.wikipedia.org/wiki/SFFL_Showtime',
    label: 'SFFL Showtime', //
  },
};
