const ProductItem = (props) => {
    return (
        <article>
            <img src={props.img} alt={props.imgAlt} />
            <p>{props.name}</p>
            <p>{props.price}</p>
            <button>BUY NOW</button>
        </article>
    );
}

export default ProductItem;