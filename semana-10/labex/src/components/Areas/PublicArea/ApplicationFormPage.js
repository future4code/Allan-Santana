import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../SharedContent/Header";
import {
  ApplicationPageStyle,
  CheckBoxStyle,
  NameAndProfessionInputsStyle,
  ApplicationFormJustification,
} from "../../SharedContent/StyleConfiguration";
import { useForm } from "../../SharedContent/Hooks";

const ApplicationFormPage = () => {
  const {form, inputChange} = useForm({
    email: "",
    name: "",
    age: "",
    applcationText: "",
    profession: "",
    country: "",
  });

  return (
    <ApplicationPageStyle>
      <Header />
      <form>
        <NameAndProfessionInputsStyle>
          <div>
            <label>Nome:</label>
            <input
              name="name"
              type="text"
              value={form.name}
              pattern="^[a-zA-Z0-9äöüÄÖÜ]*$"
              onChange={inputChange}
              required
            ></input>
          </div>
          <div>
            <label>Profissão:</label>
            <input
              name="profession"
              type="text"
              pattern="^[a-zA-Z0-9äöüÄÖÜ]*$"
              value={form.profession}
              onChange={inputChange}
              required
            ></input>
          </div>
        </NameAndProfessionInputsStyle>
        <CheckBoxStyle>
          <label>País:</label>
          <input
            name="country"
            type="text"
            value={form.country}
            pattern="[A-Z]{3}"
            title="Insert your country code(max 3 letters)"
            onChange={inputChange}
            required
          ></input>
          <label>Idade:</label>
          <input
            name="age"
            type="number"
            min="18"
            max="70"
            pattern={"/^100|[1-9]?\d$/"}
            title="Insert your age in numbers."
            value={form.age}
            onChange={inputChange}
            required
          ></input>
        </CheckBoxStyle>
        <ApplicationFormJustification>
          <h3>Carta de Aplicação:</h3>
          <textarea
            name="applcationText"
            type="text"
            value={form.applcationText}
            onChange={inputChange}
            required
          ></textarea>
        </ApplicationFormJustification>
        <button type="submit">Submit</button>
      </form>
    </ApplicationPageStyle>
  );
};

export default ApplicationFormPage;
