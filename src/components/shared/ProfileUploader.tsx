import { useCallback, useState } from 'react';
import { FileWithPath, useDropzone } from 'react-dropzone';

type ProfileUploaderProps = {
  fieldChange: (files: File[]) => void;
  mediaUrl: string;
}

const ProfileUploader = ({ fieldChange, mediaUrl}: ProfileUploaderProps) => {
  const [file, setFile] = useState<File[]>([])
  const [fileUrl, setFileUrl] = useState(mediaUrl)

  const onDrop = useCallback((acceptedFiles : FileWithPath[]) => {
    setFile(acceptedFiles);
    fieldChange(acceptedFiles);
    setFileUrl(URL.createObjectURL(acceptedFiles[0]))
  }, [file])

  const {getRootProps, getInputProps} = useDropzone({
    onDrop,
    accept: {
      'image/*' : ['.png', '.jpeg', '.jpg', '.svg']
    }
  })


  return (
    <div {...getRootProps()} className='flex flex-center flex-col bg-dark-3 rounded-xl cursor-pointer'>
      <input {...getInputProps()} className='cursor-pointer' />
      <div>
        <img
          src={fileUrl || "assets/icons/profile-placeholder.svg"}
          alt='image'
          className='h-24 w-24 rounded-full object-cover object-top'
        />
      </div>
        <p className='text-primary-500 small-regular md:base-semibold'>
          Change Profile Photo
        </p>
    </div>
  )
}

export default ProfileUploader