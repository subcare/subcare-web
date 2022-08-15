import React, { useEffect } from 'react'
import {
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom'

import classNames from 'classnames'

import './MainLayout.scss'

import Layout from 'components/Layout'
import Logo from 'components/Logo'

interface MainLayoutProps {
  className: string;
}

const MainLayout = (props: MainLayoutProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/lines');
    }
  }, [location, navigate]);

  return (
    <Layout
      className={classNames(
        'main-layout',
        props.className,
      )}
    >
      <header
        className="main-layout__header"
      >
        <Logo />
      </header>
      <p>Hello, 지하철</p>
      <Outlet />
    </Layout>
  );
}

MainLayout.defaultProps = {
  className: '',
} as MainLayoutProps;

export default MainLayout
