```tsx
import React from 'react'
import { createForm } from '@formily/core'
import { FormProvider, createSchemaField } from '@formily/react'
import { Input } from 'antd'

const form = createForm()

const SchemaField = createSchemaField({
  components: {
    Input,
  },
})

export default () => (
  <FormProvider form={form}>
    <SchemaField
      schema={{
        type: 'object',
        properties: {
          input: {
            type: 'string',
            'x-component': 'Input',
            'x-component-props': {
              placeholder: '请输入',
            },
          },
        },
      }}
    />
  </FormProvider>
)
```
