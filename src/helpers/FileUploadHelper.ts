import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: 'dm7soji0l',
  api_key: '148848783669537',
  api_secret: '2ESZxCon-d3clajaCLH84FJDflA'
});

const uploadToCloudinary = async () => {
  cloudinary.uploader.upload(
    'https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg',
    { public_id: 'olympic_flag' },
    function (error, result) {
      console.log(result);
    }
  );
};

export const FileUploadHelper = {
  uploadToCloudinary
};
