const getAll = (req, res, next) => {
  const dbInstance = req.app.get("db");

  dbInstance
    .get_houses()
    .then(houses => res.status(200).send(houses))
    .catch(err => {
      res.status(500).send({ errorMessage: "Can't get houses, bro." });
      console.log(err);
    });
};

const getOne = (req, res, next) => {
  const dbInstance = req.app.get("db");
  const { id } = req.params;

  dbInstance
    .get_house(id)
    .then(house => res.status(200).send(house))
    .catch(err => {
      res.status(500).send({ errorMessage: "Can't get the house, bro..." });
      console.log(err);
    });
};

const create = (req, res, next) => {
  const dbInstance = req.app.get("db");
  const {
    name,
    address,
    city,
    istate,
    zipcode,
    image,
    monthly_mortgage,
    amount,
    desired_rent
  } = req.body;

  dbInstance
    .create_house([
      name,
      address,
      city,
      istate,
      zipcode,
      image,
      monthly_mortgage,
      amount,
      desired_rent
    ])
    .then(house => res.status(200).json(house))
    .catch(err => {
      res.status(500).send({ errorMessage: "Can't create the house, bro..." });
      console.log(err);
    });
};

const deleteHouse = (req, res, next) => {
  dbInstance = req.app.get("db");
  const { id } = req.params;

  dbInstance
    .delete_house(id)
    .then(houses => res.status(200).json(houses))
    .catch(err => {
      res.status(500).send({ errorMessage: "Can't delete item, bro..." });
      console.log(err);
    });
};

module.exports = {
  getAll,
  getOne,
  create,
  deleteHouse
};
