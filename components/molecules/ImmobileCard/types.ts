export interface ImmobileCardProps {
  id: string;
  image: string;
  priceInCents: number;
  type?: "rent" | "sale";
  title: string;
  address: string;
  bedroomsCount: number;
  bathroomsCount: number;
  areaSize: number | string;
  size: "normal" | "small";
}
