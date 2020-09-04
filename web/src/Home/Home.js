import React,{Component} from 'react';
import Movie from './Movie'
import axios from 'axios'
import './Home.css'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {movies_list:[]};
      }
    componentDidMount(){
        axios.get("http://localhost:4000/movies").then((res=>{
            console.log("dataaa",res.data.movies)
            let movies_list=[]
            res.data.movies.forEach(movie=>{
                movies_list.push(<Movie title={movie.title} image={movie.image}></Movie>)
            })
            this.setState({movies_list:movies_list})
        })).catch((error=>{
            console.log(error)
        }))
    }
    render () {
    return (
      <div className="home">
          {this.state.movies_list}
      </div>
    );
  }
}

export default Home