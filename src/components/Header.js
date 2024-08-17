import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../store/userSlice";
import { LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from "../utils/constant";
import { addGptMovieResult, toggleGptSearchView } from "../store/gptSlice";
import { changeLanguage } from "../store/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const gptStore = useSelector((store) => store.gpt);
  const { showGptSearch } = gptStore || {};

  useEffect(() => {
    const unsubscribeAuthListener = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribeAuthListener();
  }, [dispatch, navigate]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  const handleGPTSearch = () => {
    dispatch(toggleGptSearchView());
    if (showGptSearch) {
      dispatch(addGptMovieResult({ movieNames: [], movieResults: [] }));
    }
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="absolute px-8 py-8 bg-gradient-to-b from-black z-10 w-full flex justify-between">
      <img src={LOGO} alt="logo" className="w-36" />
      {user && (
        <div className="flex text-center">
          {showGptSearch && (
            <select
              onChange={handleLanguageChange}
              className="p-2 m-2 bg-gray-900 text-white rounded-lg"
            >
              {SUPPORTED_LANGUAGES.map((item) => (
                <option value={item.identifier} key={item.identifier}>
                  {item.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-2 px-4 text-white mx-4 my-2 rounded-lg bg-purple-800"
            onClick={handleGPTSearch}
          >
            {showGptSearch ? "Home" : "GPT Search 🔍"}
          </button>

          <img
            src={user?.photoURL || USER_AVATAR}
            alt="userIcon"
            className="w-10 rounded-sm"
          />
          <button className="mx-2 font-bold text-white" onClick={handleSignOut}>
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
