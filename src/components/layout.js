import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      <Header />
      <main className="z-10 flex-1 w-full max-w-6xl px-4 py-12 mx-auto bg-green-200 border-green-400 sm:border-2 sm:-mt-2px sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
