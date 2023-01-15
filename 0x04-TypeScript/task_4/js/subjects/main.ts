// Subjects.ts
import { Cpp } from "./Cpp";
import { Java } from "./Java";
import { React } from "./React";

namespace Subjects {
  export const cpp = new Cpp();
  export const java = new Java();
  export const react = new React();

  export const cTeacher: Teacher = {
    firstName: "John",
    lastName: "Doe",
    experienceTeachingC: 10
  };
}