import React from "react";
import { Link } from "react-router-dom";
import FormControl from "../../shared/components/FormControl";
import FormLabel from "../../shared/components/FormLabel";
import Button from "../../shared/components/Button";

const Login = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Login in
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <FormLabel label="Email address" />
            <FormControl name="email" type="email" />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <FormLabel label="Password" />
              <Link
                to="#"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Forgot password?
              </Link>
            </div>
            <FormControl name="password" type="password" />
          </div>
          <div>
            <Button
              className="w-full"
              title="Sign in"
              variant="primary"
              type="submit"
              onClick={() => {}}
            ></Button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <Link
            to="#"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            &nbsp; Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
