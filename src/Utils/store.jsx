import { configureStore } from "@reduxjs/toolkit";
import devicesReducer from './Slice/AssetSlice'
import AssetModalReducer from './Slice/AssetModal'
import TicketDataReducer from './Slice/TicketSlice'
import SliderReducer from './Slice/SliderSlice'

const appStore= configureStore({
    reducer:{
        devices:devicesReducer,
        modal:AssetModalReducer,
        TicketData:TicketDataReducer,
        Slider:SliderReducer


    }
    

});



export default appStore;