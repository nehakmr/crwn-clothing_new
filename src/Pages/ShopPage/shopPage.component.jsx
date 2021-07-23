import React from 'react';
import SHOP_DATA from './shop_data';
import { CollectionPreview } from '../../Component/CollectionPreview/collectionPreview.component'

class ShopPage extends React.Component {
    constructor() {
        super();

        this.state={
            collections:SHOP_DATA
        }

    }

    render() {
        const {collections} = this.state
        return(
            <div className='shop-page'>
                {
                  collections.map(({id,...othercollectionProps})=>(
                  <CollectionPreview key={id}{...othercollectionProps}/>))
                }    
            </div>

        )
    }
}

export default ShopPage; 