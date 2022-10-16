import React from 'react';
import Layout from 'shared/Layout/Layout';
import ScrollToTop from 'shared/ScrollToTop/ScrollToTop';

interface Props {
  children?: React.ReactNode;
}

const App: React.FC<Props> = ({ children }) => {
  return (
    <main className='main'>
      <Layout>
        <ScrollToTop />
        {children}
      </Layout>
    </main>
  );
};

export default App;
