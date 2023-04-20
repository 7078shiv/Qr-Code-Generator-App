import React, { useState } from 'react';
import QRCode from 'qrcode' 
import './App.css';
function App() {
  // usestate return array
  const [qrcodeData,setQrCodeData]=useState('');
  const [qrCodeImage,setQrCodeImage]=useState('');
  const generateQRCode=()=>{
    QRCode.toDataURL(qrcodeData,{width:350, margin:2},(err,url)=>{
      if(err) return console.log("Failed to generate QR Code");
      setQrCodeImage(url);
    })
  }
  return (
    <div>
     <h1>QR Code Generator</h1>
     <div className='d2'>
      <input value={qrcodeData} 
      onChange={e=>{
        setQrCodeData(e.target.value)
      }}
      type='text' placeholder='Enter data to Encode'></input>
      <button onClick={generateQRCode}>Generate</button>
     </div>

     {qrCodeImage && (
     <div className='qrcodecontainer'>
     <img src={qrCodeImage} alt=""></img>
     <a href={qrCodeImage} download='qrcode.png'>Download</a>
     </div>
     )}
    </div>
  );
}

export default App;
