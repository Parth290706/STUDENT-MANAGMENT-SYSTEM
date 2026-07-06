const express = require("express");
const router = express.Router();

const {
  getAdmissions,
  getAdmissionById,
  createAdmission,
  updateAdmission,
  deleteAdmission,
} = require("../controllers/admissionController");

router.get("/", getAdmissions);

router.get("/:id", getAdmissionById);

router.post("/", createAdmission);

router.put("/:id", updateAdmission);

router.delete("/:id", deleteAdmission);

module.exports = router;