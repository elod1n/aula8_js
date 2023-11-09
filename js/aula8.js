class SimuladorInventario {
    constructor() {
        this.itens = {};
    }

    identificarItem() {
        const nomeItem = document.getElementById('item').value.trim();
        const categoria = document.getElementById('category').value.trim();
        const valor = parseFloat(document.getElementById('valor').value);

        if (!nomeItem || !categoria || isNaN(valor)) {
            this.atualizarResultado('Por favor, preencha o nome do item, a categoria e o valor.');
            return;
        }

        const item = { nome: nomeItem, categoria: categoria, valor: valor.toFixed(2) };

        this.itens[nomeItem] = item;
        this.atualizarResultado(`Item '${nomeItem}' foi definido para a categoria '${categoria}' com o valor R$ ${valor.toFixed(2)}.`);
        
        this.mostrarInventario();
    }

    atualizarResultado(mensagem) {
        document.getElementById('resultado').textContent = mensagem;
    }

    mostrarInventario() {
        const tabelaInventario = document.getElementById('tabela-inventario');
        tabelaInventario.innerHTML = '';

        let cabecalho = tabelaInventario.querySelector('thead');
        if (!cabecalho) {
            cabecalho = document.createElement('thead');
            const linhaCabecalho = cabecalho.insertRow();
            const celulaNome = linhaCabecalho.insertCell();
            const celulaCategoria = linhaCabecalho.insertCell();
            const celulaValor = linhaCabecalho.insertCell();
            celulaNome.textContent = 'Item';
            celulaCategoria.textContent = 'Categoria';
            celulaValor.textContent = 'Valor (R$)';
            tabelaInventario.appendChild(cabecalho);
        }

        const corpoTabela = document.createElement('tbody');
        tabelaInventario.appendChild(corpoTabela);
        for (const nomeItem in this.itens) {
            const item = this.itens[nomeItem];
            const linha = corpoTabela.insertRow();
            const celulaNome = linha.insertCell();
            const celulaCategoria = linha.insertCell();
            const celulaValor = linha.insertCell();
            celulaNome.textContent = item.nome;
            celulaCategoria.textContent = item.categoria;
            celulaValor.textContent = item.valor;
        }
    }
}

const simuladorInventario = new SimuladorInventario();

window.simuladorInventario = simuladorInventario;
