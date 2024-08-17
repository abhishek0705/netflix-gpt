import React, { useRef, useState } from "react";
import Header from "../components/Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";
import { BG_LOGIN_IMAGE, USER_AVATAR } from "../utils/constant";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [hasErrors, setErrors] = useState({
    error: false,
    invalidName: null,
    invalidEmail: null,
    invalidPassword: null,
    authError: null,
  });

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const toggleSignInForm = () => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      error: false,
    }));
    setIsSignInForm(!isSignInForm);
    email.current.value = null;
    password.current.value = null;
    if (!isSignInForm) {
      fullName.current.value = "";
    }
  };

  const handleButtonClick = (e) => {
    e.preventDefault();

    // Reset errors
    setErrors((prevErrors) => ({
      ...prevErrors,
      error: false,
    }));

    // Get validation results
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const nameValue = !isSignInForm ? fullName.current.value : "";

    const validationResults = checkValidData(
      emailValue,
      passwordValue,
      nameValue
    );

    // Check for errors
    const hasErrors = {
      invalidEmail: validationResults.email?.message || null,
      invalidPassword: validationResults.password?.message || null,
      invalidName:
        validationResults.name && !isSignInForm
          ? validationResults.name.message
          : null,
    };

    // Update errors if any
    if (Object.values(hasErrors).some((message) => message !== null)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        error: true,
        ...hasErrors,
      }));
    } else {
      if (!isSignInForm) {
        createUserWithEmailAndPassword(auth, emailValue, passwordValue)
          .then((userCredential) => {
            updateProfile(userCredential.user, {
              displayName: nameValue,
              photoURL: USER_AVATAR,
            })
              .then(() => {
                const { uid, email, displayName, photoURL } = auth.currentUser;
                dispatch(
                  addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL,
                  })
                );
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrors((prevErrors) => ({
                  ...prevErrors,
                  error: true,
                  authError: `${errorCode}: ${errorMessage}`,
                }));
              });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrors((prevErrors) => ({
              ...prevErrors,
              error: true,
              authError: `${errorCode}: ${errorMessage}`,
            }));
          });
      } else {
        signInWithEmailAndPassword(auth, emailValue, passwordValue)
          .then(() => {})
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrors((prevErrors) => ({
              ...prevErrors,
              error: true,
              authError: `${errorCode}: ${errorMessage}`,
            }));
          });
      }
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
          src={BG_LOGIN_IMAGE}
          alt="bg-image"
          className="h-screen object-cover"
        />
      </div>
      <form className="absolute bg-black p-12 w-full md:w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-90 rounded-md">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={fullName}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full rounded-sm bg-gray-700"
          />
        )}
        {!isSignInForm && hasErrors.error && hasErrors.invalidName && (
          <p className="text-red-600">*{hasErrors.invalidName}</p>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full rounded-sm bg-gray-700"
        />
        {hasErrors.error && hasErrors.invalidEmail && (
          <p className="text-red-600">*{hasErrors.invalidEmail}</p>
        )}
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full rounded-sm bg-gray-700"
        />
        {hasErrors.error && hasErrors.invalidPassword && (
          <p className="text-red-600 ">*{hasErrors.invalidPassword}</p>
        )}
        <button
          className="p-4 my-4 bg-red-700 w-full rounded-sm"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        {hasErrors.error && hasErrors.authError && (
          <p className="text-red-600 ">*{hasErrors.authError}</p>
        )}
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already have an account? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
