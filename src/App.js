import React from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  // Image Urls
  const worldUrl =
    'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8d29ybGR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60';

  const forestUrl =
    'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZXN0fGVufDB8fDB8&auto=format&fit=crop&w=700&q=60';

  const beachUrl =
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60';

  const winterUrl =
    'https://images.unsplash.com/photo-1452868195396-89c1af3b1b2e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fHdpbnRlciUyMGNpdHl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60';

  const mountainUrl =
    'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8bW91bnRhaW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60';

  return (
    <div className='container'>
      <Card cardUrl={worldUrl} cardText={'Explore the World'} />
      <Card cardUrl={forestUrl} cardText={'Wild Forest'} />
      <Card cardUrl={beachUrl} cardText={'Sunny Beach'} />
      <Card cardUrl={winterUrl} cardText={'City in Winter'} />
      <Card cardUrl={mountainUrl} cardText={'Mountains'} />
    </div>
  );
}

export default App;
