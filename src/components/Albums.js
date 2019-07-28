import React from 'react'
import axios from 'axios'
import Car from './Car'
import { Link } from 'react-router-dom'

class Albums extends React.Component {

   

    state = {
        cars : [],
        name : '',
        albumname: '',
        album: []
        
    }

    componentWillReceiveProps(newprops) {

        const id = newprops.match.params.id 
        axios.get("/api/Albums").then(resp => {
    
          this.setState({
            album: resp.data
          })
  
        })
        
        axios.get(`/api/Albums/${id}`).then(resp => {
  
          this.setState({
            albumname : resp.data.name,
          })
  
          
        })
  
        axios.get(`/api/Albums/${id}?_embed=Cars`).then(resp => {
  
            this.setState({
              cars : resp.data.Cars,
            })
            console.log(resp.data.Cars)
          })
    } 

    componentDidMount() {

      const id = this.props.match.params.id 

      axios.get("/api/Albums").then(resp => {
    
        this.setState({
          album: resp.data
        })

      })
      
      axios.get(`/api/Albums/${id}`).then(resp => {

        this.setState({
          albumname : resp.data.name,
        })

        
      })

      axios.get(`/api/Albums/${id}?_embed=Cars`).then(resp => {

          this.setState({
            cars : resp.data.Cars,
          })
          console.log(resp.data.Cars)
        })
  } 

    render() {
      return (

        

        <div>
          

          <div className="albumtitle">{this.state.albumname}</div>

        <div className="contentcontainer">
          <div className="albums">
            <ul className="albumsul">
                <Link to={'/'} style={{ textDecoration: 'none' , color: 'black'}}>
                  <li className="homebutton">Home</li>
                </Link>
          {this.state.album.map(result => (
                <li key={result.name}>
                <Link to={"/Album/" + result.id} style={{ textDecoration: 'none' , color: 'black'}}>
                <div className="albumnameA">{result.name}</div>
                </Link>
                </li>
                ))}
                </ul>
          </div>




          <div className="carscontainer">
          <ul className="carsul">
          {this.state.cars.map(result => (
          <li key={result.name}> 
          <Link to={"/Cars/" + result.id} style={{ textDecoration: 'none' , color: 'black'}}>
          
                          <div>
                          <div className="carphoto" style ={ { backgroundImage: "url("+ result.img +")", backgroundSize: '100%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundColor: 'rgb(255, 255, 255, .3)', borderRadius: '30px', border: '5px solid black'} }>
                              <div className="carname">{result.name}</div>
                          
                          </div>
                      
                      </div>
          
          </Link>
          </li>
          ))}

          </ul>
          </div>
          </div>
        </div>
  
      )
    }
  }
  
  export default Albums