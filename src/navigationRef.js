import { CommonActions, StackActions } from "@react-navigation/native";

let navigator;

export const setNavigator = (nav) => {
  navigator = nav;
};

export const navigate = (name, params) => {
  navigator.dispatch(
    CommonActions.navigate({
      name,
      params,
    })
  );
};

export const replace = (name) => {
  navigator.dispatch(StackActions.replace(name));
};
