import products from "../data/data";

function getItems(idCategory) {
return new Promise((resolve) => {
    if (idCategory === undefined) {
    setTimeout(() => {
        resolve(products);
    }, 100);
    } else {
    setTimeout(() => {
        let itemsRequested = products.filter(
        (Item) => Item.category === idCategory
        );
        resolve(itemsRequested);
    }, 100);
    }
});
}

export function getSingleItem(idParam) {
return new Promise((resolve, reject) => {
    let itemRequested = products.find((Item) => Item.id === Number(idParam));

    if (itemRequested === undefined) reject("Item no encontrado");

    setTimeout(() => {
    resolve(itemRequested);
    }, 2000);
});
}

export default getItems;