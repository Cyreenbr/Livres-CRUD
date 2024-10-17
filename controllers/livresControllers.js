import Livre from "../models/Livre.js";

//afficher tout les livres
export const fetchLivres = async (req, res) => {
  const livres = await Livre.find();
  res.status(200).json({ model: livres, message: "success" });
};

//afficher un seul livre
export const fetchLivre = async (req, res) => {
  console.log(req.params);
  const livre = await Livre.findById(req.params.id);
  res.status(200).json({ model: livre, message: "success" });
};

//ajouter un livre
export const addLivre = async (req, res) => {
  console.log(req.body);
  const livre = new Livre(req.body);
  await livre.save();
  res.status(200).json({ model: livre, message: "success" });
};

//modifier un livre
export const updateLivre = async (req, res) => {
  console.log(req.body);
  await Livre.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
  res.status(200).json({ message: "success" });
};

//supprimer un livre
export const deleteLivre = async (req, res) => {
  await Livre.deleteOne({ _id: req.params.id });
  res.status(200).json({ message: "success" });
};
