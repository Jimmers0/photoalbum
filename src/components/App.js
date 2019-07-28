import React from 'react'
import 'normalize.css/normalize.css'
import '../styles/App.css'
import Albums from './Albums'
import FullPicture from './FullPicture'
import Nav from './Nav'
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom'

class App extends React.Component {

  render() {
    return (
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Nav}/>
              <Route path="/Cars/:id" component={FullPicture}/>
              <Route exact path="/Album/:id" component={Albums}/>
              <Nav />
            </Switch>
          </div>
        </Router>
    )
  }
}
export default App