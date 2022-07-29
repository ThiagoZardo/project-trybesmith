import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ProductsService from '../services/products.service';

class ProductsController {
  constructor(private productsService = new ProductsService()) {}

  public create = async (req: Request, res: Response) => {
    const product = req.body;
    const productCreated = await this.productsService.create(product);
    res.status(StatusCodes.CREATED).json(productCreated);
  };

  public getAll = async (req: Request, res: Response) => {
    const products = await this.productsService.getAll();
    res.status(StatusCodes.OK).json(products);
  };
}

export default ProductsController;
