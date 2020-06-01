import React, { Component } from 'react'
import axios from 'axios'

export default class Pokemon extends Component {

    state = {
        pokemonData: []

    }

    async componentDidMount() {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.props.match.params.id}`)
        this.setState({ pokemonData: res.data })
        
        

    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className=" text-center" >
                        <h1 className="text-center mb-5" id="titulo-pokemon">{this.state.pokemonData.name} <span id="span-titulo">N. º{this.state.pokemonData.id}</span> </h1>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <img src={`https://pokeres.bastionbot.org/images/pokemon/${this.state.pokemonData.id}.png`} alt="" id="imagenes" />
                        </div>
                        <div className="col-md-6">
                            <div className="card text-white  mb-3" id="card2">
                                <div className="card-header text-center"><h2>Stats</h2></div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h4 className="text-center">Altura</h4>
                                            <h2 className="text-center text-dark">{this.state.pokemonData.height}</h2>
                                            <h4 className="text-center">Peso</h4>
                                            <h2 className="text-center text-dark">{this.state.pokemonData.weight} Kg</h2>
                                        </div>
                                        <div className="col-md-6">
                                        <h4 className="text-center">Nombre</h4>
                                            <h2 className="text-center text-dark">{this.state.pokemonData.name}</h2>
                                            <h4 className="text-center">Experiencia base</h4>
                                            <h2 className="text-center text-dark">{this.state.pokemonData.base_experience} xp</h2>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>




                </div>
            </div>
        )
    }
}
