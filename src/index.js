import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './views/App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root, { loader as rootLoader, action as rootAction } from './views/root';
import ErrorPage from './components/Example/React-router-dom/error-page';
import Contact, { loader as contactLoader } from './components/Example/React-router-dom/Contact';
import EditContact, { action as editAction } from './components/Example/React-router-dom/EditContact';
import { action as destroyAction } from './components/Example/React-router-dom/destroy';
import Index from './components/Example/React-router-dom';
import { store } from './components/Example/Redux-Toolkit/store';
import { Provider } from 'react-redux'
import { Counter } from './components/Example/Redux-Toolkit/counter/counter';
import Hook from './components/Example/React-hook/Index';
import Nav from './Nav/Nav';

//fake event globle
const emmitComment = (index) => {
  setInterval(() => {
    window.dispatchEvent(new CustomEvent(`lession-${index}`, {
      detail: `Nội dung của lession ${index}`
    }))
  }, 2000)
}

emmitComment(1)
emmitComment(2)
emmitComment(3)

const router = createBrowserRouter([
  {
    path: "/router",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader
      },
      {
        path: "contacts/:contactId/destroy",
        action: destroyAction,
        errorElement: <div>Oops! There was an error.</div>
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction
      },
      {
        index: true,
        element: <Index />
      }
    ],
  },
  {
    path: "/",
    element: <Nav />
  },
  {
    path: "/redux",
    element: <Counter />
  },
  {
    path: "/hook",
    element: <Hook />
  }

]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
