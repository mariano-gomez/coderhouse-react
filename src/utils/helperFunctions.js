import products from '../mocks/products.json';

export const getProducts = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(products);
        }, 2000);
    });
};

export const getProductsByCategory = (category) => {
    return new Promise((res) => {
        setTimeout(() => {
            res(products.filter(prod => prod.category === category));
        }, 2000);
    });
}

export const getProductById = (id) => {
    return new Promise((res) => {
        setTimeout(() => {
            res(products.find(prod => prod.id === parseInt(id)));
        }, 2000);
    });
}

export const getCategories = () => {
    return new Promise((res) => {
        setTimeout(() => {
            const uniqueCategoriesSet = new Set(products.map(product => product.category))
            res([...uniqueCategoriesSet]);
        }, 2000);
    });

}