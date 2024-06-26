import ratedOld from "../imgs/eu_18.png";

interface AppTitleProps {
  name: string;
  author: string;
}

export default function AppTitle({ name, author }: AppTitleProps) {
  return (
    <div className="main app-width">
      <div className="main__application-title">
        <div className="main__application-title__logo">
          <img
            src="http://dummyimage.com/72"
            className="main__application-title__logo-image"
            alt="logo application"
          />
        </div>
        <div className="main__application-title__info">
          <p className="main__application-title__info-header">{name}</p>
          <div className="main__application-title__info-developer-container">
            <p className="main__application-title__info-developer">{author}</p>
            <p className="main__application-title__info-other">
              Contains ads · In-app purchases
            </p>
          </div>
        </div>
      </div>

      <div className="app-title__additional">
        <div className="app-title__additional-container app-title__additional-reviews">
          <p className="app-title__additional-reviews-stars app-title__additional-top_heading">
            4.8★
          </p>
          <p className="app-title__info-other">8K reviews</p>
        </div>
        <div className="app-title__additional-container app-title__additional-downloads">
          <p className="app-title__additional-downloads-count app-title__additional-top_heading">
            100K+
          </p>
          <p className="app-title__info-other">Downloads</p>
        </div>
        <div className="app-title__additional-container app-title__additional-rated">
          <img
            src={ratedOld}
            alt=""
            className="app-title__additional-rated-image"
          />
          <p className="app-title__info-other">Rated for 18+</p>
        </div>
      </div>

      <div className="app-title__install-container">

        <div className="app-title__install__btn-container">
          <button className="app-title__instal-btn">
            Install
          </button>
        </div>

        <div className="app-title__wishlist__btn-container">
            <button className="app-title__wishlist__btn-btn">
              <span
                className="app-title__wishlist__icon-container"
                aria-hidden="true"
              >
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="M7 3H17C18.1045 3 19 3.8955 19 5V21L12 18L5 21L5.01075 5C5.01075 3.8955 5.8965 3 7 3ZM12 15.824L17 18V5H7V18L12 15.824ZM13 7V9H15V11H13V13H11V11H9V9H11V7H13Z"></path>
                </svg>
              </span>
              <span
                className="app-title__wishlist__text-container"
                aria-hidden="true"
              >
                Add to wishlist
              </span>
            </button>
        </div>
      </div>
    </div>
  );
}
