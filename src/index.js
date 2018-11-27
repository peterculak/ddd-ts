import MarketplaceDIContainer from './Marketplace/DIContainer';
import AccountNo from './Marketplace/Entity/AccountNo';

const DI = MarketplaceDIContainer.createWithConfig({
    list: '/list'
});

(async function (DI) {
    let marketplaces = DI.getMarketplaceService();

    for (let marketplace of await marketplaces.findMarketplacesByAccountNumber(AccountNo.create('12346'))) {
        console.log(marketplace);
    }

    console.log('Done');

})(DI);
