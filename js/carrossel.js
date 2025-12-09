document.addEventListener('DOMContentLoaded', function() {
    // Serviços para o carrossel
    const services = [
        {
            title: "Farm de Contas",
            description: "Farmamos recursos, moedas e níveis para sua conta de forma segura e eficiente.",
            icon: "fas fa-tractor"
        },
        {
            title: "Passar Níveis Difíceis",
            description: "Nossa equipe supera os níveis mais desafiadores dos jogos por você.",
            icon: "fas fa-flag-checkered"
        },
        {
            title: "Manutenção de Conta",
            description: "Mantemos sua conta ativa, segura e com recursos atualizados regularmente.",
            icon: "fas fa-user-shield"
        },
        {
            title: "Criação de Servidor",
            description: "Desenvolvemos servidores personalizados para seus jogos favoritos.",
            icon: "fas fa-server"
        },
        {
            title: "Instruções Personalizadas",
            description: "Tutoriais e guias específicos para melhorar seu desempenho nos jogos.",
            icon: "fas fa-graduation-cap"
        },
        {
            title: "Busca de Itens Raros",
            description: "Procuramos e adquirimos itens raros e limitados para sua coleção.",
            icon: "fas fa-search"
        }
    ];
    
    // Elementos do carrossel
    const slider = document.getElementById('servicesSlider');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const sliderDots = document.getElementById('sliderDots');
    
    if (slider) {
        let currentSlide = 0;
        
        // Inicializar slides
        services.forEach((service, index) => {
            // Criar slide
            const slide = document.createElement('div');
            slide.className = 'slide';
            slide.innerHTML = `
                <div class="slide-icon">
                    <i class="${service.icon}"></i>
                </div>
                <h3 class="slide-title">${service.title}</h3>
                <p class="slide-description">${service.description}</p>
                <a href="serviços.html" class="btn btn-primary">Saiba Mais</a>
            `;
            slider.appendChild(slide);
            
            // Criar dot
            const dot = document.createElement('div');
            dot.className = `dot ${index === 0 ? 'active' : ''}`;
            dot.dataset.index = index;
            sliderDots.appendChild(dot);
            
            // Adicionar evento ao dot
            dot.addEventListener('click', () => {
                goToSlide(index);
            });
        });
        
        // Configurar largura do slider
        const slides = document.querySelectorAll('.slide');
        slider.style.width = `${slides.length * 100}%`;
        
        // Função para ir para um slide específico
        function goToSlide(index) {
            if (index < 0) index = slides.length - 1;
            if (index >= slides.length) index = 0;
            
            currentSlide = index;
            slider.style.transform = `translateX(-${currentSlide * (100 / slides.length)}%)`;
            
            // Atualizar dots
            document.querySelectorAll('.dot').forEach((dot, i) => {
                dot.classList.toggle('active', i === currentSlide);
            });
        }
        
        // Event listeners para botões
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                goToSlide(currentSlide - 1);
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                goToSlide(currentSlide + 1);
            });
        }
        
        // Auto-play do carrossel
        setInterval(() => {
            goToSlide(currentSlide + 1);
        }, 5000);
        
        // Pausar auto-play ao passar o mouse
        slider.addEventListener('mouseenter', () => {
            clearInterval(autoPlay);
        });
        
        let autoPlay = setInterval(() => {
            goToSlide(currentSlide + 1);
        }, 5000);
        
        // Reiniciar auto-play ao remover o mouse
        slider.addEventListener('mouseleave', () => {
            clearInterval(autoPlay);
            autoPlay = setInterval(() => {
                goToSlide(currentSlide + 1);
            }, 5000);
        });
    }
});
