const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

let currentCode = "";

const generateCode = () =>
  Math.floor(100000 + Math.random() * 900000).toString();



export async function fakeLogin(email: string, password: string) {
  await delay(800);

  if (email === "test@example.com" && password === "123456") {
    currentCode = generateCode();
    console.log("Your 6-digit code is:", currentCode);
    return { tempToken: "temp-token-abc" };
  }

  throw new Error("Invalid email or password");
}




export async function fakeResendCode(tempToken: string) {
  await delay(800);

  if (tempToken !== "temp-token-abc") {
    throw new Error("Session expired. Please log in again.");
  }

  currentCode = generateCode(); 
  console.log("Your new 6-digit code is:", currentCode);
}




export async function fakeVerifyCode(code: string, tempToken: string) {
  await delay(800);

  if (tempToken !== "temp-token-abc") {
    throw new Error("Session expired. Please log in again.");
  }

  if (code === currentCode) {
    currentCode = "";
    return { accessToken: "real-token-xyz" };
  }

  throw new Error("Wrong code. Try again.");
}