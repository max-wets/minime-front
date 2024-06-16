import { Router } from 'express';
import {
  getAllCollections,
  getAllProducts,
  getCollectionByReference,
  getProductByReference,
  getProductsByCollection,
} from './repository';

export const apiRouter = Router()
  .get('/products/all', (_, res) => {
    const completeProductsList = getAllProducts();
    if (completeProductsList.length === 0) res.status(404).end();
    else res.status(200).json(completeProductsList);
  })
  .get('/products/:productReference', (req, res) => {
    const searchByProductReference = getProductByReference(
      req.params.productReference
    );
    if (!searchByProductReference) res.status(404).end();
    else res.status(200).json(searchByProductReference);
  })
  .get('/collections/all', (_, res) => {
    const completeCollectionList = getAllCollections();
    if (completeCollectionList.length === 0) res.status(404).end();
    else res.status(200).json(completeCollectionList);
  })
  .get('/collections/:collectionRef', (req, res) => {
    const searchByCollectionRef = getCollectionByReference(
      req.params.collectionRef
    );
    if (!searchByCollectionRef) res.status(404).end();
    else res.status(200).json(searchByCollectionRef);
  })
  .get('/collections/:collectionRef/products', (req, res) => {
    const searchProductsByCollection = getProductsByCollection(
      req.params.collectionRef
    );
    if (searchProductsByCollection.length === 0) res.status(404).end();
    else res.status(200).json(searchProductsByCollection);
  });
