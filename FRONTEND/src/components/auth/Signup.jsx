import axios from "axios";
import { Loader2 } from 'lucide-react';
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { setLoading } from '../../redux/authSlice';
import { USER_API_POINT } from "../../utils/Constant";
import Navbar from "../shared/Navbar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup } from "../ui/radio-group";

const Signup = () => {
    const [input, setInput] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "",
        file: ""
    })
    // navigation
    const navigate = useNavigate();
    const { loading } = useSelector(store => store.auth);
    const dispatch = useDispatch();

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const changeFileHandler = (e) => {
        setInput({ ...input, file: e.target.files?.[0] })
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        console.log(input);

        const formData = new FormData();
        formData.append("fullName", input.fullName);
        formData.append("email", input.email);
        formData.append("phoneNumber", input.phoneNumber);
        formData.append("password", input.password);
        formData.append("role", input.role);

        if (input.file) {
            formData.append("file", input.file);
        }

        try {
            dispatch(setLoading(true))
            const res = await axios.post(`${USER_API_POINT}/register`, formData, {
                // headers: {
                //     "Content-Type": "multipart/form-data"
                // },
                withCredentials: true,
            });
            if (res.data.success) {
                navigate('/login');
                toast.success(res.data.message)
            }

        }
        catch (err) {
            console.log(err);
            toast.error("Signup failed", err.response.data.message)

        }
        // console.log("BODY:", req.body);
        // console.log("FILE:", req.file);
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
                        <h1 className="font-bold text-xl mb-5">Sign Up</h1>
                        <div className="space-y-2 items-center ">
                            <Label>Full Name</Label>
                            <Input
                                value={input.fullName} name="fullName" onChange={changeEventHandler}
                                type="text" placeholder="full Name" className="" />
                        </div>
                        <div className="space-y-2  items-center">
                            <Label>Email</Label>
                            <Input type="email" placeholder="khan@gmail.com"
                                value={input.email} name="email" onChange={changeEventHandler} />
                        </div>
                        <div className="space-y-2  items-center">

                            <Label>Phone Number</Label>
                            <Input type="text" placeholder="0987654321"
                                value={input.phoneNumber} name="phoneNumber" onChange={changeEventHandler}
                            />
                        </div>
                        <div className="space-y-2  items-center">
                            <Label>Password</Label>
                            <Input type="text" placeholder="password"
                                value={input.password} name="password" onChange={changeEventHandler}
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
                                        onChange={changeEventHandler}
                                        checked={input.role === 'student'}
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
                                        onChange={changeEventHandler}
                                        checked={input.role === 'recruiter'}
                                        className="cursor-pointer"
                                    />
                                    <Label htmlFor="r2" className="">
                                        Recruiter
                                    </Label>
                                </div>
                            </RadioGroup>

                            {/* profile dhalne */}
                            <div className="flex items-center gap-2">
                                <Label>Profile</Label>
                                <Input
                                    accept="image/*"
                                    type="file"
                                    className="cursor-pointer"
                                    onChange={changeFileHandler}
                                />
                            </div>
                        </div>

                        {/* when loading  */}
                        {
                            loading ? <Button className="w-full my-4"><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please Wait</Button> :
                                <Button type="submit" className="w-full my-4">
                                    SignUp
                                </Button>
                        }

                        {/* singUp button */}
                        <div>

                            <span className="text-sm">
                                Already have an account?
                                <Link to="/login" className="text-blue-600 ml-1">
                                    Login
                                </Link>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Signup;
