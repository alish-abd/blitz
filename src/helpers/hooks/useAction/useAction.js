import {useCallback} from "react";
import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import ActionCreators from "@store/actions";

export default function useAction() {
    const dispatch = useDispatch();
    const memoizeDispatch = useCallback(dispatch, [dispatch]);
    return bindActionCreators(ActionCreators, memoizeDispatch);
};
