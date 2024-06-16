import { ProductApi, CollectionApi } from '@minime-front/models';
import { allProducts, allCollections } from './database';

interface ProductStub {
  [key: string]: ProductApi;
}

const products: ProductStub[] = allProducts();

export const getProductByReference = (productReference: string) => {
  return products
    .filter((productStub) => Object.keys(productStub)[0] === productReference)
    .map((productStub) => productStub[Object.keys(productStub)[0]])[0];
};
export const getAllProducts = () => {
  return products.map(
    (productStub) => productStub[Object.keys(productStub)[0]]
  );
};
const getProductsByTagNames = (tagNames: string[]) => {
  return products
    .map((productStub) => productStub[Object.keys(productStub)[0]])
    .filter((product) => {
      for (const tag of tagNames) {
        if (product.tags.includes(tag)) return true;
      }
      return false;
    });
};

const collections: CollectionApi[] = allCollections();

export const getCollectionByReference = (collectionRef: string) => {
  return collections.find((collection) => collection.handle === collectionRef);
};
export const getAllCollections = () => {
  return collections;
};
export const getProductsByCollection = (collectionRef: string) => {
  const tagNames = getCollectionByReference(collectionRef)?.rules.map(
    (rule) => rule.condition
  );
  if (!tagNames || tagNames.length === 0) return [];
  return getProductsByTagNames(tagNames);
};
