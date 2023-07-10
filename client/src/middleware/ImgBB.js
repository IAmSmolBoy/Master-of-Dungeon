import axios from 'axios';

const API_KEY = process.env.REACT_APP_IMGBB_API_KEY

// Function to upload an image to ImgBB
async function uploadImage (imageData) {
        
    const prettyprint = (content) => console.log(content + "\n\n---------------------------------------------------------------\n\n")

    try {

        prettyprint()

        const response = await axios.post('https://api.imgbb.com/1/upload', {
            key: API_KEY,
            image: imageData,
        });

        prettyprint(response.data)
        prettyprint(response.data.data)
        prettyprint(response.data.data.url)

        if (response.status === 200 && response.data && response.data.data) {
            return response.data.data.url;
        }

        throw new Error('Failed to upload image');

    } catch (error) {

        console.error('Error uploading image:', error);
        throw error;

    }

};

// Function to retrieve an image from ImgBB by its URL
async function getImageByUrl (imageUrl) {
    
    try {

        const response = await axios.get(imageUrl);

        if (response.status === 200 && response.data) {

            return response.data;

        }

        throw new Error('Failed to retrieve image');

    } catch (error) {

        console.error('Error retrieving image:', error);
        throw error;

    }

};

export { uploadImage, getImageByUrl }