<template>
  <div class="outer">
    <h1>{{ title }}</h1>
    <div class="scroll">
      <div class="box1">
        <div class="box1-item" v-for="(i, index) in asyncCount" :key="index">
          <img src="../assets/cake.png"><br>
          <span>{{i.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Category',
  props: ['title'],
  components: {},
  data: function() {
    return {
      asyncCount: [
        {
          name: '麵包',
          icon: 'birthday-cake'
        },
        {
          name: '蛋糕',
          icon: 'gamepad'
        },
        {
          name: '禮盒',
          icon: 'money-bill-alt'
        },
        {
          name: '餐盒',
          icon: 'gift'
        },
        {
          name: '點心',
          icon: 'gift'
        },
        {
          name: '茶會',
          icon: 'gift'
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.outer {
  border-top: 5px solid rgb(232, 232, 232);
  margin-bottom: 10px;

  h1 {
    font-size: 16px;
    margin: 5px 10px;
    text-align: left;
  }

  .scroll {
    overflow: auto;

    .box1 {
      height: 100px;
      position: relative;
      width: 800px;

      .box1-item {
        width: 120px;
        height: 100px;
        background-color: #fff;
        display: inline-block;
        text-align: center;
        color: rgba(255, 122, 11, 0.69);

        &:first-child {
          margin-left: -75px;
        }

        img {
          width: 70px;
        }
      }
    }
  }
}
</style>
