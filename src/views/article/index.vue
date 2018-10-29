<template>
  <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
    <a-table :columns="columns" :dataSource="data">
      <span slot="user" slot-scope="user">{{ user.name }}</span>
      <span slot="category" slot-scope="category">
        <a-tag color="blue">{{ category.name }}</a-tag>
      </span>
      <span slot="tags" slot-scope="tags">
        <a-tag v-for="tag in tags" color="blue" :key="tag.id">{{tag.name}}</a-tag>
      </span>
      <span slot="status" slot-scope="status">
        <template v-if="status === 0">审核中</template>
        <template v-else-if="status === 1">已上架</template>
        <template v-else-if="status === 2">已下架</template>
      </span>
      <span slot="action" slot-scope="text, record">
        <a href="javascript:;">上架</a>
        <a-divider type="vertical" />
        <a href="javascript:;">下架</a>
      </span>
    </a-table>
  </a-layout-content>
</template>
<script>
const columns = [
  {
    title: '标题',
    dataIndex: 'title',
    key: 'title'
  },
  {
    title: '用户',
    dataIndex: 'user',
    key: 'user',
    scopedSlots: { customRender: 'user' }
  },
  {
    title: '分类',
    dataIndex: 'category',
    key: 'category',
    scopedSlots: { customRender: 'category' }
  },
  {
    title: '标签',
    key: 'tags',
    dataIndex: 'tags',
    scopedSlots: { customRender: 'tags' }
  },
  {
    title: '状态',
    key: 'status',
    dataIndex: 'status',
    scopedSlots: { customRender: 'status' }
  },
  {
    title: '操作',
    key: 'action',
    scopedSlots: { customRender: 'action' }
  }
]

import { articleList } from '@/api/article'

export default {
  data() {
    return {
      data: [],
      columns
    }
  },
  mounted() {
    this.fetch()
  },
  methods: {
    fetch() {
      articleList().then(resp => {
        console.log(resp.data.articles)
        this.data = resp.data.articles
      })
    }
  }
}
</script>
