import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      lista: [
        
      ]
    };
  }



  componentWillMount() {

    const autores = this.getAutores();


    console.log(autores);


  };

  async getAutores() {
    try {
      const resp = fetch('http://cdc-react.herokuapp.com/api/autores', {})
        .then(response => response.json())
        .then(data => {
          console.log(data)
          this.setState({ lista: data });
        });



      return resp
    } catch (err) {
      // all errors will be captured here for anything in the try block
      console.log(err)
    }
  }




  render() {

    const autores = this.state.lista.map(function (autor) {
      return (
        <tr key={autor.nome}>
          <td>{autor.nome}</td>
          <td>{autor.email}</td>
        </tr>
      );
    })

    return (
      <div className="App">
        <div class="ui menu">
          <a class="active item">Home</a>
          <a class="item">Autor</a>
          <a class="item">Livro</a>
        </div>

        <div class="ui centered four column grid">
          <div class="column">
            <form class="ui form">
              <div class="field">
                <label>Nome</label>
                <input placeholder="nome" />
              </div>
              <div class="field">
                <label>Email</label>
                <input placeholder="email" />
              </div>
              <div class="field">
                <label>Senha</label>
                <input placeholder="senha" />
              </div>
              <div class="field">
                <div class="ui checkbox">
                  <input type="checkbox" class="hidden" readonly="" tabindex="0" />
                  <label>I agree to the Terms and Conditions</label>
                </div>
              </div>
              <button type="submit" class="ui button">Gravar</button>
            </form>
          </div>
        </div>

        <div class="ui centered two column grid">
          <div class="column">
            <table class="ui striped table">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {autores}
              </tbody>
            </table>

          </div>
        </div>
      </div>
    );
  }
}

export default App;


