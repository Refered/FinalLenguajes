
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


function App() {

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  


  return (
    <>
      <div className="bg-indigo-500 w-screen h-screen " >
        <div className="flex flex-col grow p-5 items-center text-2xl ">  Control de gastos
        <form className="border bg-indigo-100 ">
          s
        </form>
        </div>
        </div>
 
    </>
  )
}

export default App
