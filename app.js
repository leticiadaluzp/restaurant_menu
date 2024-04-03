 //items
 const menu = [
    {
        id: 1,
        title: "Burger with fries",
        category: "main-courses",
        price: 20,
        img: "burger.jpg",
        description: "Indulge in our classic burger crafted with premium beef patty, topped with fresh lettuce, ripe tomatoes, and melted cheese, all nestled between soft brioche buns. Served with a generous portion of crispy golden fries, it's the ultimate comfort food experience."
    },
    {
        id: 2,
        title: "Steak",
        category: "main-courses",
        price: 30,
        img: "steak.jpg",
        description: "Savor the succulence of our tender, juicy steak, grilled to perfection and seasoned to enhance its natural flavors. Choose your side: accompany it with a crisp, garden-fresh salad dressed in your choice of vinaigrette, or indulge in our golden, crispy fries for a truly satisfying meal."
    },
    {
        id: 3,
        title: "Risotto",
        category: "main-courses",
        price: 25,
        img: "risotto.jpg",
        description: "Transport your taste buds to Italy with our creamy and flavorful risotto, delicately cooked to achieve the perfect balance of texture and taste. Bursting with the richness of Arborio rice, Parmesan cheese, and a medley of seasonal vegetables, each bite is a culinary delight that's sure to leave you craving for more."
    },
    {
        id: 4,
        title: "Pasta",
        category: "main-courses",
        price: 35,
        img: "pasta.jpg",
        description: "Experience the essence of Italian cuisine with our exquisite pasta dishes, expertly prepared using the finest ingredients and traditional recipes. Whether you prefer the timeless simplicity of spaghetti aglio e olio, the hearty comfort of lasagna layered with savory sauce and melted cheese, or the creamy indulgence of fettuccine Alfredo, our pasta selections promise a culinary journey that's as comforting as it is delicious."
    },
    {
        id: 5,
        title: "Brownie with Ice Cream",
        category: "desserts",
        price: 15,
        img: "brownie.jpg",
        description: "Indulge in the ultimate dessert experience with our decadent brownie served warm and gooey, paired perfectly with a scoop of creamy vanilla ice cream. The rich, fudgy brownie melts in your mouth, while the cold, velvety ice cream adds a delightful contrast, creating a harmonious blend of flavors and textures that will satisfy your sweet cravings."
    },
    {
        id: 6,
        title: "Tiramisu",
        category: "desserts",
        price: 12,
        img: "tiramisu.jpg",
        description: "Transport yourself to the streets of Italy with our authentic tiramisu, a classic Italian dessert that's as rich in history as it is in flavor. Layers of delicate ladyfinger biscuits soaked in espresso and layered with creamy mascarpone cheese, dusted with cocoa powder for the perfect finishing touch. Each bite is a heavenly combination of coffee-infused bliss and velvety smoothness."
    },
    {
        id: 7,
        title: "Cakes",
        category: "desserts",
        price: 15,
        img: "cakes.jpg",
        description: "Indulge in our delightful array of cakes, each crafted with love and attention to detail. From rich chocolate ganache to tangy lemon drizzle, our selection offers something for every palate. Whether you crave the comforting sweetness of a classic red velvet or the refreshing zing of a fruit-filled sponge, our cakes are sure to satisfy your dessert desires."
    },
    {
        id: 8,
        title: "Fresh Fruit Juices",
        category: "drinks",
        price: 10,
        img: "juices.jpg",
        description: "Quench your thirst with our refreshing selection of fresh fruit juices, bursting with vibrant flavors and natural goodness. From zesty orange to sweet watermelon and tangy pineapple, each sip is a taste of pure sunshine. Made from the finest handpicked fruits, our juices are the perfect way to rejuvenate and hydrate, whether enjoyed alone or paired with your favorite meal."
    },
    {
        id: 9,
        title: "Cocktails",
        category: "drinks",
        price: 15,
        img: "cocktails.jpg",
        description: "Elevate your evening with our handcrafted cocktails, expertly mixed to perfection by our skilled bartenders. From timeless classics like the Mojito and Margarita to innovative concoctions tailored to suit every taste, our cocktail menu promises a journey of flavors and sensations. Whether you prefer something sweet and fruity or bold and adventurous, our cocktails are sure to delight and inspire."
    },
    {
        id: 10,
        title: "Milkshakes",
        category: "drinks",
        price: 12,
        img: "milkshakes.jpg",
        description: "Treat yourself to the creamy indulgence of our milkshakes, made with premium ice cream and fresh milk for a luscious, velvety texture. From classic flavors like chocolate and vanilla to indulgent creations loaded with cookies, candies, and sauces, our milkshakes are the ultimate guilty pleasure. Sip and savor the nostalgia of childhood or indulge your inner sweet tooth with our irresistible milkshake selection."
    }
 ];

