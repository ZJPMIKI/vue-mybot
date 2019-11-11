import Vue from "vue"
import Vuex from "vuex"
import axios from "axios";
Vue.use(Vuex)

let state = {
    goodsList:[],
    selectedAll:true
}

let actions = {
   async  handleAsyncGoodsList({commit}){
        let data = await axios({
            method:"GET",
            url:"http://localhost:3000/goods"
        })
        data.data.forEach(item=>{
            item.flag = true;
        })
        commit("handleGoodsList",data.data)
    }
}


let mutations = {
    handleGoodsList(state,params){
        state.goodsList = params;
    },
    handleSelectedAllChange(state){
        state.selectedAll = !state.selectedAll;
        state.goodsList.forEach(item=>{
            item.flag = state.selectedAll;
        })
    },
    handleGoodsItemChange(state,index){
        state.goodsList[index].flag = !state.goodsList[index].flag;

        let bStop = true;

        for(var i=0;i<state.goodsList.length;i++){
            if(!state.goodsList[i].flag){
                bStop = false;
            }
        }

        state.selectedAll = bStop;
    },
    handleReducer(state,index){
        if(state.goodsList[index].num<=1){
            state.goodsList[index].num = 1;
        }else{
            state.goodsList[index].num--
        }


    },
    handleAdd(state,index){
        state.goodsList[index].num++;
    }
}

let getters = {
    countPrice(state){
        let sPrice = 0,sCount = 0;

        for(var i=0;i<state.goodsList.length;i++){
            if(state.goodsList[i].flag){
                sCount += state.goodsList[i].num;
                sPrice += state.goodsList[i].num*state.goodsList[i].price
            }
        }


        return {
            sPrice,
            sCount
        }
    }
}


export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})