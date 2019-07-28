import React, {Component} from 'react'
import axios from 'axios'
import 'normalize.css/normalize.css'
import '../styles/App.css'
import { Link }from 'react-router-dom'

class FullPicture extends Component {

    state = {
        cars : '',
        id : ''
    }

    componentWillReceiveProps(newprops){

      const id = newprops.match.params.id 

      axios.get(`/api/Cars/${id}`).then(resp => {

          this.setState({
            cars : resp.data.img,
            id : resp.data.AlbumId
                    })
          console.log(this.state.cars)
          console.log()
        })
    }

    componentDidMount() {

      const id = this.props.match.params.id 

      axios.get(`/api/Cars/${id}`).then(resp => {

          this.setState({
            cars : resp.data.img,
            id : resp.data.AlbumId
          })
          console.log(this.state.cars)
        })
  } 

    render() {
      return (

   

        <div className="largecontainer">
       <div className="backbutton">
          <Link to={`/Album/${this.state.id}`}>
          Back
          </Link>
          </div>

          <div className="largepicture">
          <img src={this.state.cars} alt="enlargedphoto"/>
          </div>
          </div>
     
      )
    }
  }
  
  export default FullPicture