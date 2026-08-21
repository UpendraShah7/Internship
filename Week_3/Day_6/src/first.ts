//any
let anyTyped: any = "this disables type checking";

// unknown
let apiResponse: unknown = "25";

// keyof typeof
const user = {
  id: 1,
  name: "John",
  email: "john@example.com",
};

type User = typeof user;        // { id: number; name: string; email: string }
type UserKeys = keyof User;     // "id" | "name" | "email"


// Null
type Profile = {
  name: string;
  address?: { city: string } | null;
};

const profile: Profile = { name: "John", address: null };

const city = profile?.address?.city ?? "Unknown";
console.log(city); // "Unknown"

// never
function fail(message: string): never {
  throw new Error(message);
}

function getUserAge(u: unknown): number {
  // unknown must be narrowed before use
  if (typeof u === "number") {
    return u;
  }
  fail("Invalid age"); // never returns satisfies the return type
}

// dom and type assertions
const emailInput = document.querySelector("#email") as HTMLInputElement;
const submitButton = document.querySelector("#submit") as HTMLButtonElement;
const loginForm = document.querySelector("#loginForm") as HTMLFormElement;

// safer alternative to assertion instanceof check
const box = document.querySelector("#box");
if (box instanceof HTMLDivElement) {
  console.log(box.innerText);
}

