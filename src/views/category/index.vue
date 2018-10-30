<template>
  <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
    <a-button class="editable-add-btn" @click="showModal">添加</a-button>
    <a-modal
      title="添加分类"
      @ok="handleOk"
      @cancel="handleCancel"
      :visible="visible"
      :confirmLoading="confirmLoading"
      :cancelText="ModalParam.cancelText"
      :okText="ModalParam.okText"
    >
      <a-input placeholder="请输入分类名称" v-model="ModalParam.name"/>
    </a-modal>
    <a-table :dataSource="data" :columns="columns">
      <span slot="index" slot-scope="text, record, index">{{ index + 1 }}</span>
      <span slot="name" slot-scope="name">{{ name }}</span>
      <template slot="action" slot-scope="text, record">
        <a-popconfirm
          v-if="data.length"
          title="确定要删除吗?"
          @confirm="() => handleDel(record.id)">
          <a href="javascript:;">删除</a>
        </a-popconfirm>
      </template>
    </a-table>
  </a-layout-content>
</template>
<script>
const columns = [
  {
    title: '#',
    key: 'index',
    scopedSlots: { customRender: 'index' }
  },
  {
    title: '名称',
    dataIndex: 'name'
  },
  {
    title: '操作',
    key: 'action',
    scopedSlots: { customRender: 'action' }
  }
]
import { categoryList, createCategory, deleteCategory } from '@/api/article'
export default {
  components: {},
  data() {
    return {
      ModalParam: {
        name: '',
        okText: '确认',
        cancelText: '取消'
      },
      visible: false,
      confirmLoading: false,
      data: [],
      columns
    }
  },
  mounted() {
    this.fetch()
  },
  methods: {
    fetch() {
      // 查询分类数据
      categoryList().then(resp => {
        if (resp.data.status === 200) {
          this.data = resp.data.categories
        }
      })
    },
    handleUpdate(key, name) {
      // 更新分类
    },
    handleDel(key) {
      // 删除分类
      deleteCategory(key).then(resp => {
        if (resp.data.status === 200) {
          this.fetch()
          this.$message.success(resp.data.msg)
        } else {
          this.$message.error(resp.data.msg)
        }
      })
    },
    showModal() {
      // 显示弹窗
      this.visible = true
    },
    handleOk(e) {
      // 添加分类
      const name = this.ModalParam.name.trim()
      if (name === '') {
        return
      }
      this.confirmLoading = true
      createCategory(name).then(resp => {
        if (resp.data.status === 200) {
          this.fetch()
          this.$message.success(resp.data.msg)
        } else {
          this.$message.error(resp.data.msg)
        }
        this.visible = false
        this.confirmLoading = false
      })
    },
    handleCancel(e) {
      console.log('Clicked cancel button')
      this.visible = false
    }
  }
}
</script>
<style>
.editable-cell {
  position: relative;
}

.editable-cell-input-wrapper,
.editable-cell-text-wrapper {
  padding-right: 24px;
}

.editable-cell-text-wrapper {
  padding: 5px 24px 5px 5px;
}

.editable-cell-icon,
.editable-cell-icon-check {
  position: absolute;
  right: 0;
  width: 20px;
  cursor: pointer;
}

.editable-cell-icon {
  line-height: 18px;
  display: none;
}

.editable-cell-icon-check {
  line-height: 28px;
}

.editable-cell:hover .editable-cell-icon {
  display: inline-block;
}

.editable-cell-icon:hover,
.editable-cell-icon-check:hover {
  color: #108ee9;
}

.editable-add-btn {
  margin-bottom: 8px;
}
</style>
