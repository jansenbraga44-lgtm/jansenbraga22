const produtos = [
    {
        id: 1,
        nome: "Smartphone Premium 2025",
        preco: "195.000",
        imagem: "images.unsplash.com",
        categoria: "Eletrónicos"
    },
    {
        id: 2,
        nome: "Ténis Urban Sport",
        preco: "42.000",
        imagem: "images.unsplash.com",
        categoria: "Moda"
    },
    {
        id: 3,
        nome: "Smartwatch Elite",
        preco: "38.500",
        imagem: "images.unsplash.com",
        categoria: "Acessórios"
    },
    {
        id: 4,
        nome: "Perfume Night Luanda",
        preco: "25.000",
        imagem: "images.unsplash.com",
        categoria: "Beleza"
    }
];

// 2. Função para carregar os produtos na tela
function renderizarProdutos() {
    const grid = document.getElementById('product-grid');
    
    produtos.forEach(item => {
        const html = `
            <div class="card">
                <img src="${item.imagem}" alt="${item.nome}">
                <div class="card-content">
                    <small>${item.categoria}</small>
                    <h3>${item.nome}</h3>
                    <span class="price">${item.preco} Kz</span>
                    <button class="btn-buy" onclick="adicionarAoCarrinho()">Comprar</button>
                </div>
            </div>
        `;
        grid.innerHTML += html;
    });
}

// 3. Função do Carrinho
let totalItens = 0;
function adicionarAoCarrinho() {
    totalItens++;
    document.getElementById('cart-count').innerText = totalItens;
    alert("Excelente escolha! Produto adicionado ao carrinho.");
}

// Iniciar a renderização quando a página carregar
window.onload = renderizarProdutos;

