import React from 'react';

/**
 * Used to render ONLY sub component children and their children under the correct child
 * For context:
 * https://stackoverflow.com/questions/75242208/typescript-property-type-does-not-exist-on-type-string
 */
export const subComponentHelper = (
  subComponentList: string[],
  children: React.ReactNode,
) => {
  return subComponentList
    .map((key: string) => {
      return React.Children.map(children, (child: React.ReactNode) => {
        // don't allow any other children apart from declared sub-components render
        if (
          !child ||
          typeof child !== 'object' ||
          !('type' in child) ||
          typeof child.type === 'string'
        ) {
          return null;
        }

        if ('displayName' in child.type) {
          return child.type.displayName === key ? child : null;
        }

        return null;
      });
    })
    .filter(child => !!child);
};
