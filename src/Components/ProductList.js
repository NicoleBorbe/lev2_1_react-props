import ProductItem from "./ProductItem";

const content = [
    {
        img: "https://cdn2.photostockeditor.com/c/0601/bottle-cocooil-baby-oil-on-desk-lotion-lotion-image.jpg",
        imgAlt: "cocooil",
        name: "Cocooil",
        price: "30$"
    },
    {
        img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        imgAlt: "polaroid",
        name: "Polaroid",
        price: "60$"
    },
    {
        img: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        imgAlt: "moisture",
        name: "Maui Moisture",
        price: "60$"
    }
    
]
const ProductList = () => {
    return (
        <>
            {content.map((e) => <ProductItem
                    img={e.img}
                    imgAlt={e.imgAlt}
                    name={e.name}
                    price={e.price}
            />
            )}
      </>
    );
}

export default ProductList;