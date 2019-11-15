<template>
  <div>
    <el-page-header content="会员列表" />
    <el-table
      ref="multipleTable"
      :data="shopUsers"
      tooltip-effect="dark"
      style="width: 100%"
    >
      <el-table-column
        type="selection"
        width="40"
      />
      <el-table-column
        prop="id"
        label="编号"
        width="50"
      />
      <el-table-column
        prop="userName"
        label="姓名"
        width="120"
      />
      <el-table-column
        prop="nickName"
        label="别名"
        width="120"
      />
      <el-table-column
        prop="gender"
        label="性别"
        width="100"
        show-overflow-tooltip
      >
        <template slot-scope="scope">
          <el-tag v-if="scope.row.gender === 0" size="small" type="danger">女</el-tag>
          <el-tag v-else-if="scope.row.gender === 1" size="small" type="success">男</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="birthDay"
        label="生日"
        width="120"
      />
      <el-table-column
        prop="registerTime"
        label="注册时间"
        width="120"
      />
      <el-table-column
        prop="lastLoginTime"
        label="上次登录时间"
        width="120"
      />
      <el-table-column
        prop="lastLoginIp"
        label="上次登录IP"
        width="120"
      />
      <el-table-column
        prop="registerIp"
        label="注册Ip地址"
        width="120"
      />
      <el-table-column
        prop="levelName"
        label="用户等级"
        width="120"
      />
      <el-table-column
        prop="mobile"
        label="手机号"
        width="120"
      />
      <el-table-column
        prop="avatar"
        label="头像"
        width="120"
      >
        <div slot-scope="scope" class="block">
          <el-image :src="scope.row.avatar" />
        </div>
      </el-table-column>
      <el-table-column
        prop="wxOpenId"
        label="OpenId"
        width="120"
      />

    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      shopUsers: [
        //         {"id":33,"userName":"微信用户dm00o2u4wsg5","password":"oD-CZ5WEkAbKEckrRq0KFBH9uUo4","gender":1,"birthDay":null,"registerTime":"2019-07-25 13:26:38","lastLoginTime":"2019-08-07 10:24:03","lastLoginIp":"127.8.8.1","userLevelId":null,"nickName":"NullPointException","mobile":null,"registerIp":"127.8.8.1","avatar":"https://wx.qlogo.cn/mmopen/vi_32/ic7iavxDDNWThJIz8Op3dE1vQbGrSkbCTc9Uzj6zyg9TklpJbFLcd9Artqrh9xHnibXricz0lOQW1oxawW5lkficVLg/132","wxOpenId":null,"levelName":null},{"id":55,"userName":"注册用户vij96","password":"111111","gender":1,"birthDay":null,"registerTime":"2019-07-26 11:23:42","lastLoginTime":"2019-07-26 11:23:42","lastLoginIp":"127.8.8.1","userLevelId":null,"nickName":"AAA","mobile":null,"registerIp":"127.8.8.1","avatar":"https://yanxuan.nosdn.127.net/14920623353130483.jpg","wxOpenId":null,"levelName":null},{"id":56,"userName":"注册用户eqb7i","password":"111111","gender":1,"birthDay":null,"registerTime":"2019-07-26 15:06:48","lastLoginTime":"2019-07-26 15:06:48","lastLoginIp":"127.8.8.1","userLevelId":null,"nickName":"XGZ","mobile":null,"registerIp":"127.8.8.1","avatar":null,"wxOpenId":null,"levelName":null}
      ]
      //        src:'https://wx.qlogo.cn/mmopen/vi_32/ic7iavxDDNWThJIz8Op3dE1vQbGrSkbCTc9Uzj6zyg9TklpJbFLcd9Artqrh9xHnibXricz0lOQW1oxawW5lkficVLg/132'
    }
  },
  //    created:function(){
  //      this.getData();
  //    },
  created() {
    this.getData()
  },
  methods: {
    getData: function() {
      const self = this
      this.$axios.get(this.$reqUrl.shopUserList, {
        params: {
          //            uid: '1',
        }
      })
        .then(function(res) {
          self.shopUsers = res.data.page.list
        })
        .catch(function(error) {
          console.log(error)
        })
        .then(function() {
          // always executed
        })
    }
  }
}
</script>
<!--问题：
  1.需要一个root div
    <div>
     all
    </div>

   2.   let self = this;
        必须要这样
-->
