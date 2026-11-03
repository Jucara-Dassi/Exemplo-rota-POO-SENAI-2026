import conexao from '../config/conexao.js';

export async function cadastrar(produto) {
    const sql = "INSERT INTO produto (nome, descricao, preco, quantidade) VALUES (?, ?, ?)";
    const [resultado] = await conexao.execute(sql, [
        produto.descricao,
        produto.preco,
        produto.peso,
    ]);

    return resultado.insertId;
}

export async function listar() {
    const sql = "SELECT * FROM produto";
    const [resultado] = await conexao.execute(sql);

    return resultado;
}

export async function buscarPorId(id) {
    const sql = "SELECT * FROM produto WHERE id_produto = ?";
    const [resultado] = await conexao.execute(sql, [id]);

    return resultado[0];
}
