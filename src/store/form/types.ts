import { Location, Package } from "@/types";

export interface FormData {
  name: string;
  age: number;
  location: Location;
  plan: Package;
};

export interface FormState {
  form: FormData;
  error?: boolean;
  step?: number;
}
