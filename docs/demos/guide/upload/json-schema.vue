<template>
  <Form :form="form" :label-col="4" :wrapper-col="10">
    <SchemaField :schema="schema" />
    <FormButtonGroup align-form-item>
      <Submit @submit="onSubmit"> 提交 </Submit>
    </FormButtonGroup>
  </Form>
</template>

<script lang="tsx" setup>
import { defineComponent } from 'vue'
import { createForm } from '@formily/core'
import { createSchemaField } from '@formily/vue'
import {
  Form,
  FormItem,
  Upload,
  Submit,
  FormButtonGroup,
} from '@formily/naive-ui'
import { NButton, NIcon, NText } from 'naive-ui'
import { ArchiveOutline as ArchiveIcon } from '@vicons/ionicons5'

const NormalUpload = defineComponent({
  name: 'NormalUpload',
  render() {
    const props = this.$attrs
    return (
      <Upload
        {...props}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      >
        <NButton>上传文件</NButton>
      </Upload>
    )
  },
})

const CardUpload = defineComponent({
  name: 'CardUpload',
  render() {
    const props = this.$attrs

    return (
      <Upload
        {...props}
        action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
        list-type="image-card"
      ></Upload>
    )
  },
})

const DraggerUpload = defineComponent({
  name: 'DraggerUpload',
  render() {
    const props = this.$attrs

    return (
      <Upload.Dragger
        {...props}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      >
        <div style="margin-bottom: 12px">
          <NIcon size={48} depth={3}>
            <ArchiveIcon />
          </NIcon>
        </div>
        <NText style="font-size: 16px">点击或者拖动文件到该区域来上传</NText>
        <n-p depth="3" style="margin: 8px 0 0 0">
          请不要上传敏感数据，比如你的银行卡号和密码，信用卡号有效期和安全码
        </n-p>
      </Upload.Dragger>
    )
  },
})

const schema = {
  type: 'object',
  properties: {
    base: {
      type: 'array',
      title: '上传',
      'x-decorator': 'FormItem',
      'x-component': 'NormalUpload',
      required: true,
    },
    card: {
      type: 'array',
      title: '卡片上传',
      'x-decorator': 'FormItem',
      'x-component': 'CardUpload',
      required: true,
    },
    drag: {
      type: 'array',
      title: '拖拽上传',
      'x-decorator': 'FormItem',
      'x-component': 'DraggerUpload',
      'x-component-props': {
        directoryDnd: true,
        multiple: true,
        max: 5,
      },
      required: true,
    },
  },
}

const form = createForm()
const { SchemaField } = createSchemaField({
  components: {
    FormItem,
    Upload,
    NormalUpload,
    ArchiveIcon,
    CardUpload,
    DraggerUpload,
    NText,
    NIcon,
  },
})

const onSubmit = (value) => {
  console.log(value)
}
</script>
