1. Memasang eslint
```
npm init @eslint/config@latest
```
2. Jawab pertanyaan yang muncul.
- How would you like to use ESLint? -> _*To check syntax and find problems*_.
- What type of modules does your project use? -> _*CommonJS (require/exports)*_.
- Which framework does your framework use? -> _*None of these*_. 
- Does your project use TypeScript? -> _*No*_.
- Where does your code run? -> _*Node (pilih menggunakan spasi)*_.
- Would you like to …… (seluruh pertanyaan selanjutnya) -> _*Y*_.
3. Tambahkan style guide Dicoding Academy
```
npm install --save-dev eslint-config-dicodingacademy
```
4. Edit file `eslint.config.mjs`.
```
import daStyle from 'eslint-config-dicodingacademy';
 
export default [
  daStyle,
  // other config style
];
```
5. Tambahkan script untuk menjalankan eslint (edit `file package.json`).
```
"scripts": {
  "start": "nodemon server.js",
  "lint": "eslint ./"
},
```
6. Jalankan perintah `npm run lint` untuk menjalankan eslint.
