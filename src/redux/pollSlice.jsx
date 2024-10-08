import { createSlice } from '@reduxjs/toolkit';
import { steps } from '../config/stepsConfig';

const initialState = {
    currentStep: 0,
    selectedOptions: {},
    steps: steps,
};

const pollSlice = createSlice({
    name: 'poll',
    initialState,
    reducers: {
        nextStep: (state) => {
            if (state.currentStep < state.steps.length - 1) {
                state.currentStep += 1;
            }
        },
        prevStep: (state) => {
            if (state.currentStep > 0) {
                state.currentStep -= 1;
            }
        },
        selectOption: (state, action) => {
            const { stepIndex, optionLabel } = action.payload;
            state.selectedOptions[stepIndex] = optionLabel;
        },
    },
});

export const { nextStep, prevStep, selectOption } = pollSlice.actions;

export default pollSlice.reducer;
