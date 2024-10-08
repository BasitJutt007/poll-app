import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import CustomButton from '../common/CustomButton';

const SummaryScreen = () => {
    const selectedOptions = useSelector((state) => state.poll.selectedOptions);
    const steps = useSelector((state) => state.poll.steps);
    const navigate = useNavigate();

    const variants = {
        hidden: { opacity: 0, x: -500 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <motion.div
            className="flex flex-col items-center justify-center min-h-screen p-10 bg-purple-700"
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-4xl font-bold mb-10 ">Your Answers</h2>
            <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8">
                <ul className="divide-y divide-gray-200">
                    {steps.map((step, index) => (
                        <li key={index} className="py-4 flex justify-between items-center">
                            <span className="text-xl font-medium text-gray-700">{step.title}</span>
                            <span className="text-lg text-gray-500">
                                {selectedOptions[index] ? selectedOptions[index] : 'Not answered'}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-10">
                <CustomButton
                    text="Back to Poll"
                    bgColor="bg-purple-600"
                    textColor="text-white"
                    onClick={() => navigate('/')}
                />
            </div>
        </motion.div>
    );
};

export default SummaryScreen;
