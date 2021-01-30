export const defaults = {
  isLoggedIn: Boolean(localStorage.getItem("token")) || false,
};
//
export const resolvers = {
  Mutation: {
    logUserIn: (_, { token }, { cache }) => {
      localStorage.setItem("token", token);
      cache.writeData({
        data: {
          isLoggedIn: true,
        },
      });

      window.location.reload();
      return null;
    },
    logUserOut: (_, __, { cache }) => {
      localStorage.removeItem("token");
      cache.writeData({
        data: {
          isLoggedIn: false,
        },
      });
      window.location.reload();
      return null;
    },
  },
};