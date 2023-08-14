/* @refresh reload */
import { render } from 'solid-js/web';
import App from './pages/App';
import User from './pages/User';
import { Router, Route, Routes, A } from "@solidjs/router";

import './index.css';


const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() => (
    <Router>
      <Routes>
        <Route path="/" component={App} />
        <Route path="/user" component={User} />
      </Routes>
    </Router>
  ),
   root);
