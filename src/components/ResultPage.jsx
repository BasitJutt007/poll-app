import React from 'react';
import { motion } from 'framer-motion';
import { useFetchAllPollsQuery, useDeletePollByIdMutation, useDeleteAllPollsMutation } from '../redux/pollApi';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetPoll } from '../redux/pollSlice';
import CustomButton from '../common/CustomButton';

const ResultPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { data: polls, isLoading, isError } = useFetchAllPollsQuery();
    const [deletePollById] = useDeletePollByIdMutation();
    const [deleteAllPolls] = useDeleteAllPollsMutation();


    const handleDelete = async (id) => {
        try {
            await deletePollById(id).unwrap();
            toast.success('Poll deleted successfully!');
        } catch (error) {
            toast.error('Failed to delete the poll');
            console.error("Delete error: ", error);
        }
    };


    const handleDeleteAll = async () => {
        try {
            await deleteAllPolls().unwrap();
            toast.success('All polls deleted successfully!');
        } catch (error) {
            toast.error('Failed to delete all polls');
            console.error("Delete all error: ", error);
        }
    };

    const handlePollAgain = () => {
        dispatch(resetPoll());
        navigate('/');
    };


    const variants = {
        hidden: { opacity: 0, y: -500 },
        visible: { opacity: 1, y: 0 },
    };

    if (isLoading) return <p>Loading polls...</p>;
    if (isError) return <p>Failed to load polls.</p>;

    return (
        <motion.div
            className="flex flex-col items-center justify-center min-h-screen p-10 bg-purple-100"
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 0.5 }}
        >
            <Toaster position="top-center" reverseOrder={false} />
            <h2 className="text-4xl font-bold mb-10 text-purple-800">Poll Results</h2>

            <div className="w-full max-w-4xl bg-white shadow-lg rounded-2xl">
                {isLoading ? (
                    // Adding Sekeleton 
                    <div className="animate-pulse">
                        <div className="h-10 bg-gray-200 rounded w-3/4 mx-auto mb-6"></div>
                        <div className="h-10 bg-gray-200 rounded w-3/4 mx-auto mb-6"></div>
                        <div className="h-10 bg-gray-200 rounded w-3/4 mx-auto mb-6"></div>
                    </div>
                ) : polls.length === 0 ? (
                    <div className="p-6 text-center text-gray-500 text-xl">
                        No Record Found
                    </div>
                ) : (
                    <table className="w-full table-auto">
                        <thead className="text-left bg-pollPurple rounded-t-2xl text-white text-lg">
                            <tr >
                                <th className="p-4">Questions</th>
                                <th className="p-4">Answers</th>
                                <th className="p-4 text-center">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {polls.map((poll, index) => (
                                <tr key={poll.id} className="border-b border-gray-200 hover:bg-gray-100 transition">
                                    <td className="p-4 text-slate-800 font-semibold">{poll.question}</td>
                                    <td className="p-4 text-slate-800 font-semibold">{poll.answer}</td>
                                    <td className="p-4 text-center">
                                        <button onClick={() => handleDelete(poll.id)} className="text-red-500 hover:text-red-700 transition">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-trash-2">
                                                <path d="M3 6h18" />
                                                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                                                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                                                <line x1="10" x2="10" y1="11" y2="17" />
                                                <line x1="14" x2="14" y1="11" y2="17" />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>


            <div className='flex flex-row content-center align-baseline mt-10'>
                <div className="">
                    <CustomButton
                        text="Delete All"
                        buttonColor="bg-red-600"
                        disabled={polls.length === 0}
                        textColor="text-white"
                        rounded="rounded-md"
                        onClick={handleDeleteAll}
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

export default ResultPage;
