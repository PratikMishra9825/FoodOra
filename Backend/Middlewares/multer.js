import multer from "multer"; //middleware for handling multipart/form-data, primarily used for uploading files

//configure storage for uploaded files

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    //specify the destination directory for uploaded files

    cb(null, "/public");
  },
  filename: (req, file, cb) => {
    //specify the filename for uploaded files

    cb(null, file.originalname);
  },
});

export const upload = multer({ storage });
