<template>
  <div class="content">
    <div class="goods" v-for="(item,index) in goodsList" :key="item.id">
      <label>
        <input type="checkbox" :checked="item.flag" @change="handleGoodsItemChange(index)"/>
      </label>
      <div class="goodsImg">
        <img :src="item.img" alt />
      </div>
      <div class="goodsInfo">{{item.goodsName}}</div>
      <p class="goodsPrice">{{item.price}}</p>
      <div class="num">
        <button @click="handleReducer(index)">-</button>
        <input type="text" :value="item.num" />
        <button @click="handleAdd(index)">+</button>
      </div>
      <p class="Subtotal">{{item.num | sign(item.price)}}</p>
      <p class="operation">删除</p>
    </div>
  </div>
</template>

<script>
import { mapState,mapMutations} from "vuex";
export default {
  name: "center",
  computed: {
    ...mapState({
      goodsList: state => state.goodsList
    })
  },
  methods:{
      ...mapMutations({
          handleGoodsItemChange:"handleGoodsItemChange",
          handleReducer:"handleReducer",
          handleAdd:"handleAdd"
      })
  },
  filters:{
      sign(num,price){
          return "￥"+(num*price)
      }
  }
};
</script>

<style>
.goods {
  width: 100%;
  display: flex;
  height: 107px;
  align-items: center;
  background: #ccc;
}
.goods > label {
  width: 118px;
  text-align: center;
}
.goods > .goodsInfo {
  width: 200px;
}
.goods > .goodsPrice {
  width: 200px;
  text-align: center;
}
.goods > .num {
  overflow: hidden;
  display: flex;
}
.goods > .num > button {
  width: 20px;
  height: 20px;
  border: 0;
}
.goods > .num > input {
  width: 40px;
}

.goods > .Subtotal {
  width: 200px;
  text-align: center;
}

.goods > .operation {
  width: 86px;
  text-align: center;
}
.goodsImg img {
  width: 80px;
  height: 80px;
}
</style>