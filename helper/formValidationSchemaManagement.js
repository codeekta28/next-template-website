import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
export function formValidationSchemaManagement(passObject){
    const schema = yup.object({
     ...passObject
      });
      return schema;
}