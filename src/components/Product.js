import React from 'react'
import {ProductItems} from './ProductItems';

function Product() {
    return (
        <div className="Product">
            <div className="Product__container">
                <div className="Product__items">
                    {ProductItems.map((item, index) => {
                return (
                        <div className="Product__item-box"  key={index}>
                        <img src={item.img} alt={item.alt} className="Product__item-img" />
                        <div className="Product__item-title">{item.title}</div>
                        <div className="Product__item-desc">{item.desc}</div>
                        <div className="Product__item-price">{item.price}</div>
                        <div className='add-to-cart'>+</div>
                        </div>
                );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Product