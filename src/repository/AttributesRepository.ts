import {AbstractRepository} from "./AbstractRepository";
import Attributes from "../models/Attributes"

class AttributesRepository extends AbstractRepository<Attributes> {
    constructor () {
        super("attributes")
    };
};

export default AttributesRepository