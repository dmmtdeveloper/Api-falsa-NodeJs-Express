import { faker } from "@faker-js/faker";

const getNewUser = (req, res) => {
  const newUser = {
    newUser: {
      id: faker.number.float(),
      primerNombre: faker.person.firstName(),
      apellido: faker.person.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    },
  };

  // console.log(user);
  res.json(newUser);
};

const getNewCompany = (req, res) => {
  const newCompany = {
    newCompany: {
      id: faker.number.float(),
      name: faker.company.name(),
      dirección: {
        street: faker.location.street(),
        city: faker.location.city(),
        state: faker.location.state(),
        countryCode: faker.location.countryCode(),
        country: faker.location.country(),
      },
    },
  };

  // console.log(company);
  res.json(newCompany);
};

const getNewUserCompany = (req, res) => {
  const newUserCompany = [
    {
      newUser: {
        id: faker.number.float(),
        primerNombre: faker.person.firstName(),
        apellido: faker.person.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
      },
    },

    {
      newCompany: {
        id: faker.number.float(),
        name: faker.company.name(),
        dirección: {
          street: faker.location.street(),
          city: faker.location.city(),
          state: faker.location.state(),
          countryCode: faker.location.countryCode(),
          country: faker.location.country(),
        },
      },
    },
  ];

  // console.log(newUserCompany);
  res.json(newUserCompany);
};

export { getNewUser, getNewCompany, getNewUserCompany };
