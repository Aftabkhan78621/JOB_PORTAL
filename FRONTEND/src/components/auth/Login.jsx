import axios from "axios";
import { Loader2 } from 'lucide-react';
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
// import { setLoading } from "../../redux/authSlice";
import { setLoading, setUser } from "../../redux/authSlice";
import { USER_API_POINT } from "../../utils/Constant";
import Navbar from "../shared/Navbar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup } from "../ui/radio-group";


const Login = () => {
    const [input, setInput] = useState({
        email: "",
        password: "",
        role: "",
    });

    const { loading } = useSelector(store => store.auth);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };
    const submitHandler = async (e) => {
        e.preventDefault()
        console.log(input);
        try {
            dispatch(setLoading(true))
            const res = await axios.post(`${USER_API_POINT}/login`, input, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true,
            });
            if (res.data.success) {
                navigate('/');
                toast.success(res.data.message)
                dispatch(setUser(res.data.user))
            }

        }
        catch (err) {
            console.log(err);
            toast.error("login failed", err.response.data.message)


        }
        finally {
            dispatch(setLoading(false))
        }
    }

    return (
        <>
            <div>
                <Navbar />
                <div className="flex items-center justify-center max-w-7xl mx-auto">
                    {/* form for login as a recruiter or job seeker */}
                    <form
                        onSubmit={submitHandler}
                        className="w-1/2 border border-gray-200 rounded-md p-4 my-10 space-y-3.5"
                    >
                        <h1 className="font-bold text-xl mb-5">Login</h1>

                        <div className="space-y-2  items-center">
                            <Label>Email</Label>
                            <Input
                                type="email"
                                placeholder="khan@gmail.com"
                                value={input.email}
                                name="email"
                                onChange={changeEventHandler}
                            />
                        </div>

                        <div className="space-y-2  items-center">
                            <Label>Password</Label>
                            <Input
                                type="password"
                                placeholder="Pasword"
                                value={input.password}
                                name="password"
                                onChange={changeEventHandler}
                            />
                        </div>

                        {/* filling as a student or recruiter */}
                        <div className="flex items-center justify-between ">
                            <RadioGroup
                                defaultValue="comfortable"
                                className="flex items-center gap-5  my-3"
                            >
                                <div className="flex items-center space-x-2">
                                    <Input
                                        type="radio"
                                        name="role"
                                        value="student"
                                        checked={input.role === "student"}
                                        onChange={changeEventHandler}
                                        className="cursor-pointer"
                                    />
                                    <Label htmlFor="r1" className="">
                                        Student
                                    </Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Input
                                        type="radio"
                                        name="role"
                                        value="recruiter"
                                        checked={input.role === "recruiter"}
                                        onChange={changeEventHandler}
                                        className="cursor-pointer"
                                    />
                                    <Label htmlFor="r2" className="">
                                        Recruiter
                                    </Label>
                                </div>
                            </RadioGroup>

                            {/* profile dhalne */}
                            {/* <div className="flex items-center gap-2">
                                <Label>Profile</Label>
                                <Input
                                    accept="image/*"
                                    type="file"
                                    className="cursor-pointer"
                                />
                            </div> */}
                        </div>

                        {/* loading ho jb singup ya login p cclick ho tb by redux toolkit */}
                        {
                            loading ? <Button className="w-full my-4"><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please Wait</Button> :
                                <Button type="submit" className="w-full my-4">
                                    Login
                                </Button>
                        }

                        {/* singUp button */}
                        <div>
                            {/* <Button type="submit" className="w-full my-4">
                                Login
                            </Button> */}
                            <span className="text-sm">
                                Don't have an account?
                                <Link to="/Signup" className="text-blue-600 ml-1">
                                    SignUp
                                </Link>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
