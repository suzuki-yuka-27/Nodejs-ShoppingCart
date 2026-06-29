const products = [
    { id: 1, name: "りんご", price: 120 },
    { id: 2, name: "バナナ", price: 100 },
    { id: 3, name: "オレンジ", price: 150 },
    { id: 4, name: "いちご", price: 200 },
    { id: 5, name: "ぶどう", price: 250 },
];

let cartItems = [];

function renderProducts(products) {
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

function searchProducts(products) {
    $("#search-input").on("input", function () {
        const keyword = toHiragana($(this).val());
        const filteredProducts = products.filter(function (product) {
            return product.name.includes(keyword);
        });
        renderProducts(filteredProducts);
    });
}

searchProducts(products);
renderProducts(products);