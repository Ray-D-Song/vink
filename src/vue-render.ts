import { createRenderer } from '@vue/runtime-core'

const { render, createApp } = createRenderer({
  // ...
})

export { render, createApp }

export * from '@vue/runtime-core'