// Almacena una copia de seguridad de todos los elementos del menú original
const allMenuItems = menu.slice();

// Seleccionar los botones de filtro
const filterButtons = document.querySelectorAll('.filter-btn');

// Agregar un evento de clic a cada botón
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Obtener la categoría del botón seleccionado
        const category = button.dataset.category;

        // Filtrar los elementos del menú por categoría
        let filteredMenu = [];
        if (category === 'all') {
            filteredMenu = allMenuItems ;
        } else {
            filteredMenu = menu.filter(item => item.category === category);
        }

        // Llamar a una función para actualizar la presentación de los elementos del menú en el DOM
        updateMenu(filteredMenu);
    });
});

function updateMenu(menuItems) {
    const menuContainer = document.querySelector('.section-center');
    // Limpiar los elementos existentes del menú
    const menuItemsDOM = menuContainer.querySelectorAll('.menu-item');
    menuItemsDOM.forEach(item => {
        item.remove();
    });

    // Iterar sobre los elementos filtrados del menú y crear el HTML correspondiente para cada uno
    menuItems.forEach(item => {
        const menuItemHTML = `
            <article class="menu-item" data-category="${item.category}">
                <img src="${item.img}" class="photo" alt="${item.title}">
                <div class="item-info">
                    <header>
                        <h4>${item.title}</h4>
                    </header>
                    <button class="modal-btn">Price and Details Here!</button>
                    <div class="modal">
                        <div class="modal-content">
                            <span class="closeModal">&times;</span>
                            <h2 class="price">$${item.price}</h2>
                            <p class="item-text">${item.description}</p>
                        </div>
                    </div>
                </div>
            </article>
        `;

        // Agregar el HTML del elemento del menú al contenedor del menú
        menuContainer.insertAdjacentHTML('beforeend', menuItemHTML);
    });
}

// Event listener para abrir los modales
document.addEventListener('click', function(event) {
    const modalBtn = event.target.closest('.modal-btn');
    if (modalBtn) {
        const modal = modalBtn.parentElement.querySelector('.modal');
        modal.style.display = 'flex';
    }
});

// Event listener para cerrar los modales haciendo clic en la "X"
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('closeModal')) {
        const modal = event.target.closest('.modal');
        modal.style.display = 'none';
    }
});

// Event listener para cerrar los modales haciendo clic fuera de ellos
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});

//MODALES

// Agregar evento de clic para abrir el modal
document.querySelectorAll('.modal-btn').forEach(button => {
    button.addEventListener('click', function() {
        const modal = this.parentElement.querySelector('.modal');
        modal.style.display = 'flex';
    });
});

// Agregar evento de clic para cerrar el modal
document.querySelectorAll('.closeModal').forEach(button => {
    button.addEventListener('click', function() {
        const modal = this.parentElement.parentElement;
        modal.style.display = 'none';
    });
});

// Agregar evento de clic para cerrar el modal haciendo clic fuera de él
window.addEventListener('click', function(event) {
    document.querySelectorAll('.modal').forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});


