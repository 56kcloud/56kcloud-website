const isProd = process.env.NODE_ENV === "production";

module.exports = {
  assetPrefix: isProd ? "https://www.edeltech.ch/" : "",
  async redirects() {
    return [
      {
        source: "/blog/2021-11-29-qt-for-mobile-overview/",
        destination: "/blog/2021-11-29-qt-for-mobile-overview",
        permanent: true,
      },
    ];
  },
};
