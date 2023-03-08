import avatar from "../images/avatar.png";

function Main() {
  function handleEditAvatarClick() {
    const popupAvatar = document.querySelector("#popupAvatar");
    popupAvatar.classList.add("popup-container_show");
  }

  function handleEditProfileClick() {
    const profilePopup = document.querySelector("#profilePopup");
    profilePopup.classList.add("popup-container_show");
  }
  function handleAddPlaceClick() {}

  return (
    <main className="content">
      <div id="popupAvatar" className="popup-container">
        <button
          id="closeAvatar"
          className="popup-container__close-popup"
        ></button>
        <form
          id="formAvatar"
          action=""
          className="popup popup_avatar"
          name="edit-avatar"
          noValidate
        >
          <h4 className="popup__title-popup">Cambiar foto de perfil</h4>
          <fieldset className="popup__fieldset">
            <div className="popup__field">
              <input
                id="profileAvatar"
                className="popup__input-popup"
                type="url"
                placeholder="Enlace a tu avatar"
                name="avatar"
                required
              />

              <span className="popup__error popup__error_avatar"></span>
            </div>
            <button
              id="saveAvatar"
              type="submit"
              className="popup__button-popup"
            >
              Guardar
            </button>
          </fieldset>
        </form>
      </div>
      <div id="popupDelete" className="popup-container">
        <button
          id="closeDelete"
          className="popup-container__close-popup"
        ></button>
        <form
          id="formDelete"
          action=""
          className="popup popup_question"
          name="delete-card"
          noValidate
        >
          <h4 className="popup__title-popup">¿Estás seguro?</h4>
          <input
            type="hidden"
            name="card_id"
            className="popup__input-popup popup__hidden"
          />
          <fieldset className="popup__fieldset">
            <button
              id="saveDelete"
              type="submit"
              className="popup__button-popup"
            >
              Si
            </button>
          </fieldset>
        </form>
      </div>

      <div id="profilePopup" className="popup-container">
        <button id="close" className="popup-container__close-popup"></button>
        <form
          id="form"
          action=""
          className="popup"
          name="edit-profile"
          noValidate
        >
          <h4 className="popup__title-popup">Edit profile</h4>
          <fieldset className="popup__fieldset">
            <div className="popup__field">
              <input
                id="profileTitle"
                className="popup__input-popup"
                type="text"
                placeholder="Nombre"
                name="name"
                required
                minLength="2"
                maxLength="40"
              />

              <span className="popup__error popup__error_name"></span>
            </div>

            <div className="popup__field">
              <input
                id="profileSubtitle"
                className="popup__input-popup"
                type="text"
                placeholder="Acerca de mí"
                name="about"
                required
                minLength="2"
                maxLength="200"
              />

              <span className="popup__error popup__error_about"></span>
            </div>
            <button id="save" type="submit" className="popup__button-popup">
              Guardar
            </button>
          </fieldset>
        </form>
      </div>
      <div id="popupAddContainer" className="popup-container">
        <button
          id="closeAddPopup"
          className="popup-container__close-popup"
        ></button>
        <form
          id="formAdd"
          action=""
          className="popup"
          name="add-place"
          noValidate
        >
          <h4 className="popup__title-popup">Nuevo lugar</h4>
          <fieldset className="popup__fieldset">
            <div className="popup__field">
              <input
                id="addTitle"
                name="title"
                className="popup__input-popup"
                type="text"
                placeholder="Título"
                required
                minLength="2"
                maxLength="30"
              />

              <span className="popup__error popup__error_title"></span>
            </div>
            <div className="popup__field">
              <input
                id="addImage"
                name="image"
                className="popup__input-popup"
                type="url"
                placeholder="Enlace a la imagen"
                required
              />

              <span className="popup__error popup__error_image"></span>
            </div>
            <button
              id="createButton"
              type="submit"
              className="popup__button-popup"
            >
              Crear
            </button>
          </fieldset>
        </form>
      </div>

      <div id="popupImage" className="popup-container">
        <div className="image-container">
          <button
            id="closeImagePopup"
            className="popup-container__close-popup popup-container__close-popup_image"
          ></button>
          <img src=" " alt="" className="image-container__image-popup" />
          <p className="image-container__text-image"></p>
        </div>
      </div>
      <div className="profile">
        <div className="profile__info">
          <div className="profile__avatar-container">
            <img src={avatar} alt="avatar" className="profile__avatar" />
            <div
              onClick={handleEditAvatarClick}
              className="profile__avatar-opacity"
            >
              <button className="profile__avatar-edit"></button>
            </div>
          </div>
          <div className="profile__intro">
            <h1 className="profile__title">Jacques Cousteau</h1>
            <button
              onClick={handleEditProfileClick}
              id="open-edit-button"
              className="profile__edit-button"
            ></button>
            <h2 className="profile__subtitle">Explorador</h2>
          </div>
        </div>
        <button id="open-add-button" className="profile__add-button"></button>
      </div>

      <div className="cards"></div>
    </main>
  );
}

export default Main;
