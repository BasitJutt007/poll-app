import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import CustomButton from '../common/CustomButton';
import toast, { Toaster } from 'react-hot-toast';
import { resetPoll } from '../redux/pollSlice';
import { useSubmitPollMutation } from '../redux/pollApi';

const SummaryScreen = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const selectedOptions = useSelector((state) => state.poll.selectedOptions);
    const steps = useSelector((state) => state.poll.steps);
    const [submitPoll, { isError, isLoading, isSuccess }] = useSubmitPollMutation();



    const handleSubmit = () => {
        const answers = steps.map((step, index) => ({
            question: step.title,
            answer: selectedOptions[index] ? selectedOptions[index] : 'Not answered',
        }));
        console.log("Sending This:::", answers)

        toast.promise(
            submitPoll(answers).unwrap(),
            {
                loading: 'Submitting your poll...',
                success: <b>Poll submitted successfully!</b>,
                error: <b>Submission failed!</b>,
            }
        ).then(() => {
            setTimeout(() => {
                navigate('/result');
            }, 700)
        }).catch((err) => {
            console.error("Submission failed due to error:", err);
        });
    };



    const handlePollAgain = () => {
        dispatch(resetPoll());
        navigate('/');
    };

    const variants = {
        hidden: { opacity: 0, x: -500 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <motion.div
            className="flex flex-col items-center justify-center min-h-screen p-10 bg-purple-100"
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 0.5 }}
        >
            <Toaster position="top-center" reverseOrder={false} />
            <h2 className="text-4xl font-bold mb-10 text-purple-800">Your Answers</h2>

            <div className="w-full max-w-3xl space-y-6">
                <ul className="space-y-4">
                    {steps.map((step, index) => (
                        <li
                            key={index}
                            className="flex flex-row justify-between items-center -skew-x-12 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 bg-white"
                        >
                            <div className="py-7 pl-8 pr-5 text-white w-[40rem] bg-pollPurple text-xl font-semibold transform ">
                                <span className="">
                                    {step.title}
                                </span>
                            </div>
                            <div className="py-7 pr-8 text-gray-800 text-lg font-medium transform text-right w-[40rem]">
                                <span className="flex items-center justify-end space-x-2">
                                    <span className="mr-5 text-lg">
                                        {/* Emoji here */}
                                        {step.options.find(option => option.label === selectedOptions[index])?.icon}
                                    </span>
                                    <span>
                                        {selectedOptions[index] ? selectedOptions[index] : 'Not answered'}
                                    </span>
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>


            <div className='flex flex-row content-center align-baseline mt-10'>
                <div>
                    <CustomButton
                        text="Submit"
                        buttonColor="bg-violet-600"
                        textColor="text-white"
                        rounded="rounded-md"
                        onClick={handleSubmit}
                    />
                </div>
                <div className='ml-5'>
                    <CustomButton
                        text="Poll Again"
                        buttonColor="bg-green-500"
                        textColor="text-white"
                        rounded="rounded-md"
                        onClick={handlePollAgain}
                    />
                </div>
            </div>


        </motion.div>
    );
};

export default SummaryScreen;
