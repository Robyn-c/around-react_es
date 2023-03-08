function Template() {
  return (
    <template id="card-template">
      <div className="card">
        <button className="card__delete-button"></button>
        <img className="card__img-card" src=" " alt="" />
        <div className="card__card-body">
          <h3 className="card__card-title"></h3>
          <div className="card__like-container">
            <button className="card__card-like"></button>
            <p id="countLikes" className="card__like-counter"></p>
          </div>
        </div>
      </div>
    </template>
  );
}

export default Template;
