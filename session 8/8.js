// Virtual DOM is a copy of real DOM in JS!

// when something changes,
// - React will create a new VDOM (very fast!)
// - React will run the Diffing algorithm on the new VDOM and previous VDOM (very fast)
// - If something changes, React will only re-render that part of the Real DOM (fast enough!)

// What is Diffing?
// 1. check the element type. if not the same, tear it down and create a new one.
// 2. if it’s the same, check the attributes and styles and check the children,
//    keep the DOM node and only update the new attributes
