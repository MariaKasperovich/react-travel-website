import "./Cards.css";
import CardItem from "./CardItem";

const cardsData = [
  {
    src: "images/img-9.jpg",
    text: "Explore the hidden waterfall deep inside the Amazon Jungle",
    label: "Adventure",
    path: "/services",
  },
  {
    src: "images/img-2.jpg",
    text: "Travel through the Islands of Bali in a Private Cruise",
    label: "Luxury",
    path: "/services",
  },
  {
    src: "images/img-3.jpg",
    text: "Set Sail in the Atlantic Ocean visiting Uncharted Waters",
    label: "Mystery",
    path: "/services",
  },
  {
    src: "images/img-4.jpg",
    text: "Experience Football on Top of the Himilayan Mountains",
    label: "Adventure",
    path: "/products",
  },
  {
    src: "images/img-8.jpg",
    text: "Ride through the Sahara Desert on a guided camel tour",
    label: "Adrenaline",
    path: "/sign-up",
  },
];

function Cards() {
  return (
    <>
      <div className="cards">
        <h1>Check out these EPIC Destinations!</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            {/* Добавили два ul чтобы карточки располагались в столбик, 2 сверху, 3 снизу */}
            <ul className="cards__items">
              {/* Map для первых 2 карточек */}
              {cardsData.slice(0, 2).map((card) => {
                const { src, text, label, path } = card;
                return (
                  <CardItem src={src} text={text} label={label} path={path} />
                );
              })}
            </ul>
            <ul className="cards__items">
              {/* Map для последних 3 карточек */}
              {cardsData.slice(-3).map((card) => {
                const { src, text, label, path } = card;
                return (
                  <CardItem src={src} text={text} label={label} path={path} />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
