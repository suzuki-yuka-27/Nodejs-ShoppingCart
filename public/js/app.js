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

    products.forEach(product => {
        $("#product-list").append(`
            <div class="product-card">
                <p>${product.name}</p>
                <p>${product.price}円</p>
                <button class="add-cart-button" data-id="${product.id}">カートに追加</button>
            </div>
        `);
    });
}

renderProducts(products);