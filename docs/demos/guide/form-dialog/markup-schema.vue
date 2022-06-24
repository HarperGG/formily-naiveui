<template>
  <FormDialogPortal :id="portalId">
    <NButton @click="handleOpen"> 点击打开表单 </NButton>
  </FormDialogPortal>
</template>

<script setup lang="tsx">
import { ref, provide } from 'vue'
import { FormDialog, FormLayout, FormItem, Input } from '@formily/naive-ui'
import { NButton } from 'naive-ui'
import { createSchemaField } from '@formily/vue'

const { SchemaField, SchemaStringField } = createSchemaField({
  components: {
    FormItem,
    Input,
  },
})

// 弹框表单组件
const DialogForm = {
  props: ['form'],
  inject: ['foo'],
  render() {
    const form = this.form
    return (
      <FormLayout labelCol={6} wrapperCol={10}>
        <SchemaField>
          <SchemaStringField
            name="aaa"
            required
            title="输入框1"
            x-decorator="FormItem"
            x-component="Input"
          />
          <SchemaStringField
            name="bbb"
            required
            title="输入框2"
            x-decorator="FormItem"
            x-component="Input"
          />
          <SchemaStringField
            name="ccc"
            required
            title="输入框3"
            x-decorator="FormItem"
            x-component="Input"
          />
          <SchemaStringField
            name="ddd"
            required
            title="输入框4"
            x-decorator="FormItem"
            x-component="Input"
          />
        </SchemaField>
        <FormDialog.Footer>
          <span style={{ marginLeft: '4px' }}>扩展文案: {form.values.aaa}</span>
        </FormDialog.Footer>
      </FormLayout>
    )
  },
}

const FormDialogPortal = FormDialog.Portal
const portalId = ref('可以传，也可以不传的ID，默认是form-dialog')
provide('foo', '自定义上下文可以直接传到弹窗内部，只需要ID一致即可')

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
    portalId.value,
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
