import Header from "./components/Header";
import About from "./components/About";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import NewPost from "./components/NewPost";
import PostPage from "./components/PostPage";
import Missing from "./components/Missing";
import { Route, Switch } from 'react-router-dom';
import { DataProvider } from "./context/DataContext";
import EditPost from "./components/EditPost";

function App() {
  return (
    <div className="App">
      <Header title={"React JS Blog"} />
      <Nav />
      <DataProvider>
        <Switch>

          <Route exact path="/" component={Home} />

          <Route exact path="/post" component={NewPost} />

          <Route path="/post/:id" component={PostPage} />

          <Route path="/missing" component={Missing} />

          <Route path="/edit/:id" component={EditPost} />

          <Route path="/about" component={About} />

          <Route path="*" component={Missing} />

        </Switch>
      </DataProvider>

      <Footer />

    </div>
  );
}

export default App;
