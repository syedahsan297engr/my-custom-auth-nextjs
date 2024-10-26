// This is where you'd eventually interact with your backend to handle login
// In the future, this could make an API call to a server or handle JWT logic
export const loginUser = async (email: string, password: string) => {
  if (email === "ahsan@gmail.com" && password === "pass123$") {
    return {
      success: true,
      message: "Login successful!",
    };
  }
  throw new Error("Invalid credentials");
};
