import React from "react";
import { ProdutoService } from "../../app/produtoService";
import { withRouter } from 'react-router-dom';


const estadoInicial = {
    nome: '',
    sku: '',
    descricao: '',
    preco: 0,
    fornecedor: '',
    sucesso: false,
    errors: []
}

class CadastroProduto extends React.Component {
  
  state = estadoInicial;

  constructor(){
    super();
    this.service = new ProdutoService;
  }
  
  onSubmit = (event) => {
    const produto = {
      nome: this.state.nome,
      sku: this.state.sku,
      descricao: this.state.descricao,
      preco: this.state.preco,
      fornecedor: this.state.fornecedor
    }

    try{
      this.service.salvar(produto);
      this.limpaCampos();
      this.setState({sucesso: true})
    }
    catch(erro) {
      const errors = erro.errors
      this.setState({errors : errors});
    }
  }

  componentDidMount() {
    // console.log(this.props.match);
    
    const sku = this.props.match.params.sku

    if(sku){
        const resultado = this.service.obterProdutos().filter( produto => produto.sku === sku )

        if(resultado.length === 1){
            const produtoEncontrado = resultado[0]
            this.setState({ ...produtoEncontrado, atualizar: true })
        }
    }
}

  limpaCampos = () => {
    this.setState(estadoInicial);
  }

  render() {
    return (
      
      <div className="card">
        <div className="card-header">Cadastro de Produto</div>
        <div className="card-body">
          
          {this.state.sucesso &&
            ( <div class="alert alert-dismissible alert-success">
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                <strong>Sucesso!</strong> Produto cadastrado.
              </div>
            )
          }
          
          {this.state.errors.length > 0 &&
            this.state.errors.map(
              msg => {
                return(
                  <div class="alert alert-dismissible alert-danger">
                    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                    <strong>Error!</strong> {msg}
                  </div>
                )
              })
          }

          <div className="row mb-3">
            <div className="col-md-6">
              <div className="form-group">
                <label>Nome: *</label>
                <input 
                  type="text" 
                  value={this.state.nome} 
                  onChange={(event) => {this.setState({nome: event.target.value })}} 
                  className="form-control" 
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label>SKU: *</label>
                <input 
                  type="text" 
                  value={this.state.sku} 
                  onChange={(event) => {this.setState({sku: event.target.value })}} 
                  className="form-control" 
                />
              </div>
            </div>
          </div>

          <div classNbame="row mb-6">
            
            <div className="col-md-12">
              <div className="form-group">
                <label>Descrição:</label>
                <textarea 
                  value={this.state.descricao} 
                  onChange={(event) => {this.setState({descricao: event.target.value })}} 
                  className="form-control">
                </textarea>
              </div>
            </div>
          
          </div>

          <div className="row mt-3">
            <div className="col-md-6">
              <div className="form-group">
                <label>Preço: *</label>
                <input 
                  type="text" value={this.state.preco} 
                  onChange={(event) => {this.setState({preco: event.target.value })}} 
                  className="form-control" 
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label>Fornecedor: *</label>
                <input 
                  type="text" 
                  value={this.state.fornecedor} 
                  onChange={(event) => {this.setState({fornecedor: event.target.value })}} 
                  className="form-control" 
                />
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-1">
              <button className="btn btn-success" onClick={this.onSubmit}>Salvar</button>
            </div>
            <div className="col-md-1">
              <button className="btn btn-light" onClick={this.limpaCampos}>Limpar</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CadastroProduto);