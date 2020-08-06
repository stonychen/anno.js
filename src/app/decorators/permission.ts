import { createDecorator } from 'vue-class-component'

interface PermissionData {
  id: string
}

export function Permission(data: PermissionData) {
  return createDecorator((componentOptions, key) => {

    const methods = componentOptions.methods
    if (!methods) return

    const originalMethod = methods[key]


    methods[key] = function wrapperMethod(...args) {

      originalMethod.apply(this, args)
    }
  })
}
