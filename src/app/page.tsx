'use client'
import React, { useState } from 'react';
import Button from '@/components/button/button';
import FileInput from '@/components/input/input';
import axios from 'axios';
import Loader from '@/components/loader/loader';

// Loading spinner component


export default function Home() {
  const [file, setFiles] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false); // State to track loading
  const [downloadURL, setDownloadURL] = useState<string | null>(null);

  const handleChange = (files: FileList | null) => {
    if (files && files.length > 0) {
      setFiles(files[0]);
    }
  };

  const handleClick = async () => {
    try {
      setLoading(true); // Set loading to true when request starts
      if (file) {
        const formData = new FormData();
        formData.append('file', file);
        const response = await axios.post('http://localhost:5500/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        });
        console.log('Download URL:', response.data.downloadURL);
        setDownloadURL(response.data.downloadURL);
      } else {
        console.error('No file selected');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    } finally {
      setLoading(false); // Set loading to false when request completes
    }
  };

  const handleDownload = () => {
    if (downloadURL) {
      window.open(downloadURL, '_blank');
    }
  };

  return (
    <main className='flex flex-col items-center justify-center h-screen gap-4 bg-[#EEE7DA]'>
      <FileInput onChange={handleChange} />
      {loading ? (
        <Loader /> 
      ) : (
        <Button onClick={handleClick}>Upload</Button> 
      )}
      {downloadURL && <Button onClick={handleDownload}>Download</Button>}
    </main>
  );
}
