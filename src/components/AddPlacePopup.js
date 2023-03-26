import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm";

export default function AddPlacePopup({ isOpen, onClose, onAddPlaceSubmit }) {
  const [newPlaceCaption, setNewPlaceCaption] = useState("");
  const [newPlace, setNewPlace] = useState("");
  const [newPlaceCaptionError, setNewPlaceCaptionError] = useState("");
  const [newPlaceError, setNewPlaceError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newPlaceCaption.length < 2 || newPlaceCaption.length > 30) {
      setNewPlaceCaptionError("Title must be between 2 and 30 characters");
      return;
    }
    if (!newPlace.startsWith("http")) {
      setNewPlaceError("Please enter a valid URL");
      return;
    }
    onAddPlaceSubmit({ newPlaceCaption, newPlace });
    setNewPlace("");
    setNewPlaceCaption("");
  }

  function handleNewPlaceCaptionChange(e) {
    setNewPlaceCaption(e.target.value);
    setNewPlaceCaptionError("");
  }

  function handleNewPlaceChange(e) {
    setNewPlace(e.target.value);
    setNewPlaceError("");
  }

  return (
    <PopupWithForm
      title="Nuevo lugar"
      submitText="Guardar"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      inputs={[
        {
          type: "text",
          placeholder: "Título",
          name: "newPlaceCaption",
          id: "popup__input_new-place-title",
          minLength: "2",
          maxLength: "30",
          onChange: handleNewPlaceCaptionChange,
          value: newPlaceCaption,
          error: newPlaceCaptionError,
        },

        {
          type: "url",
          placeholder: "Enlace a la imagen",
          name: "newPlace",
          id: "popup__input_new-place-pic",
          onChange: handleNewPlaceChange,
          value: newPlace,
          error: newPlaceError,
        },
      ]}
    />
  );
}
