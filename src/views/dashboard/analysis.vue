<template>
  <div style="background-color: #ececec; padding: 20px;">
    <a-row :gutter="16">
      <a-col :span="8">
        <a-card title="Card title" :bordered=false>
          <p>card content</p>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card title="Card title" :bordered=false>
          <p>card content</p>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card title="Card title" :bordered=false>
          <p>card content</p>
        </a-card>
      </a-col>
    </a-row>
    <a-row :gutter="16" style="margin-top: 20px;">
      <a-col :span="24">
        <a-card>
          <a-tabs defaultActiveKey="1" @change="callback">
            <a-tab-pane tab="Tab 1" key="1">Content of Tab Pane 1</a-tab-pane>
            <a-tab-pane tab="Tab 2" key="2" forceRender>Content of Tab Pane 2</a-tab-pane>
            <a-tab-pane tab="Tab 3" key="3">Content of Tab Pane 3</a-tab-pane>
          </a-tabs>
        </a-card>
      </a-col>
    </a-row>
    <a-row :gutter="16" style="margin-top: 20px;">
      <a-col :span="12">
        <a-card title="Card title" :bordered=false>
          <p>card content</p>
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-card title="Card title" :bordered=false>
          <p>card content</p>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    callback(key) {
      console.log(key)
    }
  }
}
</script>

