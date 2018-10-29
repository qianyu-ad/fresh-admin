<template>
  <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
    <a-table :columns="columns"
      :rowKey="record => record.id"
      :dataSource="data"
      :pagination="pagination"
      :loading="loading"
      @change="handleTableChange"
    >
      <template slot="name" slot-scope="name">
        {{name.first}} {{name.last}}
      </template>
    </a-table>
  </a-layout-content>
</template>
<script>
import { userList } from '@/api/user'
const columns = [
  {
    title: 'openid',
    dataIndex: 'id',
    sorter: true,
    width: '20%'
  },
  {
    title: '姓名',
    dataIndex: 'name',
    sorter: true,
    width: '20%'
  },
  {
    title: '性别',
    dataIndex: 'gender',
    // filters: [{ text: '男', value: '1' }, { text: '女', value: '2' }],
    width: '20%'
  }
]

export default {
  mounted() {
    this.fetch()
  },
  data() {
    return {
      data: [],
      pagination: {
        current: 1,
        pageSize: 20
      },
      loading: false,
      columns
    }
  },
  methods: {
    handleTableChange(pagination, filters, sorter) {
      // console.log(pagination)
      const pager = { ...this.pagination }
      pager.current = pagination.current
      this.pagination = pager
      this.fetch({
        results: pagination.pageSize,
        page: pagination.current,
        sortField: sorter.field,
        sortOrder: sorter.order,
        ...filters
      })
    },
    fetch(params = {}) {
      // console.log('params:', params)
      this.loading = true
      userList().then(resp => {
        console.log(resp.data)
        this.data = resp.data.users
        this.loading = false
      })
    }
  }
}
</script>
