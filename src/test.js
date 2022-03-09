// (function () {
//   window.addEventListener(
//     "load",
//     function () {
//       const form = document.getElementById("needs-validation");
//       const input = document.getElementById("email");

//       const clearState = () => {
//         form.classList.remove("was-validated");
//         setState({ ...initialState });
//       };

//       form.addEventListener(
//         "submit",
//         function (event) {
//           if (input && !form.checkValidity()) {
//             event.preventDefault();
//             event.stopPropagation();
//             form.classList.add("was-validated");
//           }
//           if (input && form.checkValidity()) {
//             event.preventDefault();
//             event.stopPropagation();
//             form.classList.add("was-validated");
//           }
//         },
//         false
//       );
//     },

//     false
//   );
// })();
