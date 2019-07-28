import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Nav extends Component {
    state = {
        album : []
    }

      componentDidMount() {
        
        axios.get("/api/Albums").then(resp => {
    
          this.setState({
            album: resp.data
          })

        })
      }
      render() {
        return (
  
        <div>
            <nav>
            <div className="albumtitle">My Albums</div>

            <div className="albumscontainer">
                <ul className="albumul">

                {this.state.album.map(result => (
                <li key={result.name}>
                <Link to={"/Album/" + result.id} style={{ textDecoration: 'none' , color: 'black'}}>
                <div>
                    <div className="coverphoto" style ={ { backgroundImage: "url("+result.coverphoto+")", backgroundSize: '150%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' } }>
                        <div className="albumname">{result.name}</div>
                    
                    </div>
                
                </div>
                </Link>
                </li>
                ))}
                
                </ul>

            </div>
            </nav>
        </div>
          
        )
      }
    }
export default Nav