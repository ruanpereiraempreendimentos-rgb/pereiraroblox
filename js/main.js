// Menu Mobile Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.innerHTML = navMenu.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
}

// Fechar menu ao clicar em um link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Atualizar contador do carrinho
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

// Carregar produtos em destaque
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    
    // Produtos em destaque
    const featuredProducts = [
        {
            id: 1,
            name: "Conta Roblox Premium",
            description: "Conta com avatar raro, Robux e passes exclusivos.",
            price: "R$ 199,90",
            image: "https://images.unsplash.com/photo-1621330396173-68b2b5d0d349?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            category: "contas"
        },
        {
            id: 2,
            name: "Script Hack Completo",
            description: "Script premium para diversos jogos do Roblox.",
            price: "R$ 49,90",
            image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            category: "scripts"
        },
        {
            id: 3,
            name: "Pacote 10.000 Robux",
            description: "Robux seguros e entregues instantaneamente.",
            price: "R$ 99,90",
            image: "https://images.unsplash.com/photo-1618331833071-1c0c6ee3d19e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            category: "robux"
        },
        {
            id: 4,
            name: "Item Raro Limitado",
            description: "Item exclusivo e desejado por colecionadores.",
            price: "R$ 299,90",
            image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            category: "itens"
        }
    ];
    
    // Renderizar produtos em destaque
    const featuredProductsContainer = document.getElementById('featuredProducts');
    if (featuredProductsContainer) {
        featuredProducts.forEach(product => {
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
            featuredProductsContainer.appendChild(productCard);
        });
        
        // Adicionar evento aos botões "Adicionar ao Carrinho"
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', function() {
                const productId = this.getAttribute('data-id');
                const product = featuredProducts.find(p => p.id == productId);
                
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
    
    // Adicionar efeito de rolagem suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
