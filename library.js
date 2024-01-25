const axios = require('axios');

const imgBBUpload = {};

imgBBUpload.uploadImage = async function (data, callback) {
  const apiUrl = 'https://api.imgbb.com/1/upload';
  const apiKey = 'your_api_key_here'; // 替换成你的 imgBB API Key

  try {
    const response = await axios.post(apiUrl, {
      key: apiKey,
      image: data.image, // data.image 是上传的图片数据，确保这个属性是正确的
    });

    if (response.data && response.data.data && response.data.data.image) {
      const imageUrl = response.data.data.image.url;
      const imageName = response.data.data.image.name;
      callback(null, { imageUrl, imageName });
    } else {
      callback(new Error('Failed to extract image URL and name from response'));
    }
  } catch (error) {
    callback(error);
  }
};

module.exports = imgBBUpload;
