import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { useMemo } from "react";


//두가지 파라미터가 필요함. 배열은 액션생성함수로 이루어진 배열, deps 배열은 원소가 바뀌면 함수를 다시 만듬
export default function useActions(actions, deps){
  const dispatch = useDispatch();
  return useMemo(
    () => {
      if (Array.isArray(actions)){
        return actions.map(a => bindActionCreators(a, dispatch));
      }
      return bindActionCreators(actions, dispatch);
    },
    deps ? [dispatch, ...deps] : deps
  );
}