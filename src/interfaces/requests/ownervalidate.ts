import {
  validate,
  validateOrReject,
  Contains,
  IsInt,
  Length,
  IsEmail,
  IsFQDN,
  IsDate,
  Min,
  Max,
} from "class-validator";

export class ownerValidation {
  @IsEmail()
  email: string;

  @IsInt()
  @Min(0)
  @Max(10)
  phoneNo: number;
}
