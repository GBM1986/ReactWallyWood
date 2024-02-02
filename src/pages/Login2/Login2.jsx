import axios from "axios";
import { useAuth } from "../../components/LoginAuthProvider/LoginAuthProvider";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Login = () => {
  const { loginData, setLoginData } = useAuth();

  const submitHandle = async (e) => {
    const formdata = new URLSearchParams();
    formdata.append("username", e.target.form.username.value);
    formdata.append("password", e.target.form.password.value);
    const endpoint = `http://localhost:3000/login`;
    try {
      const result = await axios.post(endpoint, formdata);
      handleSessionData(result.data);
    } catch (err) {
      console.error(`Kunne ikke logge ind: ${err}`);
    }
  };

  const handleSessionData = (data) => {
    if (data) {
      sessionStorage.setItem("token", JSON.stringify(data));
      setLoginData(data);
    }
  };

  const Logout = () => {
    sessionStorage.removeItem('token');
    setLoginData(''); 
  };

  return (
    <div className="max-w-[1200px] mx-auto">   
      <div className=" bg-white sm:items-center sm:pt-0">
        <div className="max-w-[1000px] mx-auto">
        <Navbar />
          <div className="mt-8 overflow-hidden">
            {!loginData ? (
              <div className="grid grid-cols-1 md:grid-cols-2 h-screen mt-20">
                <form className="dark:bg-gray-800 sm:rounded-lg" method="POST">
                  <h1 className="text-4xl sm:text-5xl text-gray-800 font-extrabold tracking-tight mb-4 text-orange ">
                    Login
                  </h1>
                  <div className="flex flex-col">
                    <label htmlFor="username" className="">Brugernavn:</label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      placeholder="Brugernavn"
                      autoComplete="username"
                      className="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col mt-2">
                    <label htmlFor="password" className="">Password:</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      autoComplete="current-password"
                      className="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={(e) => submitHandle(e)}
                    className="border-2 border-darkGray bg-lightbrown rounded-[3px] p-2 my-2 px-6"
                  >
                    Login
                  </button>
                </form>
              </div>
            ) : (
              <div className="h-screen">
                <p>Du er logget ind som {`${loginData.firstname} ${loginData.lastname} `}</p>
                <button
                 className="border-2 border-darkGray bg-lightbrown rounded-[3px] p-2 my-2 px-6"
                 onClick={() => Logout()}>Log ud</button>
              </div>
            )}
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
