### Redux
Redux is a library for managing and updating application state, using events called "actions". It serves as a centralized store for state that needs to be used across your entire application, with rules ensuring that the state can only be updated in a predictable fashion.

---
### Store
The center of every Redux application is the store. A "store" is a container that holds your application's global state.

---
### Actions
You can think of an action as an event that describes something that happened in the application.

---
### Reducers
A reducer is a function that receives the current state and an action object, decides how to update the state, and returns the new state. You can think of a reducer as an event listener which handles events based on the received action type.

---
### Slice
A slice is a function that accepts an initial state, an object of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.

---
### Dispatch
The only way to update the state is to call dispatch method and pass in an action object. The store will run its reducer function and save the new state value. You can think of dispatching actions as "triggering an event" in the application. Something happened, and we want the store to know about it.

---
### Selectors
Selectors are functions that know how to extract specific pieces of information from a store state value. As an application grows bigger, this can help avoid repeating logic as different parts of the app need to read the same data.

---
### Core Concepts and Principles
**1. Single Source of Truth:** The global state of your application is stored as an object inside a single store.

**2. State is Read-Only:** The only way to change the state is to dispatch an action, an object that describes what happened.

**3. Changes are Made with Pure Reducer Functions:** To specify how the state is updated based on actions, you write reducer functions.