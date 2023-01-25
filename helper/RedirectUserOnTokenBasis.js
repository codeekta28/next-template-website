export function RedirectUserOnTokenBasis(router) {
  const token = localStorage.getItem("token");
  const routes = ["/signup", "/login"];

  // if token is not null and user is trying to go to signUp page or login page redirect to user Home page
  if (token !== null && routes.includes(router.pathname)) {
    router.replace("/dashboard/user");
  }

  // if token is null and user is trying to go other pages rather than signUp or login redirect to login page
  if (
    token === null &&
    router.pathname !== "/signup" &&
    router.pathname !== "/login"
  ) {
    router.replace("/");
  }
}
