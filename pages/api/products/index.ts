import type {NextApiRequest, NextApiResponse} from "next";
import {db, SHOPSE_CONSTANTS} from "../../../database";
import {IProduct} from "../../../interfaces";
import {Product} from "../../../models";

type Data = {message: string} | IProduct[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  switch (req.method) {
    case "GET":
      return getProducts(req, res);
    default:
      return res.status(400).json({message: "Bad request"});
  }
}
const getProducts = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const {gender = "all"} = req.query;

  let condition = {};

  if (gender !== "all" && SHOPSE_CONSTANTS.validGenders.includes(`${gender}`)) {
    condition = {gender};
  }

  // if (
  //   category !== "all" &&
  //   SHOPSE_CONSTANTS.valirCategories.includes(`${category}`)
  // ) {
  //   condition = {category};
  // }

  await db.connect();
  const products = await Product.find(condition)
    .select("title category images price inStock slug -_id")
    .lean();

  await db.disconnect();

  return res.status(200).json(products);
};
