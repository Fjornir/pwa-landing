import star from "../../imgs/star.svg"

export default function Stars() {
  return (
    <div className="rating-data-scores-stars">
      <img className="rating-data-scores-stars__item" src={star} alt="" />
      <img className="rating-data-scores-stars__item" src={star} alt="" />
      <img className="rating-data-scores-stars__item" src={star} alt="" />
      <img className="rating-data-scores-stars__item" src={star} alt="" />
      <img className="rating-data-scores-stars__item" src={star} alt="" />
    </div>
  );
}
