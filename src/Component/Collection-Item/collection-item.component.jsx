import React from 'react';
import './collection-item.styles.scss';


export const CollectionItem = ({imageUrl,name,price}) => (
    <div className='collection-item'>
        <div style={{
        backgroundImage:`url(${imageUrl})`
         }} className='image'>
        </div> 
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>

        </div>

    </div>
)