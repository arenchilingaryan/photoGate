import React, { useState } from 'react';
import './App.css';
import ErrorBoundary from '../ErrorBoundary';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

const Layouts = React.lazy(() => import('layouts/Layouts'));
const Auth = React.lazy(() => import('auth/Auth'));
const Meetings = React.lazy(() => import('meetings/Meetings'));
const Landing = React.lazy(() => import('landing/Landing'));
const Messages = React.lazy(() => import('messages/Messages'));
const Profile = React.lazy(() => import('profile/Profile'));
const Search = React.lazy(() => import('search/Search'));

const LayoutsComponent = () => (
  <React.Suspense fallback={<div style={{ background: 'red' }}>Loading...</div>}>
    <ErrorBoundary>
      <Layouts />
    </ErrorBoundary>
  </React.Suspense>
);
const AuthComponent = () => (
  <React.Suspense fallback={<div style={{ background: 'blue' }}>Loading...</div>}>
    <ErrorBoundary>
      <Auth />
    </ErrorBoundary>
  </React.Suspense>
);
const MeetingsComponent = () => (
  <React.Suspense fallback={<div style={{ background: 'red' }}>Loading...</div>}>
    <ErrorBoundary>
      <Meetings />
    </ErrorBoundary>
  </React.Suspense>
);
const LandingComponent = () => (
  <React.Suspense fallback={<div style={{ background: 'red' }}>Loading...</div>}>
    <ErrorBoundary>
      <Landing />
    </ErrorBoundary>
  </React.Suspense>
);
const MessagesComponent = () => (
  <React.Suspense fallback={<div style={{ background: 'red' }}>Loading...</div>}>
    <ErrorBoundary>
      <Messages />
    </ErrorBoundary>
  </React.Suspense>
);
const ProfileComponent = () => (
  <React.Suspense fallback={<div style={{ background: 'red' }}>Loading...</div>}>
    <ErrorBoundary>
      <Profile />
    </ErrorBoundary>
  </React.Suspense>
);
const SearchComponent = () => (
  <React.Suspense fallback={<div style={{ background: 'red' }}>Loading...</div>}>
    <ErrorBoundary>
      <Search />
    </ErrorBoundary>
  </React.Suspense>
);

const buttonStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#659DBD',
  borderRadius: '4px',
  margin: '4px',
  color: 'white',
  fontSize: '20px',
  width: '100px',
  height: '60px',
  textDecoration: 'none'
}

const App = () => {
  const [state, setState] = useState(1)
  return (
    <BrowserRouter>
      <div style={{display: 'flex', marginTop:'30px'}}>
        <Link to="/" style={buttonStyles}>host</Link>
        <Link to="/auth" style={buttonStyles}>auth</Link>
        <Link to="/layouts" style={buttonStyles}>layouts</Link>
        <Link to="/meetings" style={buttonStyles}>meetings</Link>
        <Link to="/landing" style={buttonStyles}>landing</Link>
        <Link to="/messages" style={buttonStyles}>messages</Link>
        <Link to="/profile" style={buttonStyles}>profile</Link>
        <Link to="/search" style={buttonStyles}>search</Link>
      </div>
      <div>
        <React.Suspense fallback={<div>POSHEL NAXYU</div>}>
          <Switch>
            <Route exact path="/">
              {console.log(state)}
              <div style={{ fontSize: '100px' }} onClick={() => setState(prev => prev+1)}>
                HOST
              </div>
            </Route>
            <Route path="/auth">
              <AuthComponent />
            </Route>
            <Route path="/layouts">
              <LayoutsComponent />
            </Route>
            <Route path="/meetings">
              <MeetingsComponent />
            </Route>
            <Route path="/landing">
              <LandingComponent />
            </Route>
            <Route path="/messages">
              <MessagesComponent />
            </Route>
            <Route path="/profile">
              <ProfileComponent />
            </Route>
            <Route path="/search">
              <SearchComponent />
            </Route>
          </Switch>
        </React.Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
