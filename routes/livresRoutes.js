import express from "express";
import {
  fetchLivres,
  fetchLivre,
  addLivre,
  updateLivre,
  deleteLivre,
} from "../controllers/livre.js";

const router = express.Router();

//afficher tout les livres
router.get("/", fetchLivres);
//afficher un livre
router.get("/:id", fetchLivre);
//ajouter un livre
router.post("/", addLivre);
//mettre à jour un livre
router.put("/:id", updateLivre);
//supprimer un livre
router.delete("/:id", deleteLivre);

export default router;
