import React, { useCallback, useEffect, useRef, useState } from 'react';
import './Heplers/main.css';

const Passwordgen = () => {
  const [passwordLength, setPasswordLength] = useState(8);
  const [uppercase, setUppercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [special, setSpecial] = useState(false);
  const [password, setPassword] = useState('');
  const [copySuccess, setCopySuccess] = useState('');

  const passwordRef = useRef();

  useEffect(() => {
    generatePassword();
  }, [passwordLength, uppercase, numbers, special]);

  const generatePassword = useCallback(() => {
    let str = 'abcdefghijklmnopqrstuvwxyz';
    let uppercaseStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let numbersStr = '0123456789';
    let specialStr = '!@#$%^&*()_+[]{}|;:,.<>?';
    let pass = '';

    if (uppercase) {
      str += uppercaseStr;
    }
    if (numbers) {
      str += numbersStr;
    }
    if (special) {
      str += specialStr;
    }

    for (let i = 1; i <= passwordLength; i++) {
      let xhr = Math.floor(Math.random() * str.length);
      pass += str.charAt(xhr);
    }
    setPassword(pass);
  }, [passwordLength, uppercase, numbers, special]);

  const copyToClipboard = () => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
    setCopySuccess('Password copied to clipboard!');
    setTimeout(() => setCopySuccess(''), 2000);
  };

  return (
    <div className="max-w-md mx-auto h-screen flex flex-col justify-center p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Password Generator</h1>
      <div className="mb-4">
        <input
          type="text"
          value={password}
          readOnly
          ref={passwordRef}
          className="input input-bordered w-full"
        />
        {copySuccess && (
          <span className="text-black text-sm">{copySuccess}</span>
        )}
      </div>
      <div className="mb-4">
        <button
          onClick={copyToClipboard}
          className="btn btn-primary w-full"
        >
          Copy
        </button>
      </div>
      <div className="mb-4">
        <label className="label">
          <span className="label-text">Length: {passwordLength}</span>
        </label>
        <input
          type="range"
          min={8}
          max={50}
          value={passwordLength}
          onChange={(e) => setPasswordLength(Number(e.target.value))}
          className="range range-primary w-full"
        />
      </div>
      <div className="mb-4">
        <label className="label cursor-pointer">
          <span className="label-text">Include Uppercase Letters</span>
          <input
            type="checkbox"
            checked={uppercase}
            onChange={() => setUppercase((prev) => !prev)}
            className="checkbox checkbox-primary"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="label cursor-pointer">
          <span className="label-text">Include Numbers</span>
          <input
            type="checkbox"
            checked={numbers}
            onChange={() => setNumbers((prev) => !prev)}
            className="checkbox checkbox-primary"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="label cursor-pointer">
          <span className="label-text">Include Special Characters</span>
          <input
            type="checkbox"
            checked={special}
            onChange={() => setSpecial((prev) => !prev)}
            className="checkbox checkbox-primary"
          />
        </label>
      </div>
    </div>
  );
};

export default Passwordgen;
