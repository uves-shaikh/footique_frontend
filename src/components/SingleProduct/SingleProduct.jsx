import { useState, useContext } from 'react'
import './SingleProduct.scss'
import RelatedProducts from './RelatedProducts/RelatedProducts'
import { BsFacebook, BsTwitter, BsInstagram, BsFillCartPlusFill } from 'react-icons/bs'
import { CiLinkedin } from 'react-icons/ci'
import { FaPinterestP } from 'react-icons/fa'

import useFetch from "../../hooks/useFetch"
import { useParams } from 'react-router-dom'
import { Context } from '../../utils/context'
import { singleProducts } from '../../constant/singleProduct'

const SingleProduct = () => {

    const [quantity, setQuantity] = useState(1)

    const { id } = useParams()
    // const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`)
    const { handleAddToCart } = useContext(Context)

    const data = singleProducts

    console.log(data);

    const increment = () => {
        setQuantity((prevState) => {
            if (prevState === 20) return 1
            return prevState + 1
        })
    }

    const decrement = () => {
        setQuantity((prevState) => {
            if (prevState === 1) return 1
            return prevState - 1
        })
    }

    if (!data) return;

    const product = data?.data[0]?.attributes

    return (
        <div className='single-product-main-content'>
            <div className="layout">
                <div className="single-product-page">
                    <div className="left">
                        <img src={product?.img?.data[0]?.attributes?.url} alt="" />
                    </div>
                    <div className="right">
                        <span className="name">{product?.title} </span>
                        <span className="price">&#8377;{product?.price} </span>
                        <span className="desc">{product?.desc} </span>

                        <div className="cart-buttons">
                            <div className="quentity-buttons">
                                <span onClick={decrement}>-</span>
                                <span> {quantity} </span>
                                <span onClick={increment}>+</span>
                            </div>
                            <button className='add-to-cart-button' onClick={() => {
                                handleAddToCart(data?.data[0], quantity)
                                setQuantity(1)
                            }} >
                                <BsFillCartPlusFill size={20} />
                                ADD TO CART
                            </button>
                        </div>

                        <span className='divider' />

                        <div className="info-item">
                            <span className="text-bold">
                                Category :{" "}
                                <span>{
                                    product?.categories?.data[0]?.attributes?.title
                                }</span>
                            </span>
                            <span className="text-bold">
                                Share :
                                <span className='social-icons'>
                                    <BsFacebook size={16} />
                                    <BsTwitter size={16} />
                                    <BsInstagram size={16} />
                                    <CiLinkedin size={16} />
                                    <FaPinterestP size={16} />
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <RelatedProducts productId={id} categoryId={product?.categories?.data[0]?.id} />
            </div>
        </div>
    );
};

export default SingleProduct;