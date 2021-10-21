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

const CreateTripPage = () => {
  const history = useHistory();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token === null) {
      history.push("/login");
    }
  }, [history]);

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
console.log('23')
  return (
    <ApplicationPageStyle>
      <Header />
      <form onSubmit={applyToTrip}>
        <NameAndProfessionInputsStyle>
          <main>
            <label>Name:</label>
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
            <label>Planeta:</label>
            <input
              name="planet"
              type="text"
              pattern="^[a-zA-Z0-9ãäöüÄÖÜ]*$"
              value={form.planet}
              onChange={inputChange}
              required
            ></input>
          </main>
        </NameAndProfessionInputsStyle>
        <CheckBoxStyle>
          <label>Date:</label>
          <input
            name="date"
            type="date"
            value={form.date}
            onChange={inputChange}
            required
          ></input>
          <label>Duration in days:</label>
          <input
            name="durationInDays"
            type="number"
            min="1"
            max="700"
            pattern={"/^700|[1-9]?d$/"}
            title="Insert the number of days that the trip will take."
            value={form.durationInDays}
            onChange={inputChange}
            required
          ></input>
        </CheckBoxStyle>
        <button>Submit</button>
      </form>
    </ApplicationPageStyle>
  );
};

export default CreateTripPage;
