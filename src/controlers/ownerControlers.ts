import { Route } from "tsoa";
import { Owner } from "../entity/Owner";

// export const addOwner = async (req: Request, res: Response) => {
//   try {
//     const putData = AppDataSource.getRepository(Owner);

//     const add = putData.create(req.body);
//     const results = await putData.save(add);

//     return res.status(200).json({
//       status: "Success",
//       data: { results },
//     });
//   } catch (err) {
//     return res.status(400).json({
//       status: "Fail",
//       message: err.message,
//     });
//   }
// };
