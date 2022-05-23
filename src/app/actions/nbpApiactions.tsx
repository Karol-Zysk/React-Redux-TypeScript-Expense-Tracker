import axios from "axios";
import { nbpDataLoadError, nbpDataLoadStart, nbpDataLoadSuccess } from ".";

export const loadDataAsync: Function =
  () => async (dispatch: (arg0: { type: string; payload?: {} }) => void) => {
    try {
      dispatch(nbpDataLoadStart());

      await axios
        .get(
          "https://api.nbp.pl/api/exchangerates/rates/c/eur/today/?format=json"
        )
        .then((response) => {
          dispatch(nbpDataLoadSuccess(response.data.rates[0].ask.toFixed(2)));
        });
    } catch (error: any) {
      dispatch(nbpDataLoadError(error.message));
    }
  };
