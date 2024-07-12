import React, { useRef, useState } from "react";

function AddItemPage() {
  const videoRef = useRef(null);
  const picRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    size: "",
    clothingItemId: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, 
      [name]: value,
    })
  }

  const getVideo = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      let video = videoRef.current;
      video.srcObject = stream;
      video.play();
    } catch (e) {
      console.error("Error getting camera stream: ", e)
    }
  }

  const takePhoto = () => {
    const width = 400;
    const height = 240;

    let video = videoRef.current;
    let itemPic = picRef.current;

    itemPic.width = width;
    itemPic.height = height;

    let context = itemPic.getContext("2d");
    content.drawImage(video, 0, 0, width, height);
    const imgURL = itemPic.toDataURL('image/png');
    setImageSrc(imgURL)

  }

  return (
    <main className="add-item">
      <button class="add-item__button">Take Photo</button>
      <div class="add-item__images">All images go here...</div>
    </main>
  );
}

export default AddItemPage;
