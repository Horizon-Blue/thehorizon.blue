import React from 'react';
import PrismDecorator from 'draft-js-prism';
/* global Prism */
/* eslint react/prop-types: 0 */ const prismPlugin = {
  decorators: [
    new PrismDecorator({
      prism: Prism,
      getSyntax(block) {
        const language = block.getData().get('language');
        if (typeof Prism.languages[language] === 'object') {
          return language;
        }
        return null;
      },
      render({ type, children }) {
        return <span className={`prism-token token ${type}`}>{children}</span>;
      },
    }),
  ],
};

export default prismPlugin;
