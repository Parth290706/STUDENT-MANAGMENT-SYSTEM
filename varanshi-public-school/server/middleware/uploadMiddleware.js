const multer = require("multer");
const path = require("path");
const fs = require("fs");

// =====================================
// Create Uploads Folder
// =====================================
const uploadPath = "uploads";

if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath);
}

// =====================================
// Storage Configuration
// =====================================
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadPath);
  },

  filename: (req, file, cb) => {
    const uniqueName =
      Date.now() +
      "-" +
      Math.round(Math.random() * 1e9) +
      path.extname(file.originalname);

    cb(null, uniqueName);
  },
});

// =====================================
// File Filter
// =====================================
const fileFilter = (req, file, cb) => {
  const allowedExtensions = /jpg|jpeg|png|webp|pdf/;

  const extension = allowedExtensions.test(
    path.extname(file.originalname).toLowerCase()
  );

  const mimeType = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
    "application/pdf",
  ].includes(file.mimetype);

  if (extension && mimeType) {
    cb(null, true);
  } else {
    cb(
      new Error("Only JPG, JPEG, PNG, WEBP and PDF files are allowed.")
    );
  }
};

// =====================================
// Upload Middleware
// =====================================
const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5 MB
  },
});

module.exports = upload;