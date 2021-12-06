import axios from "axios";

export let addressConsult: any = async (cep: string) => {
  return await axios
    .get(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response: any) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};
