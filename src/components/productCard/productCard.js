import React from "react";
import ReactCountryFlag from "react-country-flag"
import { useSelector, shallowEqual } from "react-redux";
import { motion } from "framer-motion"

import Counter from "../counter/counter";
import Representation from "../representation/representation";

import productCardStyles from './productCard.module.css'

function ProductCard() {

    const { product } = useSelector((state) => ({ product: state.products[0] }), shallowEqual);

    let total = 0;
    const [rating, setRating] = React.useState(total)


    product.reviews.forEach((el) => {
        total = total + parseInt(el.estimation);
    })

    React.useEffect(() => {
        setRating(total / product.reviews.length)
    }, [])

    function renderRating() {
        const stars = []

        for (let i = 0; i < Math.round(rating); i++) {
            stars.push(<div className={`${productCardStyles.filledStar}`} key={i} />)
        }

        for (let i = 0; i < 5 - Math.round(rating); i++) {
            stars.push(<div className={`${productCardStyles.strokeStar}`} key={Math.round(rating) - i} />)
        }

        return stars;
    }

    return (
        <>
            <div className={`${productCardStyles.block}`}>
                <div className={`${productCardStyles.heading}`}>
                    <div className={`${productCardStyles.heading__preview}`}
                        style={{ backgroundImage: `url(${product.preview_image})` }} />
                    <div className={`${productCardStyles.heading__countdownBanner}`}>
                        <p className={`text text_color_light text_size_h3`}>limited offer</p>
                        <Counter deadline={product.deadline} />
                    </div>
                    <div className={`${productCardStyles.heading__priceBanner}`}>
                        <div>
                            <hr className={`${productCardStyles.heading__line}`} />
                            <p className={`text text_color_light text_size_h2`}>R {product.prev_price}</p>
                        </div>
                        <p className={`text text_color_light text_size_h1`}>R {product.curr_price}</p>
                    </div>
                </div>

                <div className={`${productCardStyles.about}`}>
                    <div className={`${productCardStyles.about__top}`}>
                        <p className={`text text_size_h5`}>{rating > 3.5 ? 'Excellent' : 'Decent'} {rating}/5</p>
                        <div className={`${productCardStyles.about__seller}`}
                            style={{ backgroundImage: `url(${product.seller})` }} />
                        <p className={`text text_size_h5 text_color_highlight`}>best selling</p>
                    </div>

                    <h1 className={`text text_size_h10 text_color_dark ${productCardStyles.about__title}`}>{product.title}</h1>

                    <Representation options={product.options}/>

                    <div className={`${productCardStyles.about__description}`}>
                        <div className={`${productCardStyles.about__descriptionLine}`}>
                            <p className={`text text_size_h6 text_color_dark`}>Fast Delivery:</p>
                            <p className={`text text_size_h7 text_color_dark`}>{product.delivery}</p>
                            <ReactCountryFlag className={`text text_size_h7`} countryCode={product.country.toUpperCase()} svg />
                        </div>
                        <div className={`${productCardStyles.about__descriptionLine}`}>
                            <p className={`text text_size_h6 text_color_dark`}>In Stock:</p>
                            <p className={`text text_size_h7 text_color_dark`}>{product.shipping}</p>
                            <ReactCountryFlag className={`text text_size_h7`} countryCode={product.country.toUpperCase()} svg />
                        </div>
                        <div className={`text text_size_h7 text_color_dark ${productCardStyles.about__rating}`}>
                            {renderRating()} ({product.reviews.length})
                        </div>
                    </div>

                    <div className={`${productCardStyles.select}`}>
                        <div>
                            <h3 className={`text text_size_h8 text_color_dark ${productCardStyles.select__type}`}>color</h3>
                            <select className={`text text_size_h1 text_color_dark ${productCardStyles.select__input}`}>
                                {product.options.map((el, index) => {
                                    return <option key={index} value={index}>{el.color}</option>
                                })}
                            </select>
                        </div>
                        <div>
                            <h3 className={`text text_size_h8 text_color_dark ${productCardStyles.select__type}`}>size</h3>
                            <select className={`text text_size_h1 text_color_dark ${productCardStyles.select__input}`}>
                                {product.sizes.map((el, index) => {
                                    return <option key={index} value={index}>{el}</option>
                                })}
                            </select>
                        </div>
                    </div>

                    <motion.a className={`text text_size_h9 text_color_light ${productCardStyles.orderButton}`}
                        href="https://www.youtube.com/" target="blank"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.9 }}>buy now</motion.a>

                </div>
            </div>
        </>
    );
}

export default ProductCard;