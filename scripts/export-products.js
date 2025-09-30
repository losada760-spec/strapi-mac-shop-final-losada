const fs = require('fs').promises;
const path = require('path');
const axios = require('axios');

module.exports = async () => {
  try {
    const response = await axios.get(`${process.env.STRAPI_API_URL}/productos?populate=*`, {
      headers: { Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}` },
    });
    const products = response.data.data;
    const outputPath = path.join(__dirname, '../../data/productos.json');
    await fs.writeFile(outputPath, JSON.stringify(products, null, 2));
    console.log(`Productos exportados a ${outputPath}`);
  } catch (error) {
    console.error('Error al exportar productos:', error.message);
  }
};