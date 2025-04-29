

const supportedTypes = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif'];

export const fileCheck = (req, res, next) => {
  const file = req.files?.image;

  if (file) {

    if (supportedTypes.includes(file.mimetype)) {
      file.mv(`./uploads/${file.name}`, (err) => {
        if (err) return res.status(400).json({ message: `${err}` });
        next();
      });

    } else {
      return res.status(400).json({ message: 'please provide valid image file' });
    }



  } else {
    return res.status(400).json({ message: 'please provide image file' });
  }

}