interface AppTitleProps {
  name: string;
  author: string;
}

export default function AppTitle({ name, author }: AppTitleProps) {

  return (
    <div className="main">
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
            <p className="main__application-title__info-developer">
             {author}
            </p>
            <p className="main__application-title__info-other">
              Contains ads · In-app purchases
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}