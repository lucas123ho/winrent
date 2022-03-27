import TextIcon from "components/atoms/TextIcon";
import Link from "next/link";
import React from "react";
import * as S from "./styles";
import { ImmobileCardProps } from "./types";

const ImmobileCard = ({
  id,
  image,
  priceInCents,
  type = "rent",
  title,
  address,
  bedroomsCount,
  bathroomsCount,
  areaSize,
  size = "normal",
}: ImmobileCardProps) => {
  const price = React.useMemo(() => `R$${priceInCents / 100}`, [priceInCents]);

  return (
    <Link href={`/imovel/${id}`} passHref>
      <S.Wrapper size={size}>
        <S.Image src={image} alt={title} size={size} />
        <S.Content size={size}>
          <S.PriceWrapper size={size}>
            <S.Price size={size}>{price}</S.Price>
            {type === "rent" && <span>/mês</span>}
          </S.PriceWrapper>
          <S.Title size={size}>{title}</S.Title>
          <S.Address size={size}>{address}</S.Address>
          <S.Divisor size={size} />
          <S.PropertiesWrapper size={size}>
            <TextIcon size={size} icon="bedroom-outline">
              {bedroomsCount}
            </TextIcon>
            <TextIcon size={size} icon="bathroom-outline">
              {bathroomsCount}
            </TextIcon>
            <TextIcon size={size} icon="area-outline">
              {areaSize}
            </TextIcon>
          </S.PropertiesWrapper>
        </S.Content>
      </S.Wrapper>
    </Link>
  );
};

export default ImmobileCard;
