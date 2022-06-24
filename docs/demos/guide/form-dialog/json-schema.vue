<template>
  <NButton @click="handleOpen"> 点击打开表单 </NButton>
</template>

<script setup lang="tsx">
import { FormDialog, FormLayout, FormItem, Input } from '@formily/naive-ui'
import { NButton } from 'naive-ui'
import { createSchemaField } from '@formily/vue'

const { SchemaField } = createSchemaField({
  components: {
    FormItem,
    Input,
  },
})

// 弹框表单组件
const DialogForm = {
  data() {
    const schema = {
      type: 'object',
      properties: {
        aaa: {
          type: 'string',
          title: '输入框1',
          required: true,
          'x-decorator': 'FormItem',
          'x-component': 'Input',
        },
        bbb: {
          type: 'string',
          title: '输入框2',
          required: true,
          'x-decorator': 'FormItem',
          'x-component': 'Input',
        },
        ccc: {
          type: 'string',
          title: '输入框3',
          required: true,
          'x-decorator': 'FormItem',
          'x-component': 'Input',
        },
        ddd: {
          type: 'string',
          title: '输入框4',
          required: true,
          'x-decorator': 'FormItem',
          'x-component': 'Input',
        },
      },
    }
    return {
      schema,
    }
  },
  render() {
    return (
      <FormLayout labelCol={6} wrapperCol={10}>
        <SchemaField schema={this.schema} />
        <FormDialog.Footer>
          <span style={{ marginLeft: '4px' }}>扩展文案</span>
        </FormDialog.Footer>
      </FormLayout>
    )
  },
}
const segmented = {
  content: 'soft',
  footer: 'soft',
} as const
const style = {
  width: '600px',
}
const handleOpen = () => {
  FormDialog(
    {
      title: '表单弹框',
      width: '600px',
      segmented,
      style,
      size: 'huge',
    },
    DialogForm
  )
    .forOpen((payload, next) => {
      setTimeout(() => {
        next({
          initialValues: {
            aaa: '123',
          },
        })
      }, 1000)
    })
    .forConfirm((payload, next) => {
      setTimeout(() => {
        console.log(payload)
        next(payload)
      }, 1000)
    })
    .forCancel((payload, next) => {
      setTimeout(() => {
        console.log(payload)
        next(payload)
      }, 1000)
    })
    .open()
    .then(console.log)
    .catch(console.error)
}
</script>
