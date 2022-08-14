import React from 'react'

import classNames from 'classnames'

interface LayoutProps {
  className: string;
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <div
      className={classNames(
        'layout',
        props.className,
      )}
    >
      {props.children}
    </div>
  );
}

Layout.defaultProps = {
  className: '',
  children: [],
} as LayoutProps;

export default Layout
