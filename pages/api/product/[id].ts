import data from "./data.json";

export function getProductById() {
  return data;
}

export default function handler(req: any, res: any) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  } else {
    const product = getProductById();
    res.status(200).json(product);
  }
}
