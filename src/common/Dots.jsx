import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const Dots = () => {
    const currentStep = useSelector((state) => state.poll.currentStep);
    const steps = useSelector((state) => state.poll.steps);

    return (
        <div className="flex flex-col items-center justify-center space-y-4 cursor-pointer">
            {steps.map((_, index) => (
                <motion.div
                    key={index}
                    initial={{ scale: 1 }}
                    animate={index === currentStep ? { scale: 1.5 } : { scale: 1 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                >
                    {index === currentStep ? '🟣' : '⚪️'}
                </motion.div>
            ))}
        </div>
    );
};

export default Dots;
