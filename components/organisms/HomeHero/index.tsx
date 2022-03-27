import Container from "components/atoms/Container";
import HeroTitle from "components/atoms/HeroTitle";
import NumberHero from "components/atoms/NumberHero";
import FilterTab from "components/molecules/FilterTab";
import ImmobileCard from "components/molecules/ImmobileCard";
import BackgroundSVG from "public/assets/images/bg-home-hero.svg";
import * as S from "./styles";

const HomeHero = () => {
  return (
    <S.Wrapper>
      <Container style={{ zIndex: 2 }}>
        <S.TextCardWrapper>
          <S.TextWrapper>
            <HeroTitle>Compre, alugue, ou venda o seu imóvel</HeroTitle>
            <h2>
              Uma grande plataforma para comprar, vender, ou alugar os seus
              imóveis sem qualquer compromisso.
            </h2>
            <S.NumbersWrapper>
              <NumberHero title="50k+" subtitle="inquilinos" />
              <NumberHero title="10k+" subtitle="proprietários" />
            </S.NumbersWrapper>
          </S.TextWrapper>
          <S.CardWrapper>
            <ImmobileCard
              id="d5cbfa5e-370a-40f2-912b-498390d9d124"
              image="/assets/images/immobile1.png"
              priceInCents={270000}
              title="Beverly Springfield"
              address="2821 Lake Sevilla, Palm Harbor, TX"
              bedroomsCount={4}
              bathroomsCount={2}
              areaSize="6x7.5 m²"
              size="normal"
            />
          </S.CardWrapper>
        </S.TextCardWrapper>
        <S.FilterWrapper>
          <FilterTab
            items={[
              {
                key: "rent",
                title: "Aluguel",
                fields: [
                  {
                    key: "location",
                    label: "Localização",
                    defaultValue: "Barcelona, Spain",
                    placeholder: "Escolha uma localização",
                    type: "text",
                    width: "149px",
                  },
                  {
                    key: "date",
                    label: "Quando",
                    type: "date",
                    placeholder: "Selecionar uma data",
                    width: "210px",
                  },
                ],
                onSubmit: (values) => console.log(values),
                submitButtonText: "Procurar",
              },
              {
                key: "buy",
                title: "Compre",
                fields: [
                  {
                    key: "location",
                    label: "Localização",
                    defaultValue: "Barcelona, Spain",
                    placeholder: "Escolha uma localização",
                    type: "text",
                    width: "149px",
                  },
                  {
                    key: "date",
                    label: "Quando",
                    type: "date",
                    placeholder: "Selecionar uma data",
                    width: "210px",
                  },
                  {
                    key: "value",
                    label: "Valor Máximo",
                    defaultValue: "R$ 1.000.000",
                    placeholder: "R$ 1.000",
                    type: "text",
                    width: "149px",
                  },
                ],
                onSubmit: (values) => console.log(values),
                submitButtonText: "Procurar",
              },
              {
                key: "sell",
                title: "Venda",
                fields: [
                  {
                    key: "location",
                    label: "Onde?",
                    placeholder: "Escolha uma localização",
                    type: "text",
                    width: "240px",
                  },
                ],
                onSubmit: (values) => console.log(values),
                submitButtonText: "Vender",
              },
            ]}
          />
        </S.FilterWrapper>
        <S.SmallCardWrapper>
          <ImmobileCard
            id="89a3c4b7-d9ac-49cd-a896-eef4d78aebde"
            image="/assets/images/immobile2.png"
            priceInCents={160000}
            title="Tarpon Bay"
            address="Palm Harbor, TX"
            bedroomsCount={4}
            bathroomsCount={2}
            areaSize="6x8 m²"
            size="small"
          />
        </S.SmallCardWrapper>
      </Container>
      <S.BackgroundWrapper>
        <BackgroundSVG />
      </S.BackgroundWrapper>
    </S.Wrapper>
  );
};

export default HomeHero;
