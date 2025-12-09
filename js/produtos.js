document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    
    // Todos os produtos disponíveis
    const allProducts = [
        {
            id: 1,
            name: "Conta Roblox Premium",
            description: "Conta com avatar raro, 5.000 Robux e passes exclusivos.",
            price: "R$ 199,90",
            image: "https://images.unsplash.com/photo-1621330396173-68b2b5d0d349?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            category: "contas"
        },
        {
            id: 2,
            name: "Script Hack Completo",
            description: "Script premium para diversos jogos do Roblox com atualizações vitalícias.",
            price: "R$ 49,90",
            image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            category: "scripts"
        },
        {
            id: 3,
            name: "Pacote 10.000 Robux",
            description: "Robux seguros e entregues instantaneamente na sua conta.",
            price: "R$ 99,90",
            image: "https://images.unsplash.com/photo-1618331833071-1c0c6ee3d19e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            category: "robux"
        },
        {
            id: 4,
            name: "Item Raro Limitado",
            description: "Item exclusivo e desejado por colecionadores. Entrega rápida.",
            price: "R$ 299,90",
            image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            category: "itens"
        },
        {
            id: 5,
            name: "Conta Nível Máximo",
            description: "Conta com nível máximo nos jogos mais populares.",
            price: "R$ 349,90",
            image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            category: "contas"
        },
        {
            id: 6,
            name: "Passes VIP Exclusivos",
            description: "Acesso VIP a servidores privados e benefícios exclusivos.",
            price: "R$ 79,90",
            image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            category: "passes"
        },
        {
            id: 7,
            name: "Pacote 50.000 Robux",
            description: "Grande quantidade de Robux com desconto especial.",
            price: "R$ 399,90",
            image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            category: "robux"
        },
        {
            id: 8,
            name: "Kit Scripts Completos",
            description: "Coleção com 10 scripts diferentes para vários jogos.",
            price: "R$ 129,90",
            image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            category: "scripts"
        },
        {
            id: 9,
            name: "Conta Aluguel Mensal",
            description: "Alugue uma conta premium por um mês inteiro.",
            price: "R$ 89,90",
            image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            category: "contas"
        },
        {
            id: 10,
            name: "Item Colecionador Raro",
            description: "Item extremamente raro para verdadeiros colecionadores.",
            price: "R$ 499,90",
            image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            category: "itens"
        },
        {
            id: 11,
            name: "Pacote 5.000 Robux",
            description: "Quantidade ideal de Robux para compras moderadas.",
            price: "R$ 59,90",
            image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            category: "robux"
        },
        {
            id: 12,
            name: "Passes para Todos Jogos",
            description: "Acesso VIP a múltiplos jogos populares do Roblox.",
            price: "R$ 149,90",
            image: "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            category: "passes"
        }
    ];
    
    // Elementos da página
    const productsGrid = document.getElementById('productsGrid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // Renderizar todos os produtos inicialmente
    renderProducts(allProducts);
    
    // Adicionar eventos aos botões de filtro
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover classe active de todos os botões
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Adicionar classe active ao botão clicado
            this.classList.add('active');
            
            // Obter categoria para filtrar
            const category = this.getAttribute('data-category');
            
            // Filtrar produtos
            let filteredProducts;
            if (category === 'todos') {
                filteredProducts = allProducts;
            } else {
                filteredProducts = allProducts.filter(product => product.category === category);
            }
            
            // Renderizar produtos filtrados
            renderProducts(filteredProducts);
        });
    });
    
    // Função para renderizar produtos
    function renderProducts(products) {
        productsGrid.innerHTML = '';
        
        if (products.length === 0) {
            productsGrid.innerHTML = '<p class="no-products">Nenhum produto encontrado nesta categoria.</p>';
            return;
        }
        
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-content">
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-price">${product.price}</div>
                    <div class="product-actions">
                        <button class="btn btn-primary add-to-cart" data-id="${product.id}">Adicionar ao Carrinho</button>
                        <button class="btn btn-outline view-details">Detalhes</button>
                    </div>
                </div>
            `;
            productsGrid.appendChild(productCard);
        });
        
        // Adicionar eventos aos botões "Adicionar ao Carrinho"
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', function() {
                const productId = this.getAttribute('data-id');
                const product = allProducts.find(p => p.id == productId);
                
                let cart = JSON.parse(localStorage.getItem('cart')) || [];
                cart.push(product);
                localStorage.setItem('cart', JSON.stringify(cart));
                
                updateCartCount();
                
                // Feedback visual
                this.textContent = "Adicionado!";
                this.style.backgroundColor = "green";
                
                setTimeout(() => {
                    this.textContent = "Adicionar ao Carrinho";
                    this.style.backgroundColor = "";
                }, 2000);
            });
        });
    }
});
