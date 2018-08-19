import MarketplaceDIContainer from './Marketplace/DIContainer';
import AccountNo from './Marketplace/Entity/AccountNo';

const DI = MarketplaceDIContainer.createWithConfig({
    list: '/list'
});

(async function () {
    let marketplaces = DI.getMarketplaceService();
    let collection = await marketplaces.findMarketplacesByAccountNumber(AccountNo.create('12346'));

    for (let marketplace of collection) {
        console.log(marketplace);
    }

    console.log('Done');

})();
