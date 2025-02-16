/* eslint-disable @typescript-eslint/no-explicit-any */

import { Link } from "react-router-dom";

const Registration = () => {
  // const navigate = useNavigate();
  // const [addRegisterUser] = useRegisterUserMutation();

  // const defaultValues = {
  //   name: "Shariful islam",
  //   email: "Shariful@sgmail.com",
  //   password: "Shariful!23",
  // };

  // const onSubmit = async (data: FieldValues) => {
  //   try {
  //     const res = (await addRegisterUser(data)) as TResponse<any>;
  //     if (res?.error) {
  //       toast.error(res?.error?.data?.message);
  //     } else {
  //       toast.success(res?.data?.message);
  //       navigate("/login");
  //     }
  //     console.log(res);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className="hero bg-base-200 min-h-screen font-serif">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Registeration now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="fieldset-label">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Nmae"
              />
              <label className="fieldset-label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <label className="fieldset-label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />

              <button className="btn  btn-neutral mt-4 hover:bg-gray-900">
                Register
              </button>
              <span>
                Have An Account? Please{" "}
                <Link to="/login" className="text-red-500 underline">
                  Login
                </Link>
              </span>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
