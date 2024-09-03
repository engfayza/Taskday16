import "./App.css";
import Comment from "./Components/Comment/Comment";
import AddNewComment from "./Components/AddNewComment/AddNewComment";

function App() {
  return (
    <div id="MainContainer">
      <Comment />
      <AddNewComment />
    </div>
  );
}

export default App;
