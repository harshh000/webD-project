const menuItems = [
    { id: 1, name: "Margherita Pizza", price: 249, image: "https://picsum.photos/id/20/300/200", category: "pizza" },
    { id: 2, name: "Cheese Burger", price: 179, image: "https://picsum.photos/id/201/300/200", category: "burger" },
    { id: 3, name: "Chicken Fried Rice", price: 220, image: "https://picsum.photos/id/292/300/200", category: "asian" },
    { id: 4, name: "Chocolate Brownie", price: 99, image: "https://picsum.photos/id/431/300/200", category: "dessert" },
    { id: 5, name: "Veg Supreme Pizza", price: 299, image: "https://picsum.photos/id/870/300/200", category: "pizza" }
];

const restaurants = [
    { id: 1, name: "Pizza Palace", rating: 4.5, time: "25-35 min", image: "https://picsum.photos/id/1080/400/250" },
    { id: 2, name: "Burger Barn", rating: 4.3, time: "20-30 min", image: "https://picsum.photos/id/133/400/250" },
    { id: 3, name: "Tasty Asian", rating: 4.7, time: "30-40 min", image: "https://picsum.photos/id/292/400/250" }
];

let cart = [];

function renderMenuItems(items) {
    const container = document.getElementById('menu-grid');
    container.innerHTML = '';
    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'food-card';
        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="food-info">
                <h3>${item.name}</h3>
                <p class="price">₹${item.price}</p>
                <button class="add-to-cart" onclick="addToCart(${item.id})">Add to Cart</button>
            </div>
        `;
        container.appendChild(card);
    });
}

function renderRestaurants() {
    const container = document.getElementById('restaurant-grid');
    container.innerHTML = '';
    restaurants.forEach(rest => {
        const card = document.createElement('div');
        card.className = 'restaurant-card';
        card.innerHTML = `
            <img src="${rest.image}" alt="${rest.name}">
            <div class="restaurant-info">
                <h3>${rest.name}</h3>
                <p>⭐ ${rest.rating} • ${rest.time}</p>
                <button onclick="viewRestaurant(${rest.id})">View Menu</button>
            </div>
        `;
        container.appendChild(card);
    });
}

function addToCart(id) {
    const item = menuItems.find(i => i.id === id);
    if (item) {
        cart.push(item);
        document.getElementById('cart-count').textContent = cart.length;
        alert(`${item.name} added to cart!`);
    }
}

function searchFood() {
    const query = document.getElementById('search-input').value.toLowerCase().trim();
    if (!query) return renderMenuItems(menuItems);
    
    const filtered = menuItems.filter(item => item.name.toLowerCase().includes(query));
    renderMenuItems(filtered.length ? filtered : menuItems);
}

function filterCategory(cat) {
    const filtered = menuItems.filter(item => item.category === cat);
    renderMenuItems(filtered);
}

function renderTestimonials() {
    const container = document.getElementById('testimonial-slider');
    const testimonials = [
        {name: "Rahul Sharma", text: "Best delivery service! Food always hot."},
        {name: "Priya Patel", text: "Love the variety and quick delivery."},
        {name: "Aman Khan", text: "Tracking feature is awesome!"}
    ];
    
    testimonials.forEach(t => {
        const div = document.createElement('div');
        div.className = 'testimonial';
        div.innerHTML = `<p>"${t.text}"</p><strong>- ${t.name}</strong>`;
        container.appendChild(div);
    });
}

function viewRestaurant(id) {
    alert(`Opening menu for restaurant ID ${id} (Demo)`);
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

window.onload = () => {
    renderMenuItems(menuItems);
    renderRestaurants();
    renderTestimonials();
    console.log("%cFoodGo loaded successfully! 👨‍🍳", "color: #e74c3c; font-weight: bold");
};