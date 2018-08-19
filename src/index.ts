import MarketplaceDIContainer from './Marketplace/DIContainer';
import AccountNo from './Marketplace/Entity/AccountNo';

const DI = MarketplaceDIContainer.createWithConfig({
    list: '/list'
});

(async function () {
    let marketplaces = DI.getMarketplaceService();
    let collection = await marketplaces.findMarketplacesByAccountNumber(AccountNo.create('12346'));

    let result = collection.next();
    while (!result.done) {
        console.log(result.value);
        result = collection.next();
    }

    console.log('Done');

})();
