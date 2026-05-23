import { lerLocalStorage, desenharProdutoNoCarrinhoSimples, catalogo } from "./src/utilidades.js";

function renderizarProdutosCheckout() {
    const carrinho = lerLocalStorage("carrinho") ?? {};
    const container = document.getElementById("container-produtos-checkout");
    
    if (!container) return;
    container.innerHTML = "";

    for (const idProduto in carrinho) {
        desenharProdutoNoCarrinhoSimples(idProduto, "container-produtos-checkout", carrinho[idProduto]);
    }
}

renderizarProdutosCheckout();

const formCheckout = document.querySelector("form");

formCheckout.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = {
        customer: {
            name: document.getElementById("nome").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("telefone").value
        },
        payment: { cardNumber: document.getElementById("numero-cartao").value },
        address: {
            cep: document.getElementById("cep").value,
            street: document.getElementById("endereco").value,
            number: document.getElementById("numero").value,
            complement: document.getElementById("complemento").value
        },
        cart:[],
        total: 0
    };

    const carrinhoIds = lerLocalStorage("carrinho") ?? {};
    for (const id in carrinhoIds) {
        const produto = catalogo.find((p) => p.id === id);
        if (produto) {
            formData.cart.push({
                name: produto.nome,
                size: "M",
                price: produto.preco,
                quantity: carrinhoIds[id]
            });
            formData.total += (produto.preco * carrinhoIds[id]);
        }
    }

    try {
        const resposta = await fetch("http://localhost:3001/api/orders", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });

        if (resposta.ok) {
            const dados = await resposta.json();
            localStorage.setItem("ultimoPedidoId", dados.order.id);
            localStorage.removeItem("carrinho");
            window.location.href = "pedidos.html";
        } else {
            const erro = await resposta.json();
            alert("Erro: " + (erro.error || "Erro desconhecido"));
        }
    } catch (error) {
        alert("Não foi possível conectar ao servidor.");
    }
});