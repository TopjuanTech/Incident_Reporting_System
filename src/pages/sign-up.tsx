import RegisterForm from '@/components/forms/registerform'
import {Card, CardContent, CardFooter, CardHeader} from '@/components/ui/card'
import { NavLink } from 'react-router-dom'

const SignUp = () => {

  return (
    <div className="h-svh w-full flex justify-center items-center">
      <Card className='w-svw sm:w-[400px]'>
        <CardHeader className="font-bold text-primary text-3xl">
          SIGN UP
        </CardHeader>
        <CardContent>
          <RegisterForm />
        </CardContent>
        <CardFooter className='flex justify-center items-center'>
          <span>Already have an account? <NavLink to="/sign-in" className="text-blue-400">login</NavLink></span>
        </CardFooter>
      </Card>
    </div>
  )
}

export default SignUp