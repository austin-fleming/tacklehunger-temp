import React, { Fragment } from 'react';
import { Section } from './Section';

type Sections = {
  _key: string;
  _type: string;
  section: Record<string, unknown>;
}[];

export const RenderSections: React.FC<{ sections: Sections }> = ({ sections }) => {
  if (!sections || !sections.length) {
    console.error('Missing section');
    return <div>Missing sections</div>;
  }
  return (
    <Fragment>
      {sections.map((section) => (
        // eslint-disable-next-line no-underscore-dangle
        <Section {...section} key={section._key} />
      ))}
    </Fragment>
  );
};
