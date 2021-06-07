export const checkImage = (file) => {
    let err = "";
    if(!file) return err="File does not exist!";

    if(file.size > 1024*1024)
    err = "Image should be less than 1 MB!"

    if(file.type !== 'image/jpeg' && file.type !== 'image/png')
    err = "Invalid file format!"

    return err;
}

export const imageUpload = async (images) => {
    let imgArr = []
    for(const item of images){
        const formData = new FormData();
        
        if(item.camera){
            formData.append('file', item.camera)
        }else {
            formData.append('file', item);
        }

        formData.append('upload_preset', 'pwvwoj8h')
        formData.append('cloud_name', 'sanskarkhare47')

        const res = await fetch('https://api.cloudinary.com/v1_1/sanskarkhare47/image/upload', {
            method: 'POST',
            body: formData
        })

        const data = await res.json();
       imgArr.push({public_id: data.public_id, url: data.secure_url})
    }
    return imgArr
}