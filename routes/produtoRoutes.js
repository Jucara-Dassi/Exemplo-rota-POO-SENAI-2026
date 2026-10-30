import express from 'express'; 
import { cadastrarProduto, listarProdutos, buscarProdutoPorIndice, atualizarProduto,deletarProduto } from '../controller/produtoController.js';

const router = express.Router();

router.post('/', cadastrarProduto);
router.get('/', listarProdutos);
router.get('/:indice', buscarProdutoPorIndice);
router.put('/:indice', atualizarProduto);
router.delete('/:indice', deletarProduto);

export default router;
