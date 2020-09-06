import React from 'react';
import { Link, navigate } from 'gatsby';
import PropTypes from 'prop-types';

function Header() {
  const tabs = [
    {
      slug: '/about/',
      title: 'About',
    },
    {
      slug: '/mechanisms/',
      title: 'Mechanisms',
    },
    {
      slug: '/stranger/',
      title: 'Stranger',
    },
  ];

  const isBrowser = typeof window !== 'undefined';

  let location;
  if (isBrowser) {
    location = window.location.pathname;
  }

  const [activeTab, setActiveTab] = React.useState(location || tabs[0].slug);

  function Tab({ tab }) {
    const isActive = tab.slug === activeTab;
    return (
      <Link
        to={tab.slug}
        onClick={() => setActiveTab(tab.slug)}
        className={`relative px-8 py-4 text-sm font-medium leading-5 text-yellow-800 whitespace-no-wrap transition duration-150 ease-in-out bg-green-200 border-2 border-green-400 -ml-2px first:ml-0 hover:text-yellow-600 focus:text-yellow-600 focus:outline-none ${
          isActive
            ? 'z-30 border-b-0'
            : 'z-10 hover:bg-green-100 hover:z-20 focus:bg-green-100 focus:z-20'
        }`}
      >
        {tab.title}
      </Link>
    );
  }

  Tab.propTypes = {
    tab: PropTypes.object.isRequired,
  };

  function Tabs() {
    return (
      <div className="hidden sm:block">
        <div>
          <nav className="flex">
            {tabs.map((tab, index) => (
              <Tab
                key={index}
                tab={tab}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            ))}
          </nav>
        </div>
      </div>
    );
  }

  function Select() {
    return (
      <div className="sm:hidden">
        <select
          aria-label="Selected tab"
          value={activeTab}
          onChange={(e) => navigate(e.target.value)}
          className="relative block w-full py-2 pl-3 pr-10 text-base leading-6 transition duration-150 ease-in-out bg-green-200 border-2 border-green-400 rounded-none form-select focus:outline-none focus:shadow-outline focus:border-green-400 sm:text-sm sm:leading-5 focus:z-20"
        >
          {tabs.map((tab, index) => (
            <option key={index} value={tab.slug}>
              {tab.title}
            </option>
          ))}
        </select>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-6xl px-4 pt-4 mx-auto bg-green-200 sm:bg-transparent sm:mt-4">
      <div>
        <Select />
        <Tabs />
      </div>
    </div>
  );
}

export default Header;
