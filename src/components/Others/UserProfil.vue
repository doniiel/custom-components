<template>
    <div class="user-profile-image" :style="{ width: `${width}px`, height: `${height}px` }">
      <img
        :src="profileImage"
        alt="Profile Image"
        class="profile-image"
      />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      profileImage: {
        type: String,
        required: true,
      },
      width: {
        type: Number,
        default: 100, 
      },
      height: {
        type: Number,
        default: 100, 
      },
    },
  };
  </script>
  
  <style scoped>
  .user-profile-image {
    border-radius: 50%;
    overflow: hidden;
   
  }
  
  .profile-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  </style>
  