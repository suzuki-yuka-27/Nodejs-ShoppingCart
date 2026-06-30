const products = [
    { id: 1, name: "りんご", price: 120 },
    { id: 2, name: "バナナ", price: 100 },
    { id: 3, name: "オレンジ", price: 150 },
    { id: 4, name: "いちご", price: 200 },
    { id: 5, name: "ぶどう", price: 250 },
];

let cartItems = [];

function renderProducts(productList) {
    $("#product-list").empty();

    productList.forEach(product => {
        $("#product-list").append(`
            <div class="product-card">
                <p>${product.name}</p>
                <p>${product.price}円</p>
                <button class="add-cart-button" data-id="${product.id}">カートに追加</button>
            </div>
        `);
    });
}

function searchProducts(productList) {
    $("#search-input").on("input", function () {
        const keyword = $(this).val();
        const filteredProducts = productList.filter(function (product) {
            return product.name.includes(keyword);
        });
        renderProducts(filteredProducts);
    });
}

$(document).on("click", ".add-cart-button", function () {
    const productId = Number($(this).data("id"));
    addCart(productId);
});

function renderCart(cartList) {
    $("#cart-list").empty();

    cartList.forEach(cart => {
        $("#cart-list").append(`
            <div class="cart-card">
                <p>${cart.name}</p>
                <p>${cart.price}円</p>
                <p>${cart.quantity}個</p>
                <input class="product-quantity-input" type="number" data-id="${cart.id}">
                <button class="product-quantity-button" data-id="${cart.id}">更新</button>
            </div>
        `);
    });
}

function addCart(productId) {
    const product = products.find(function (product) {
        return product.id === productId;
    });

    product.quantity = 1;
    cartItems.push(product);

    renderCart(cartItems);
}

$(document).on("click", ".product-quantity-button", function () {
    const cartId = Number($(this).data("id"));
    updateQuantity(cartId);
});

function updateQuantity(cartId) {
    const cartItem = cartItems.find(function (item) {
        return item.id === cartId;
    })

    cartItem.quantity = $(".product-quantity-input").val();

    renderCart(cartItems);
}

searchProducts(products);
renderProducts(products);