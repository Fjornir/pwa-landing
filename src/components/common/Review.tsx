import Stars from "./Stars";
import points from "../../imgs/points.svg";

interface ReviewsPrototypeDataType {
  reviewPrototype: {
    photo: string;
    name: string;
    score: string;
    scoreDate: string;
    review: string;
  };
}

export default function Review({ reviewPrototype }: ReviewsPrototypeDataType) {
  return (
    <div className="review">
      <div className="review-profile">
        <div className="review-profile-wrapper">
          <img
            className="review-profile__image"
            src={reviewPrototype.photo}
            alt=""
          ></img>
          <div className="review-profile__title">{reviewPrototype.name}</div>
        </div>
        <button className="review-profile-button">
          <img className="review-profile-button__img" src={points} alt=""></img>
        </button>
      </div>
      <div>
        <Stars width={12}></Stars>
        <div>March 6, 2024</div>
      </div>
      <p>{reviewPrototype.review}</p>
    </div>
  );
}
