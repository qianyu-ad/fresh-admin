<template>
  <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
    <a-table :columns="columns"
      :rowKey="record => record.id"
      :dataSource="data"
      :pagination="pagination"
      :loading="loading"
      @change="handleTableChange"
    >
    <span slot="index" slot-scope="text, record, index">{{ index + 1 }}</span>
    <span slot="gender" slot-scope="text">
      <template v-if="text == 1">男</template>
      <template v-else>女</template>
    </span>
    </a-table>
  </a-layout-content>
</template>
<script>
import { userList } from '@/api/user'
const columns = [
  {
    title: '#',
    key: 'index',
    scopedSlots: { customRender: 'index' },
    width: '10%'
  },
  {
    title: 'openid',
    dataIndex: 'id',
    width: '20%'
  },
  {
    title: '姓名',
    dataIndex: 'name',
    width: '20%'
  },
  {
    title: '性别',
    dataIndex: 'gender',
    scopedSlots: { customRender: 'gender' },
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
      this.loading = true
      userList().then(resp => {
        this.data = resp.data.users
        this.loading = false
      })
    }
  }
}
</script>
