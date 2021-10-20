import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Header from "../../SharedContent/Header";
import {
  ApplicationPageStyle,
  CheckBoxStyle,
  NameAndProfessionInputsStyle,
  ApplicationFormJustification,
} from "../../SharedContent/StyleConfiguration";
import { apiAuthorization, useForm } from "../../SharedContent/Hooks";
import axios from "axios";

const ApplicationFormPage = () => {
  // const [detailsForApplication, setDetailsForApplication] = useState([])
  const pathParams = useParams();

  const { form, inputChange, cleanFields } = useForm({
    name: "",
    age: Number,
    applicationText: "",
    profession: "",
    country: "",
  });

  const applyToTrip = (event) => {
    event.preventDefault();

    const body = {
      name: form.name,
      age: Number(form.age),
      applicationText: form.applicationText,
      profession: form.profession,
      country: form.country,
    };
    console.log(body);

    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${apiAuthorization}/trips/${pathParams.id}/apply`,
        body,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        cleanFields()
        alert(response.data.message);
        

      })
      .catch((error) => {
        console.log("error!", error);
      });
  };

  return (
    <ApplicationPageStyle>
      <Header />
      <form onSubmit={applyToTrip}>
        <NameAndProfessionInputsStyle>
          <main>
            <label>Nome:</label>
            <input
              name="name"
              type="text"
              value={form.name}
              pattern="^[a-zA-Z0-9ãäöüÄÖÜ]*$"
              onChange={inputChange}
              required
            ></input>
          </main>
          <main>
            <label>Profissão:</label>
            <input
              name="profession"
              type="text"
              pattern="^[a-zA-Z0-9äöüÄÖÜ]*$"
              value={form.profession}
              onChange={inputChange}
              required
            ></input>
          </main>
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
            pattern={"/^100|[1-9]?d$/"}
            title="Insert your age in numbers."
            value={form.age}
            onChange={inputChange}
            required
          ></input>
        </CheckBoxStyle>
        <ApplicationFormJustification>
          <h3>Carta de Aplicação:</h3>
          <textarea
            name="applicationText"
            type="text"
            value={form.applicationText}
            onChange={inputChange}
            required
          ></textarea>
        </ApplicationFormJustification>
        <button>Submit</button>
      </form>
    </ApplicationPageStyle>
  );
};

export default ApplicationFormPage;
