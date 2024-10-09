import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nextStep, selectOption } from '../redux/pollSlice';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Dots from '../common/Dots';

const MultiStepForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const currentStep = useSelector((state) => state.poll.currentStep);
    const steps = useSelector((state) => state.poll.steps);
    const selectedOptions = useSelector((state) => state.poll.selectedOptions);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const variants = {
        enter: { opacity: 0, y: 500 },
        center: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -500 },
    };


    const handleOptionSelect = (optionLabel) => {
        dispatch(selectOption({ stepIndex: currentStep, optionLabel }));

        if (currentStep === steps.length - 1) {
            navigate('/summary');
        } else {
            setTimeout(() => {
                dispatch(nextStep());
            }, 200);
        }
    };

    return (
        <div className="h-screen flex justify-center items-center">
            <div className="w-1/2 h-full bg-pollPurple flex flex-col justify-center items-center relative">
                <div className="absolute z-50 left-14 top-0 bottom-0 flex flex-col justify-center items-center space-y-">
                    <Dots />
                </div>
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={currentStep}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        variants={variants}
                        transition={{ duration: 0.5 }}
                        className="text-6xl max-w-96 medium-screen:ml-28 font-bold text-white"
                    >
                        {steps[currentStep].title}
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="w-1/2 flex justify-center items-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentStep}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        variants={variants}
                        transition={{ duration: 0.5 }}
                        className="grid grid-cols-3 gap-4"
                    >
                        {steps[currentStep].options.map((option, index) => (
                            <motion.div
                                key={index}
                                className="relative text-6xl cursor-pointer px-5"
                                whileHover={{ scale: 1.2 }}
                                onClick={() => {
                                    setHoveredIndex(index);
                                    handleOptionSelect(option.label);
                                }}
                                onHoverStart={() => setHoveredIndex(index)}
                                onHoverEnd={() => setHoveredIndex(null)}
                            >

                                <span className="emoji">{option.icon}</span>

                                <motion.span
                                    className={`absolute left-1/2 transform -translate-x-1/2 mt-16 text-lg font-bold 
                                                ${selectedOptions[currentStep] === option.label ? 'text-purple-600' : 'text-gray-700'}`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {option.label}
                                </motion.span>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>


        </div>
    );
};

export default MultiStepForm;
