import React from 'react';
import { BsTypeBold } from 'react-icons/bs';
import { GiStrong } from 'react-icons/gi';
import { MdColorize } from 'react-icons/md';
// import ColorInput from '@sanity/color-input/lib/ColorInput';

const mediumRender = (props) => <span style={{ fontWeight: 500 }}>{props.children}</span>;
const boldRender = (props) => <span style={{ fontWeight: 'bold' }}>{props.children}</span>;
// const purpleRender = (props) => <span style={{ color: '#6d4992' }}>{props.children}</span>;
// const greenRender = (props) => <span style={{ color: '#43a048' }}>{props.children}</span>;

export default {
  title: 'Custom Portable Text',
  name: 'customPortableText',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [],
      lists: [],
      marks: {
        decorators: [
          {
            title: 'Strong',
            value: 'wt500',
            blockEditor: {
              icon: BsTypeBold,
              render: mediumRender,
            },
          },
          {
            title: 'Souper Strong',
            value: 'bold',
            blockEditor: {
              icon: GiStrong,
              render: boldRender,
            },
          },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
        ],
        annotations: [
          // { type: 'link' },
          // { type: 'internalLink' },
          {
            name: 'color',
            title: 'Color',
            type: 'color',
          },
        ],
      },
    },
    {
      type: 'embedHTML',
    },
  ],
};
