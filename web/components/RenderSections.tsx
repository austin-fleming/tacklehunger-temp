import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Section from './Section';

const RenderSections = ({ sections }) => {
  if (!sections || !sections.length) {
    console.error('Missing section');
    return <div>Missing sections</div>;
  }

  return (
    <Fragment>
      {sections.map((section) => (
        <Section {...section} key={section._key} />
      ))}
    </Fragment>
  );
};

RenderSections.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      _type: PropTypes.string,
      _key: PropTypes.string,
      section: PropTypes.instanceOf(PropTypes.object),
    })
  ),
};

export default RenderSections;
