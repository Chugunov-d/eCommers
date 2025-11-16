import { lazy } from "react";

export const LoginPageAsync = (lazy(
    () =>
        new Promise((res) =>{
        //@ts-expect-error Simulating delay
        setTimeout(() => res(import("./LoginPage")), 1500)
        }
    )
));

