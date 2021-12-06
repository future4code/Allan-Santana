export type user = {
  id: string;
  name: string;
  nickname: string;
  email: string;
  address: string;
  logradouro: string;
  bairro: string;
  cidade: string;
  estado: string;
};

export type Address = {
  logradouro: string;
  bairro: string;
  cidade: string;
  estado: string;
};

export type Email = {
  recepientEmail: string;
  subject: string;
  bodyOfTheEmail: string;
};
