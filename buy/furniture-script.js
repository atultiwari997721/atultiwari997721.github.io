document.addEventListener('DOMContentLoaded', () => {
    const products = [
                {
                    id: 1,
                    name: 'Modern Nordic Sofa',
                    description: 'A comfortable 3-seater sofa with clean lines and soft fabric upholstery, perfect for a contemporary living space. Durable wooden frame and plush cushions.',
                    price: '₹25,000',
                    image: sec='pic1.png' // Warm brown/white theme
                },
                {
                    id: 2,
                    name: 'Solid Wood Dining Table',
                    description: 'Crafted from sustainable oak wood, this sturdy dining table seats up to 6 people. Features a minimalist design that complements various decor styles.',
                    price: '₹18,500',
                    image: sec='pic1.png' // Brown/warm white theme
                },
                {
                    id: 3,
                    name: 'Velvet Accent Chair',
                    description: 'Add a touch of elegance with this luxurious velvet accent chair. Its ergonomic design and soft padding offer ultimate comfort. Available in multiple rich colors.',
                    price: '₹9,200',
                    image: sec='pic1.png' // Green/warm white theme
                },
                {
                    id: 4,
                    name: 'Industrial Bookshelf',
                    description: 'A tall, open-concept bookshelf with metal frames and reclaimed wood shelves. Ideal for displaying books, decor, and plants in a loft or modern home.',
                    price: '₹12,800',
                    image: sec='pic1.png' // Grey/white theme
                },
                {
                    id: 5,
                    name: 'Comfort Plush Bed Frame (Queen)',
                    description: 'A stylish and supportive queen-sized bed frame with a padded headboard, designed for maximum comfort and restful sleep. Easy assembly.',
                    price: '₹20,000',
                    image: sec='pic1.png' // Warm brown/light grey theme
                },
                {
                    id: 6,
                    name: 'Minimalist Coffee Table',
                    description: 'A sleek, low-profile coffee table with a tempered glass top and polished chrome legs. Perfect for modern living rooms, offering both style and functionality.',
                    price: '₹7,500',
                    image: sec='pic1.png' // Dark grey/white theme
                }
    ];

    const productListDiv = document.getElementById('product-list');
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Function to apply theme and update button text
    function applyTheme(theme) {
        if (theme === 'dark-theme') {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            themeToggleBtn.textContent = 'Light Theme'; // Button text for dark theme
        } else {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            themeToggleBtn.textContent = 'Dark Theme'; // Button text for light theme
        }
        localStorage.setItem('theme', theme); // Save preference
    }

    // Load theme preference from local storage or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme); // Apply saved theme
    } else {
        // If no theme saved, check user's system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            applyTheme('dark-theme');
        } else {
            applyTheme('light-theme'); // Default to light if no preference
        }
    }

    // Event listener for theme toggle button
    themeToggleBtn.addEventListener('click', () => {
        if (body.classList.contains('light-theme')) {
            applyTheme('dark-theme');
        } else {
            applyTheme('light-theme');
        }
    });

    // --- Add event listener for category buttons ---
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;
            let targetUrl = ''; // Variable to hold the URL

            // Define the URL for each category (using relative paths for files in the same folder)
            switch (category) {
                case 'electronics':
                    targetUrl = 'electronics.html'; // Assuming you have this file in the same folder
                    break;
                case 'fashion':
                    targetUrl = 'sell-fashion.html';     // Assuming you have this file in the same folder
                    break;
                case 'home-appliances':
                    targetUrl = 'sell-home-appliances.html'; // Assuming you have this file
                    break;
                case 'books':
                    targetUrl = 'sell-books.html';       // Assuming you have this file
                    break;
                case 'vehicles':
                    targetUrl = 'sell-vehicles.html';   // Assuming you have this file
                    break;
                case 'other':
                    targetUrl = 'sell-other.html';       // Assuming you have this file
                    break;
                default:
                    targetUrl = 'sell-all.html'; // Fallback to a general sell page
            }

            // Open the URL in the current tab/window (default behavior, or use _blank for new tab)
            if (targetUrl) {
                window.location.href = targetUrl; // Navigates in the same tab
                // If you want to open in a new tab, use: window.open(targetUrl, '_blank');
            } else {
                alert('No link configured for this category.');
            }
        });
    });
    // --- End Category Button Logic ---


    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p class="price">${product.price}</p>
            <div class="product-buttons">
                <a href="https://wa.me/+917828706954?text=I'm%20interested%20in%20the%20${encodeURIComponent(product.name)}%20(ID:%20${product.id})" class="btn btn-whatsapp" target="_blank">WhatsApp Us</a>
                <a href="product-detailFurniture.html?id=${product.id}" class="btn btn-sell">Sell This</a>
            </div>
        `;
        productListDiv.appendChild(productCard);
    });
});

/*
    IMPORTANT:
    Replace 'YOUR_PHONE_NUMBER' in the WhatsApp URL with your actual WhatsApp phone number, including the country code (e.g., 91XXXXXXXXXX for India).
    Example: 'https://wa.me/919876543210?text=I%27m%20interested...'
*/