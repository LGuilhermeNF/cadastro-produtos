const PRODUTOS = '_PRODUTOSS';

export function ErroValidacao(errors){
    this.errors = errors;
}

export class ProdutoService {
    
    validar = (produto) => {
        const errors = []

        if(!produto.nome){
            errors.push('Campo NOME de preenchimento obrigatório.')
        }
        if(!produto.sku){
            errors.push('Campo SKU de preenchimento obrigatório.')
        }
        if(!produto.fornecedor){
            errors.push('Campo FORNECEDOR de preenchimento obrigatório.')
        }
        if(!produto.preco || produto.preco <= 0){
            errors.push('Campo PREÇO deve possuir valor maior que ZERO.')
        }

        if(errors.length > 0){
            throw new ErroValidacao(errors)
        }
    }

    obterProdutos = () => {
        const produtos = localStorage.getItem(PRODUTOS)
        return JSON.parse(produtos)
    }

    salvar = (produto) => {
        this.validar(produto

        )
        let produtos = localStorage.getItem(PRODUTOS)
        if(!produtos){
            produtos = []
        }
        else{
            produtos = JSON.parse(produtos);
        }
        produtos.push(produto);
        localStorage.setItem(PRODUTOS, JSON.stringify(produtos));
    }
}