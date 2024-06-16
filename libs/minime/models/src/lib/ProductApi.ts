export interface ProductApi {
  id: number;
  title: string;
  handle: string;
  description: string;
  published_at: string;
  created_at: string;
  vendor: string;
  tags: string[];
  price: number;
  price_min: number;
  price_max: number;
  available: boolean;
  variants: ProductVariantApi[];
  images: string[];
  featured_image: string;
  content: string;
}

interface ProductVariantApi {
  id: number;
  title: string;
  option1: string;
  option2: string;
  option3: string;
  sku: string;
  name: string;
  public_title: string;
  price: number;
  weight: number;
}
