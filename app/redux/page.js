"use client";
import Layout from "@/components/layout/Layout";
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyBtn from "@/components/elements/CopyBtn";
import FaqSection from "@/components/elements/FaqSection";
import BoostSection from "../BoostSection/BoostSection ";

export default function Home() {
  const codeStore = `// store.js
import { createStore } from 'redux';

// Initial State
const initialState = {
  count: 0,
};

// Reducer Function
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
}

// Create Store
const store = createStore(counterReducer);

export default store;
`;

  const codeProvider = `// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
`;

  const codeCounter = `// Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const count = useSelector((state) => state.count); // Access state from Redux store
  const dispatch = useDispatch(); // Dispatch actions to the store

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
};

export default Counter;
`;

  const codeApp = `// App.js
import React from 'react';
import Counter from './Counter';

const App = () => {
  return (
    <div>
      <h1>Redux Counter</h1>
      <Counter />
    </div>
  );
};

export default App;
`;

  const faqs = [
    {
      question: "What is Redux?",
      answer:
        "Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently across different environments (client, server, and native) and are easy to test.",
    },
    {
      question: "How does Redux work?",
      answer:
        "Redux manages the state of your application by using a central store. Actions are dispatched to reducers, which update the store based on the action type. Components can subscribe to changes in the store and update the UI accordingly.",
    },
    {
      question: "When should I use Redux?",
      answer:
        "Redux is useful for applications with a lot of complex state logic, especially when state needs to be shared across multiple components. If your app has global state management needs and components spread across various parts of the UI, Redux can help centralize and manage that complexity.",
    },
    {
      question: "What are actions and reducers in Redux?",
      answer:
        "Actions are payloads of information that send data from your application to your Redux store. Reducers specify how the application's state changes in response to actions. They take the current state and an action as arguments and return a new state.",
    },
    {
      question: "What are Redux middlewares?",
      answer:
        "Middleware allows you to extend Redux with custom functionality. Middleware is most commonly used for handling asynchronous actions in Redux, such as making API calls. Popular middleware includes Redux Thunk and Redux Saga.",
    },
  ];

  return (
    <Layout
      headerStyle={4}
      footerStyle={1}
      breadcrumbTitle="Redux"
      bgImg="assets/img/blog/blog-page1__img1.png"
    >
      <section className="blog-page p-3">
        <div className="pt-5">
          <div className="blog-container container mt-5">
            <h1 className="blog-title text-center mb-4">
            Getting Started with Redux in React.js: A Beginner's Guide
            </h1>
            <p className="blog-description">
              Redux is a predictable state container for JavaScript apps. It
              helps manage the state of your application in a scalable way,
              especially in medium to large-scale applications where multiple
              components need to share and update the same state. When used with
              React.js, Redux can help manage the application's state more
              predictably and efficiently. In this guide, we’ll cover the basics
              of Redux and how to integrate it with React.js.
            </p>

            <div className="card mt-5 p-3">
              <div className="card-body">
                <h2 className="card-title ">Table of Contents</h2>
                <ol className="blog-toc list-unstyled">
                  <li>
                    1. <a href="#what-is-redux">What is Redux?</a>
                  </li>
                  <li>
                    2.{" "}
                    <a href="#why-use-redux-with-react">
                      Why Use Redux with React?
                    </a>
                  </li>
                  <li>
                    3. <a href="#key-redux-concepts">Key Redux Concepts</a>
                  </li>
                  <li>
                    4.{" "}
                    <a href="#setting-up-redux">
                      Setting Up Redux in a React.js Project
                    </a>
                  </li>
                  <li>
                    5. <a href="#basic-redux-flow">Basic Redux Flow</a>
                  </li>
                  <li>
                    6.{" "}
                    <a href="#step-by-step-guide">
                      Step-by-Step Guide: Adding Redux to a React App
                    </a>
                  </li>
                  <li>
                    7. <a href="#conclusion">Conclusion</a>
                  </li>
                </ol>
              </div>
            </div>

            <h2 className="section-titles mt-5" id="what-is-redux">
              1. What is Redux?
            </h2>
            <p className="blog-text">
              Redux is a state management library that provides a centralized
              store for all the components in your application. This store holds
              the entire state of the app, and the components subscribe to the
              store to get the updated state. Instead of passing props manually
              through every level of your application, Redux allows you to
              access the state in any component.
            </p>

            <h2 className="section-titles mt-5" id="why-use-redux-with-react">
              2. Why Use Redux with React?
            </h2>
            <p className="blog-text">
              While React has its own built-in state management (using useState
              and useReducer), Redux is useful for more complex applications
              that involve:
            </p>
            <ul className="blog-lists" style={{ listStyleType: "disc" }}>
              <li>&#x25BA; Multiple components that need to share data</li>
              <li>
                &#x25BA; Global states like user authentication, theme settings,
                or form states
              </li>
              <li>
                &#x25BA; Predictable state transitions for easier debugging and
                testing
              </li>
              <li>&#x25BA; A single source of truth for state management</li>
            </ul>

            <h2 className="section-titles mt-5" id="key-redux-concepts">
              3. Key Redux Concepts
            </h2>

            <div style={{width:"100%",padding:"20px 0px", borderRadius:"16px"}}>
              <img src="/assets/img/Key-Principles-of-Redux-React-Ar.png" alt="Redux Process Images" style={{width:"50%", borderRadius:"16px"}}/>
            </div>
            <ul className="blog-lists">
              <li>
                &#x25BA; <strong>Store:</strong> The single source of truth that
                holds the state of your application.
              </li>
              <li>
                &#x25BA; <strong>Action:</strong> A plain JavaScript object that
                represents an event in the app.
              </li>
              <li>
                &#x25BA; <strong>Reducer:</strong> A pure function that takes
                the current state and an action and returns a new state.
              </li>
              <li>
                &#x25BA; <strong>Dispatch:</strong> The method used to send
                actions to the Redux store.
              </li>
              <li>
                &#x25BA; <strong>Selectors:</strong> Functions that extract
                specific data from the Redux state.
              </li>
            </ul>

            <h2 className="section-titles mt-5" id="setting-up-redux">
              4. Setting Up Redux in a React.js Project
            </h2>
            <p className="blog-text">
              Before we can start using Redux in our React project, we need to
              install a few dependencies:
            </p>
            <ul>
              <li>&#x25BA; Redux - Core library for state management.</li>
              <li>&#x25BA; React-Redux - Official React bindings for Redux.</li>
            </ul>
            <p className="blog-text">
              You can install Redux and React-Redux using the following
              commands:
            </p>
            <CopyBtn
              Code={
                <SyntaxHighlighter
                  language="bash"
                  style={darcula}
                  customStyle={{
                    borderRadius: "12px",
                    padding: "16px",
                    background: "#303030",
                  }}
                >
                  {`npm install redux react-redux`}
                </SyntaxHighlighter>
              }
            />
            <p className="blog-text">Or with Yarn:</p>
            <CopyBtn
              Code={
                <SyntaxHighlighter
                  language="bash"
                  style={darcula}
                  customStyle={{
                    borderRadius: "12px",
                    padding: "16px",
                    background: "#303030",
                  }}
                >
                  {`yarn add redux react-redux`}
                </SyntaxHighlighter>
              }
            />

            <h2 className="section-titles mt-5" id="basic-redux-flow">
              5. Basic Redux Flow
            </h2>
            <p className="blog-text">
              The Redux flow follows these four key steps:
            </p>
            <ul className="blog-lists">
              <li>
                &#x25BA; Action: An event occurs (e.g., user clicks a button),
                and an action is dispatched.
              </li>
              <li>
                &#x25BA; Reducer: The reducer listens to the action and updates
                the state.
              </li>
              <li>
                &#x25BA; Store: The state is updated and stored in the Redux
                store.
              </li>
              <li>
                &#x25BA; React Component: The component is updated with the new
                state.
              </li>
            </ul>

            <h2 className="section-titles mt-5" id="step-by-step-guide">
              6. Step-by-Step Guide: Adding Redux to a React App
            </h2>
            <p className="blog-text">
              Let's walk through a simple example to add Redux to a React app.
            </p>
            <div style={{width:"100%",padding:"20px 0px", borderRadius:"16px"}}>
              <img src="/assets/img/Redux_Process.png" alt="Redux Process Images" style={{width:"50%", borderRadius:"16px"}}/>
            </div>

            <h3 className="code-title mt-3">Step 1: Create a Redux Store</h3>
            <CopyBtn
              Code={
                <SyntaxHighlighter
                  language="javascript"
                  style={darcula}
                  customStyle={{
                    borderRadius: "12px",
                    padding: "16px",
                    background: "#303030",
                  }}
                >
                  {codeStore}
                </SyntaxHighlighter>
              }
            />
            <h3 className="code-title mt-5">Step 2: Set Up Provider</h3>
            <CopyBtn
              Code={
                <SyntaxHighlighter
                  language="javascript"
                  style={darcula}
                  customStyle={{
                    borderRadius: "12px",
                    padding: "16px",
                    background: "#303030",
                  }}
                >
                  {codeProvider}
                </SyntaxHighlighter>
              }
            />

            <h3 className="code-title mt-5">
              Step 3: Connecting React Components to Redux
            </h3>
            <CopyBtn
              Code={
                <SyntaxHighlighter
                  language="javascript"
                  style={darcula}
                  customStyle={{
                    borderRadius: "12px",
                    padding: "16px",
                    background: "#303030",
                  }}
                >
                  {codeCounter}
                </SyntaxHighlighter>
              }
            />

            <h3 className="code-title mt-5">
              Step 4: Using the Counter Component
            </h3>
            <CopyBtn
              Code={
                <SyntaxHighlighter
                  language="javascript"
                  style={darcula}
                  customStyle={{
                    borderRadius: "12px",
                    padding: "16px",
                    background: "#303030",
                  }}
                >
                  {codeApp}
                </SyntaxHighlighter>
              }
            />

            <h3 className="code-title mt-5">Step 5: Testing the App</h3>
            <p className="blog-text">
              Now that the app is set up, it's time to run the React app to see
              Redux in action.
            </p>
            <p className="blog-text">
              Run the following command to start the app:
            </p>
            <CopyBtn
              Code={
                <SyntaxHighlighter
                  language="bash"
                  style={darcula}
                  customStyle={{
                    borderRadius: "12px",
                    padding: "16px",
                    background: "#303030",
                  }}
                >
                  {"npm start"}
                </SyntaxHighlighter>
              }
            />

            <p className="blog-text">
              You should now see a simple counter app. When you click the
              "Increment" and "Decrement" buttons, the count will change, and
              Redux will manage the state behind the scenes.
            </p>

            <h2 className="section-titles mt-5" id="conclusion">
              7. Conclusion
            </h2>
            <p className="blog-text">
              Congratulations! You've just implemented Redux in a basic React.js app. While this was a simple counter app, Redux becomes invaluable as your app grows in complexity. By managing state centrally, Redux makes your app more predictable, easier to debug, and more scalable.
            </p>
            <p className="blog-text">
              <strong>Further Learning:</strong>
            </p>
            <ul className="blog-lists">
              <li>&#x25BA; Explore advanced concepts like middleware (redux-thunk for async operations), selectors, and action creators.</li>
              <li>&#x25BA; Use Redux DevTools for easier debugging.</li>
            </ul>
          </div>

          <FaqSection faqs={faqs} title={"Redux"}/>

          <div className="pt-5 my-5">
            <BoostSection />
          </div>
        </div>
      </section>
    </Layout>
  );
}
