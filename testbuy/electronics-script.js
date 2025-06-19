document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
                    id: 1,
                    name: 'Latest Smartphone X',
                    description: 'A powerful smartphone with a stunning OLED display, advanced camera system, and long-lasting battery. Experience lightning-fast performance and seamless multitasking.',
                    price: '₹45,999',
                    image: 'logo.png'// Placeholder image
                },
                {
                    id: 2,
                    name: 'Noise-Cancelling Headphones Pro',
                    description: 'Immersive sound with industry-leading active noise cancellation. Enjoy crystal-clear audio and comfortable earcups for hours of listening pleasure. Perfect for travel and focus.',
                    price: '₹12,499',
                    image: 'logo.png'
                },
                {
                    id: 3,
                    name: 'Smartwatch Series 5',
                    description: 'Track your steps, heart rate, sleep, and calories burned with precision. Syncs with your smartphone for detailed health insights and smart notifications. Water-resistant design.',
                    price: '₹7,999',
                    image: 'https://via.placeholder.com/200x200/007bff/ffffff?text=Smartwatch'
                },
                {
                    id: 4,
                    name: 'Portable Power Bank 20000mAh',
                    description: 'Keep your devices charged on the go with this high-capacity power bank. Fast charging technology and multiple ports for convenience. Sleek and durable design.',
                    price: '₹1,899',
                    image: 'https://via.placeholder.com/200x200/007bff/ffffff?text=Power+Bank'
                },
                {
                    id: 5,
                    name: '4K Ultra HD Smart TV',
                    description: 'Experience breathtaking visuals with vivid colors and incredible detail. Smart features allow you to stream your favorite content effortlessly. Immersive viewing experience.',
                    price: '₹65,000',
                    image: 'https://via.placeholder.com/200x200/007bff/ffffff?text=Smart+TV'
                },
                {
                    id: 6,
                    name: 'Gaming Laptop Xtreme',
                    description: 'Unleash your gaming potential with this high-performance laptop. Featuring a powerful processor, dedicated graphics, and a fast refresh rate display. Designed for serious gamers.',
                    price: '₹89,999',
                    image: 'https://via.placeholder.com/200x200/007bff/ffffff?text=Gaming+Laptop'
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
                <a href="product-detailElectronics.html?id=${product.id}" class="btn btn-sell">Sell This</a>
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