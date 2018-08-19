import MapperInterface from "./MapperInterface";
import GenericObject from "../Entity/GenericObject";

/**
 * Maps data from response object to format that Marketplace knows how to create itself from
 */
export default class MarketplaceMapper implements MapperInterface {
    public map(data: GenericObject): { name: string } {
        return { name: data.aws_marketplace_name };
    }
}
