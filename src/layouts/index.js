import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Header from '../components/header';
import AuthModal from '../components/authModal';

import '../../sass/style.scss';


const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Front End Auth Demo"
    />
    <Header />
    <AuthModal />
    {children()}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
