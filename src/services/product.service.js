

export default class productService {}

export function GetProductFromBarcode(barcode) {
    return new Promise((resolve) => {
        setTimeout(() => resolve({product: {barcode: barcode, itemType: "thing",  itemId: Math.random()}}), 500);
    })
}