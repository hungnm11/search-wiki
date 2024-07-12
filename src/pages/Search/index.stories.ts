import type { Meta, StoryObj } from '@storybook/react';
import moxios from 'moxios';
import {
  reactRouterParameters,
  withRouter,
} from 'storybook-addon-react-router-v6';

import SearchPage from '.';

moxios.install();
moxios.stubRequest(
  'https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=sff&&limit=10',
  {
    status: 200,
    response: [
      'sff',
      [
        'SFFILM',
        'SFFL Showtime',
        'SFF',
        'SFF-8784',
        'Sffa v harvard',
        'SFF-TA-1001',
        'SFFB',
        'SFF 8482',
        'SFFWA',
        'Sffpc',
      ],
      ['', '', '', '', '', '', '', '', '', ''],
      [
        'https://en.wikipedia.org/wiki/SFFILM',
        'https://en.wikipedia.org/wiki/SFFL_Showtime',
        'https://en.wikipedia.org/wiki/SFF',
        'https://en.wikipedia.org/wiki/SFF-8784',
        'https://en.wikipedia.org/wiki/Sffa_v_harvard',
        'https://en.wikipedia.org/wiki/SFF-TA-1001',
        'https://en.wikipedia.org/wiki/SFFB',
        'https://en.wikipedia.org/wiki/SFF_8482',
        'https://en.wikipedia.org/wiki/SFFWA',
        'https://en.wikipedia.org/wiki/Sffpc',
      ],
    ],
  }
);

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Page/Search',
  component: SearchPage,
  decorators: [withRouter],
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        pathParams: { id: 'elon' },
      },
      routing: { path: '/search/:id' },
    }),
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof SearchPage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {},
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        pathParams: { id: '123' },
        searchParams: { foo: 'bar', baz: 'qux' },
      },
    }),
  },
};

export const NoArticles: Story = {
  args: {},
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        pathParams: { id: 'no-articles' },
      },
    }),
  },
};
