<template>
  <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
    <a-button class="editable-add-btn" @click="showModal(-1)">添加</a-button>
    <a-modal
      :title="ModalParam.title"
      @ok="handleModalOk"
      @cancel="handleModalCancel"
      :visible="visible"
      :confirmLoading="confirmLoading"
      :cancelText="ModalParam.cancelText"
      :okText="ModalParam.okText"
    >
      <a-input placeholder="请输入标签名称" v-model="ModalParam.name"/>
    </a-modal>
    <a-table :dataSource="data" :columns="columns">
      <span slot="index" slot-scope="text, record, index">{{ index + 1 }}</span>
      <span slot="name" slot-scope="name">{{ name }}</span>
      <template slot="action" slot-scope="text, record">
        <a href="javascript:;" @click="showModal(record.id)">更新</a>
        <a-popconfirm
          v-if="data.length"
          title="确定要删除吗?"
          @confirm="() => handleDel(record.id)">
          <a-divider type="vertical" />
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
    scopedSlots: { customRender: 'index' },
    width: '10%'
  },
  {
    title: '名称',
    dataIndex: 'name',
    width: '70%'
  },
  {
    title: '操作',
    key: 'action',
    scopedSlots: { customRender: 'action' },
    width: '20%'
  }
]
import { tagList, createTag, updateTag, deleteTag } from '@/api/article'
export default {
  components: {},
  data() {
    return {
      ModalParam: {
        title: '新增标签',
        name: '',
        okText: '确认',
        cancelText: '取消',
        action_id: -1 // 操作id
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
      // 查询
      tagList().then(resp => {
        if (resp.data.status === 200) {
          this.data = resp.data.tags
        }
      })
    },
    handleAdd(name) {
      // 新增
      createTag(name).then(resp => {
        if (resp.data.status === 200) {
          this.fetch()
          this.$message.success(resp.data.msg)
        } else {
          this.$message.error(resp.data.msg)
        }
        this.visible = false
        this.confirmLoading = false
        this.ModalParam.name = ''
      })
    },
    handleUpdate(name) {
      // 更新
      updateTag(this.ModalParam.action_id, name).then(resp => {
        if (resp.data.status === 200) {
          this.fetch()
          this.$message.success(resp.data.msg)
        } else {
          this.$message.error(resp.data.msg)
        }
        this.visible = false
        this.confirmLoading = false
        this.ModalParam.name = ''
      })
    },
    handleDel(key) {
      // 删除
      deleteTag(key).then(resp => {
        if (resp.data.status === 200) {
          this.fetch()
          this.$message.success(resp.data.msg)
        } else {
          this.$message.error(resp.data.msg)
        }
      })
    },
    showModal(id) {
      // 显示弹窗
      this.ModalParam.action_id = id

      if (id < 0) {
        this.ModalParam.title = '新增标签'
      } else {
        this.ModalParam.title = '更新标签'
      }
      this.visible = true
    },
    handleModalOk(e) {
      const name = this.ModalParam.name.trim()
      if (name === '') {
        this.$message.error('名称不能为空')
        return
      }
      this.confirmLoading = true
      if (this.ModalParam.action_id < 0) {
        this.handleAdd(name)
      } else {
        this.handleUpdate(name)
      }
    },
    handleModalCancel(e) {
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
