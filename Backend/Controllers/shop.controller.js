import Shop from "../Models/shop.models";
import uploadOnCloudinary from "../utils/cloudinary";

export const createEditShop = async (req, res) => {
  try {
    const { name, address, city, state } = req.body;
    let image;
    if (req.file) {
      // if there is a file in the request from frontend
      image = await uploadOnCloudinary(req.file.path); // upload the f
      //ile to cloudinary and get the url
    }
    let shop = await Shop.findOne({ owner: req.userId }); // check if the user already has a shop
    if (!shop) {
      const shop = await Shop.create({
        name,
        city,
        state,
        address,
        image,
        owner: req.userId,
      });
    } else {
      shop = await shop.findByIdAndUpdate(
        shop._id,
        {
          name,
          city,
          state,
          address,
          image,
          owner: req.userId,
        },
        { new: true }
      ); // new: true means return the updated shop
    }

    await shop.populate("owner"); // await shop.populate("owner") का मतलब है कि owner फील्ड में सिर्फ user की ID थी, लेकिन अब वह पूरी user की जानकारी (जैसे नाम, ईमेल आदि) से भर जाएगी।
    // इससे जब आप shop का डेटा भेजते हैं, तो उसमें owner की पूरी डिटेल्स मिलती हैं, सिर्फ उसकी ID नहीं।

    return res.status(201).json(shop);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
