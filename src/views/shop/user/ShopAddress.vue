<template>
  <div>

    <span class="span">会员地址管理</span>
    <el-divider />
    <el-table
      :data="shopAddress"
      border
      style="width: 100%"
    >
      <el-table-column
        prop="id"
        label="编号"
        width="50"
      />
      <el-table-column
        prop="shopUserName"
        label="创建者"
        width="180"
      />
      <el-table-column
        prop="userName"
        label="用户名"
      />
      <el-table-column
        prop="telNumber"
        label="电话"
      />
      <el-table-column
        prop="postalCode"
        label="邮政编码"
      />
      <el-table-column
        prop="nationalCode"
        label="国际编码"
      />
      <el-table-column
        prop="provinceName"
        label="省份"
      />
      <el-table-column
        prop="cityName"
        label="城市"
      />
      <el-table-column
        prop="countyName"
        label="区域"
      />
      <el-table-column
        prop="detailInfo"
        label="详细地址"
      />
      <el-table-column
        prop=""
        label="是否默认"
      />

    </el-table>

  </div>
</template>

<script>
export default {
  data() {
    return {
      shopAddress: []
    }
  },

  created() {
    this.getData()
  },
  methods: {
    getData() {
      const self = this
      this.$axios.get(this.$reqUrl.shopAddressList, {
        params: {}
      })
        .then(function(res) {
          self.shopAddress = res.data.page.list
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

<style>
  .span{ font-size: 30px}

</style>
