import Marketplace from './Marketplace/Marketplace';
import MarketplaceCollection from './Marketplace/MarketplaceCollection';

let collection = MarketplaceCollection.fromArray(
    [
        Marketplace.create('Marketplace 1'),
        Marketplace.create('Marketplace 2')
    ]
);
