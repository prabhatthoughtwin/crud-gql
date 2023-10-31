// export const setHttpPlugin = {
//       async requestDidStart() {
//         return {
//           async willSendResponse({ response }:any) {
          
//             if (response.errors) {
//               const codes = response.errors[0].extensions.code.code;
//               const sts = response.errors[0].extensions.code.statusCode;
//               response.errors[0].message = codes;
//               response.errors[0].extensions = {
//                 code: codes,
//                 statusCode: response.errors[0].extensions.code.statusCode,
//               };
//               response.http.status = sts
//             }
              
//           }
//         };
//       }
//     };


export const setHttpPlugin = {
  async requestDidStart() {
    return {
      async willSendResponse({ response }:any) {
      
        if (response.errors) {
          console.log(response.errors[0]);
          
          const error = response.errors[0];
          const statusCode = error?.statusCode || 500;
          const errorMessage = error.message;

          // Modify the error response as needed
          // (e.g., logging, changing messages, etc.)

          response.http.status = statusCode;
           // Remove the "data" field from the response
           delete response.data;
        }
          
      }
    };
  }
};