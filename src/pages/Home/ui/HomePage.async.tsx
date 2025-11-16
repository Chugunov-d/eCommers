import { lazy } from "react";

export const HomePageAsync = (lazy(
    () =>
        new Promise((res) =>{
        //@ts-expect-error Simulating delay
        setTimeout(() => res(import("./HomePage")), 1500)
        }
    )
));