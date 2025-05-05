import { Schema } from "mongoose";

export interface ICredentials {
    email: string;
    password: string;
  }

  // Schema for ICredentialsModel
export const CredentialsSchema = new Schema<ICredentials>({
    email: {
      type: String,
      required: [true, "Missing email"],
      unique: true,
      minlength: [2, "email name is too short"],
      maxlength: [50, "email name is too long"],
    },
    password: {
      type: String,
      required: [true, "Missing password"],
      minlength: [4, "password  is too short"],
      maxlength: [50, "password  is too long"],
    },
  }, {
    versionKey: false,
  });
  