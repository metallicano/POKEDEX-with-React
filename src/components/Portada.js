import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';


export default class Portada extends Component {



    state = {
        pokemones: [],
        pokemonId: [],
        count:0
    }

    async componentDidMount() {
        this.getPokemones(this.state.count);

    }


    async getPokemones(numero) {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${numero}&limit=20`);
        this.setState({ pokemones: res.data.results })   
        for (let i = 0; i < this.state.pokemones.length; i++) {
            const res2 = await axios.get(this.state.pokemones[i].url)
            
            var joined = this.state.pokemonId.concat(res2.data);
            this.setState({ pokemonId: joined })


        }
        


    }

    addCount=async (e)=>{
        e.preventDefault();
        this.setState({count:this.state.count + 20})
        this.setState({pokemonId:[]})
        this.getPokemones(this.state.count+20);

    }


    reduceCount=(e)=>{
        e.preventDefault();
        this.setState({count:this.state.count - 20})
        this.setState({pokemonId:[]})
        this.getPokemones(this.state.count-20);
        
        
    }






    render() {
        return (
            <div className="container p-2 ">
                
                <button type="button" className="btn btn-warning btn-lg m-2" onClick={this.reduceCount}>Back button</button>
                <button type="button" className="btn btn-warning btn-lg m-2" onClick={this.addCount}>Next button</button>
                <div className="row row-cols-1 row-cols-md-4">
                    {
                        this.state.pokemonId.map(pokemon =>
                            <div className="col mb-4" key={pokemon.name}>
                                <Link to={`/pokemon/${pokemon.name}`}>
                                    <div className="card">
                                        <img src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`} className="card-img-top" alt={pokemon.name} id="img-portada"/>
                                            <div className="card-body bg-dark text-white">
                                                <h2 className="card-title">{pokemon.name} </h2>
                                                <h3>ID{pokemon.id}</h3>
                                                <h3 className="card-text">{pokemon.types[0].type.name}</h3>
                                            </div>
                                     </div>
                                </Link>
                            </div>
                            )
                    }
                </div>




            </div>
        )
    }
}
