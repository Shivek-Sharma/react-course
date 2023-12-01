import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function myApp() {
  return (
    <h1>This is another app!</h1>
  )
}

const reactElement1 = {
  type: 'a',
  props: {
    href: 'https://www.google.com',
    target: '_blank'
  },
  children: 'Click me to visit google'
}

const reactElement2 = (
  <a href='https://google.com' target='_blank'>Visit google</a>
)

const username = "Shivek"

// This is actually how we can create elements in React without using JSX
const reactElement3 = React.createElement(
  'a',
  { href: 'https://www.google.com', target: '_blank' },
  'Click me to visit google',
  " " + username
)

ReactDOM.createRoot(document.getElementById('root')).render(

  /*
  myApp() //this will work but not suggested, instead write <myApp />
  reactElement1 //this will not work because React may have defined different properties
  reactElement2 //this will work
  reactElement3 //this will work
  */
  <App />

)
