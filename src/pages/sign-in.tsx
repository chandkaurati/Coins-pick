import { SignIn } from "@clerk/clerk-react"

function Login() {
  return (
    <div className="flex justify-center h-screen items-center">
      <SignIn/>
    </div>
  )
}

export default Login
