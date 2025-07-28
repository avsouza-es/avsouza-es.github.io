// Função para inicializar tooltips (se houver)
document.addEventListener('DOMContentLoaded', function() {
    // Adicionar efeito de hover aos cards
    const cards = document.querySelectorAll('.ctf-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Adicionar animação aos botões de write-up
    const writeupButtons = document.querySelectorAll('.btn-outline-primary');
    writeupButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Função para filtrar máquinas por dificuldade
    window.filterMachines = function(difficulty) {
        const machineItems = document.querySelectorAll('.machine-item');
        machineItems.forEach(item => {
            const badge = item.querySelector('.badge');
            if (difficulty === 'all' || badge.classList.contains(`bg-${difficulty}`)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    };

    // Função para buscar máquinas
    window.searchMachines = function(searchTerm) {
        const machineItems = document.querySelectorAll('.machine-item');
        searchTerm = searchTerm.toLowerCase();
        
        machineItems.forEach(item => {
            const title = item.querySelector('h6').textContent.toLowerCase();
            const description = item.querySelector('p').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    };

    // Adicionar animação de loading
    const loadingSpinner = document.createElement('div');
    loadingSpinner.innerHTML = `
        <div class="text-center my-4" id="loading" style="display: none;">
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    `;
    document.body.appendChild(loadingSpinner);

    console.log('CTF Write-ups page loaded successfully!');
});

// Função para mostrar loading
function showLoading() {
    const loading = document.getElementById('loading');
    if (loading) {
        loading.style.display = 'block';
    }
}

// Função para esconder loading
function hideLoading() {
    const loading = document.getElementById('loading');
    if (loading) {
        loading.style.display = 'none';
    }
}