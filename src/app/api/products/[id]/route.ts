import { NextResponse } from "next/server";
import { getProductById } from "@/data/products";

type ProductParams = {
  id: string;
};

export async function GET(
  _request: Request,
  { params }: { params: Promise<ProductParams> }
) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(product);
}
