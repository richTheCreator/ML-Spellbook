export const imports = {
  'Alert.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "alert" */ 'Alert.mdx'),
  'Button.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "button" */ 'Button.mdx'),
  'index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "index" */ 'index.mdx'),
}
