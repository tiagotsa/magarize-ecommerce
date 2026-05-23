import { desenharProdutoNoCarrinhoSimples } from "./src/utilidades.js";

async function renderizarPedidoRecente() {
    try {
        const idPedidoRecente = localStorage.getItem("ultimoPedidoId");
        
        if (!idPedidoRecente) {
            document.getElementById("pedidos-container").innerHTML = "<p>Nenhum pedido recente encontrado.</p>";
            return;
        }

        const resposta = await fetch("http://localhost:3001/api/orders");
        const historico = await resposta.json();

        // Encontra apenas o pedido cujo ID é igual ao que salvamos no checkout
        const pedido = historico.find(p => p.id == idPedidoRecente);

        if (!pedido) {
            document.getElementById("pedidos-container").innerHTML = "<p>Pedido não localizado.</p>";
            return;
        }

        const container = document.getElementById("pedidos-container");
        container.innerHTML = ""; // Limpa qualquer coisa que estivesse lá

        // Renderiza apenas esse pedido
        const data = new Date(pedido.created_at).toLocaleDateString("pt-BR", { hour: "2-digit", minute: "2-digit" });
        
        const section = document.createElement("section");
        section.id = `pedido-${pedido.id}`;
        section.className = "bg-slate-300 p-4 rounded-md mb-6 w-full";
        section.innerHTML = `
            <h2 class='text-2xl font-bold mb-4'>Detalhes da sua Compra</h2>
            <p class='text-lg mb-4'>Pedido realizado em: ${data}</p>
        `;
        container.appendChild(section);

        if (pedido.items) {
            for (const item of pedido.items) {
                if (item.product_name) {
                    desenharProdutoNoCarrinhoSimples(
                        item.product_name, 
                        section.id, 
                        item.quantity
                    );
                }
            }
        }
        
        // Opcional: Adiciona o total no final
        section.innerHTML += `<p class='text-xl font-bold mt-4'>Total pago: $${pedido.total.toFixed(2)}</p>`;

    } catch (error) {
        console.error("Erro ao carregar pedido:", error);
    }
}

renderizarPedidoRecente();