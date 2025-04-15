const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AZj-Tj6c5Ct33weKHEtnuacmNxosmBkSZuTvfHP_QYL_Vieujgi09RkmBOi3nI8lNh29LsvPf3wQgWwT",
  client_secret: "AZj-Tj6c5Ct33weKHEtnuacmNxosmBkSZuTvfHP_QYL_Vieujgi09RkmBOi3nI8lNh29LsvPf3wQgWwT",
});

module.exports = paypal;
