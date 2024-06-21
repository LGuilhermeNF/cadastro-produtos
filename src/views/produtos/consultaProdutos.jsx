import React from "react";
import { ProdutoService } from "../../app/produtoService";
import { withRouter } from 'react-router-dom';

class ConsultaProdutos extends React.Component {

    state = {
        produtos: []
    }

    constructor(){
        super()
        this.service = new ProdutoService
    }

    componentDidMount(){
        const produtos = this.service.obterProdutos();
        this.setState({produtos})
    }

    preparaEditar = (sku) =>{
        // template stream
        this.props.history.push(`/cadastro-produtos/${sku}`)
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">Consuta Produto</div>
                <div className="card-body">
                    <table className="table table-hover">
                        <thead>
                            <tr className="table-secondary">
                                <th scope="col">Nome</th>
                                <th scope="col">SKU</th>
                                <th scope="col">Preço</th>
                                <th scope="col">Fornecedor</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.produtos.map(
                                    (produto, index) => {
                                        return (
                                            <tr key={index}>
                                                <th scope="row">{produto.nome}</th>
                                                <th>{produto.sku}</th>
                                                <th>{produto.preco}</th>
                                                <th>{produto.fornecedor}</th>
                                                <th>
                                                    <button onClick={() => this.preparaEditar(produto.sku)} className="btn btn-primary">Editar</button>
                                                    <button className="btn btn-danger">Deletar</button>
                                                </th>
                                            </tr>
                                        )
                                    }
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default withRouter(ConsultaProdutos);