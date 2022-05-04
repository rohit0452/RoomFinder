// import { plainToClass } from "class-transformer";
// import { validate } from "class-validator";
// import { FieldErrors, ValidateError } from "tsoa";
// import * as express from "express";

// function validationMiddleware(type: any): express.RequestHandler {
//   return async (req, _, next) => {
//     validate(plainToClass(type, req.body))
//       .then((errors: ValidateError[]) => {
//         if (errors.length > 0) {
//           let fields: FieldErrors = {};
//           for (let i = 0; i < errors.length; i++) {
//             const err = errors[i];
//             fields[err.property] = {
//               message: Object.values(err.constraints || []).join(","),
//               value: err.value,
//             };
//           }
//           next(new ValidateError(fields, "Request is not proper"));
//         } else {
//           next();
//         }
//       })
//       .catch((err) => {
//         Logger.error(err);
//       });
//   };
// }

// export default validationMiddleware;
