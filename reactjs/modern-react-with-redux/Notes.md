// Creates and manages our components
import React from "react";

// Interacts with the DOM
import ReactDOM from "react-dom";


// Create a new component.  This component should produce some HTML
// Components are objects which are views which are html

// *** RULE: 1 COMPONENT PER FILE ***

// const is an ES2016 piece of syntax
// const is a CONSTANT.  It can't change.
// This is a class definition of a component
// Can think of it as a "factory that creates instances of a component"

// Old plain 'function' style
// const App = function () {
// New ES6 style of declaring a function
// Useful for creating several functions inside a single component

// Create a new component.  This component should produce some HTML
// Components are objects which are views which are html

// const is an ES2016 piece of syntax

// This is a class definition of a component
// Can think of it as a "factory that creates instances of a component"
// Old plain 'function' style
// const App = function () {
// New ES6 style of declaring a function
// Useful for creating several functions inside a single component
const App = () => {
    return <div>
        <SearchBar/>
    </div>
}

    // whenever a component's "state" is changed, it is rerendered along with any children

# --save saves it to the package.json file
npm install --save youtube-api-search

// This is a "functional component".
const SearchBar = () => {
    return <input />
};

// short hand for inline handler
onChange={event => console.log(event.target.value)}