const getAllProducts = (req, res) => {
    res.status(200).json({ message: "Product route is working properly" });
}

module.exports = getAllProducts;