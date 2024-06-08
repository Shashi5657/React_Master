//React is a popular js library used for creating interactive UI
//less code, component based code
//project structure , it uses tools to convert user-friendly code to machine understandable code
//npx create-react-app my-app
//npm create vite@latest
//supports jsx syntax- which allow us to write html like code within the js
//package.json manages the dependencies of our projectx
//components are key building blocks
//returning components, importing & exporting componenst
//outputting dynamic values using curly braces {}
//react fragments - only one element should be wrapped around all elements
//props- we can reuse same components with diff details
//css styling - post.module.css(for avoiding name clashes), inline styles <div style = {{}}

//importing that first component Post
import Post from "./components/Post";

function App() {
  return (
    <main>
      <Post name="shashi" message="Learing React is Awesome" />
      <Post name="vinay" message="Continous learning is essential" />
      <Post name="sathu" message="Enhancing skills matter" />
    </main>
  );
}

export default App;
