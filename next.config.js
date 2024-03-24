module.exports = {
  rewrites: async () => [
    {
      source: "/(.*)",
      destination: "/en/$1",
    },
  ],
};
