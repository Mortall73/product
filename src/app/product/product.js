export default function product() {
    let products = document.querySelectorAll('.product-list__product');

    if ( products.length > 0) {
        [].forEach.call(products, (product) => {
            product.addEventListener('mouseenter', () => {
                productHover(product);
            });
            product.addEventListener('mouseleave', () => {
                productNotHover(product);
            });
        });
    }

    function productHover(product) {
        let height = Math.ceil(product.offsetHeight);
        product.style.height = `${height}px`;
        product.classList.add('product-list__product--hover')
    }
    
    function productNotHover(product) {
        product.style.height = '';
        product.classList.remove('product-list__product--hover')
    }
};