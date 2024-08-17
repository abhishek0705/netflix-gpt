export const LOGO =
  "https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460";

export const USER_AVATAR = "https://i.imgur.com/yhnwhe1.png";

export const LOGO_SHORT =
  "https://images.ctfassets.net/y2ske730sjqp/4aEQ1zAUZF5pLSDtfviWjb/ba04f8d5bd01428f6e3803cc6effaf30/Netflix_N.png?w=300";

export const BG_LOGIN_IMAGE =
  "https://assets.nflxext.com/ffe/siteui/vlv3/20bf1f4d-1c73-48fd-8689-310d6dd80efc/81bdc063-cb8f-4afe-8a02-a3131ca4ef5e/IN-en-20240812-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7998f3b6-63e3-424a-8328-550cf777ddce_large.jpg";

export const TMDB_API_KEY = "02b7fbbcf9b2bad7f1001bef0dd1342e";
export const TMDB_API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMmI3ZmJiY2Y5YjJiYWQ3ZjEwMDFiZWYwZGQxMzQyZSIsIm5iZiI6MTcyMzg2NTE4NS45NTIwOTMsInN1YiI6IjY2YzAxM2ViOWZkYTBlNTA5YzlkYjhlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WRQzSDF4MXadkyCB75iav6kclMhMuSYYp5e8Uxze8aQ";

export const TMDB_API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + TMDB_API_TOKEN,
  },
};

export const TMDB_IMAGE_PATH = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];
