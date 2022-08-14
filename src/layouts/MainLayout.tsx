import React from 'react'

import classNames from 'classnames'

import Layout from 'components/Layout'
import Logo from 'components/Logo'

interface MainLayoutProps {
  className: string;
}

const MainLayout = (props: MainLayoutProps) => {
  return (
    <Layout
      className={classNames(
        'main-layout',
        props.className,
      )}
    >
      <Logo />
      <p>Hello, 지하철</p>
    </Layout>
  );
}

MainLayout.defaultProps = {
  className: '',
} as MainLayoutProps;

export default MainLayout
