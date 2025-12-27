# Task 5: React Custom Hooks (useFetch)

Ek reusable React custom hook banane ka project jo API se data fetch karne ki process ko handle karta hai, loading aur error states ke saath.

---

## Project Description
Is project mein humne ek custom hook `useFetch` banaya hai jo:
* API endpoints se data fetch karta hai.
* Request ki **Loading state** ko manage karta hai.
* Potential **Error states** (network error ya malformed data) ko handle karta hai.

## Key Features
* **Custom Hook (`useFetch`)**: Ek generic hook jo kisi bhi URL ke liye kaam karta hai.
* **Handling States**: Loading spinner aur error messages user ko visual feedback dete hain.
* **Responsive UI**: Grid layout jo products ko cards mein dikhata hai, jaisa assignment requirements mein tha.
* **Optimization**: `useEffect` aur `useState` ka efficient upyog.

## Technical Decisions

### 1. Hook Design (`useFetch.js`)
* **State Management**: Maine teen states (`data`, `loading`, `error`) ka upyog kiya taaki UI component ko hamesha fetch ki current status pata ho.
* **Fetch API**: JavaScript ki native `fetch()` method ka upyog kiya gaya hai.
* **Effect Cleanup**: Hook mein cleanup logic add kiya gaya hai taaki memory leaks se bacha ja sake jab component unmount ho.

### 2. UI/UX Implementation
* **Grid Layout**: CSS Grid ka upyog karke ek clean card-based design banaya gaya hai jo images aur information ko structured tarike se dikhata hai.
* **Loading Feedback**: Jab tak data fetch ho raha hai, tab tak ek placeholder ya spinner dikhaya jata hai.

## How to Run Locally

1. GitHub Repository :
   ```bash
   git clone [https://github.com/Prem-8009/react-custom-hook-task.git](https://github.com/Prem-8009/react-custom-hook-task.git)
2. Netlify Link :
   '''Chrome
   netlify link [https://aquamarine-babka-a94bc3.netlify.app/]
   (https://aquamarine-babka-a94bc3.netlify.app/)

run this all link on your dekstop for seeing my hooks pages

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
